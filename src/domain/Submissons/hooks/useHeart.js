import { heartSubmissionById } from "@/api/challenges.API";
import { useAuth } from "@/Providers/AuthProvider"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useHeart = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => heartSubmissionById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['submissions',id]})
    }
  })


}