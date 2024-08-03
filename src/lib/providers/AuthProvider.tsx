import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { $apiClient } from "../api";
import { useLoginMutation } from "../api/auth";

interface User {
  id: string;
  email: string;
  // Add other user properties here
}

interface SessionContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => void;
  //   register: (email: string, password: string) => void;
  //   logout: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  console.log(context);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

const loginUser = async (data: { email: string; password: string }) => {
  const response = await $apiClient.post("/auth/login", data);
  return response.data;
};

const registerUser = async (data: { email: string; password: string }) => {
  const response = await $apiClient.post("/auth/register", data);
  return response.data;
};

const logoutUser = async () => {
  const response = await axios.post("/api/auth/logout");
  return response.data;
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //   const loginMutation = useMutation(loginUser, {
  //     onSuccess: (data) => {
  //       //   setUser(data.user);
  //       console.log(data);

  //       router.push("/dashboard");
  //     },
  //     onError: (error) => {
  //       console.error("Login failed", error);
  //     },
  //   });

  //   const registerMutation = useMutation(registerUser, {
  //     onSuccess: (data) => {
  //       setUser(data.user);
  //       router.push("/dashboard");
  //     },
  //     onError: (error) => {
  //       console.error("Registration failed", error);
  //     },
  //   });

  //   const logoutMutation = useMutation(logoutUser, {
  //     onSuccess: () => {
  //       setUser(null);
  //       queryClient.clear();
  //       router.push("/login");
  //     },
  //     onError: (error) => {
  //       console.error("Logout failed", error);
  //     },
  //   });

  useEffect(() => {
    // Check session on mount (implement your own logic to get the session)
    const checkSession = async () => {
      try {
        const response = await $apiClient.get("/state");
        // setUser(response.data.user);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch session", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = (email: string, password: string) => {
    const { mutate, isSuccess, isError } = useLoginMutation({
      email,
      password,
    });
  };

  //   const register = (email: string, password: string) => {
  //     registerMutation.mutate({ email, password });
  //   };

  //   const logout = () => {
  //     logoutMutation.mutate();
  //   };

  return (
    <SessionContext.Provider value={{ user, login, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
