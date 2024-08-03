import { useEffect, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "../../lib/providers/AuthProvider";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginOrRegister = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    console.log(isLoginOrRegister);
    if (!isLoginOrRegister && !loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router, pathname, isLoginOrRegister]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or skeleton
  }

  return <>{children}</>;
};

export default AuthLayout;
