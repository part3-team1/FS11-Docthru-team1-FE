import { getAdminRequestById, approveRequest, rejectRequest } from '@/api/admin.API';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useAdminChallengeDetail(id) {
    console.log('id:', id);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['adminRequest', id],
    queryFn: () => getAdminRequestById(id),
    enabled: !!id,
  });


  const { mutate: approve, isPending: isApproving } = useMutation({
    mutationFn: () => approveRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminRequest', id] });
      queryClient.invalidateQueries({ queryKey: ['adminRequests'] });
    },
  });

  const { mutate: reject, isPending: isRejecting } = useMutation({
    mutationFn: (reason) => rejectRequest(id, reason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminRequest', id] });
      queryClient.invalidateQueries({ queryKey: ['adminRequests'] });
    },
  });

  return {
    data: data?.data ?? null,
    isLoading,
    approve,
    reject,
    isApproving,
    isRejecting,
  };
}