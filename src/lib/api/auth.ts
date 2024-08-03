import { useMutation } from "@tanstack/react-query";
import { $apiClient } from ".";

export const useLoginMutation = ({
  onSuccess,
}: {
  onSuccess: (data: any) => void;
}) => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await $apiClient.post("/auth/login", data);
      return response.data;
    },
    onSuccess,
  });
};
