import { logout } from "@/api/authAPI"
import { queryKeys } from "@/lib/queryKeys"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useLogout = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({queryKey:queryKeys.auth.all})
    }
  })
}