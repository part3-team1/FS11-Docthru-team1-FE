import {
  deleteNotification,
  getNotifications,
  getUnreadNotificationsCount,
  readNotification,
} from '@/api/notifications.api';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useNotifications({ skip = 0, take = 10 } = {}) {
  return useQuery({
    queryKey: [...queryKeys.notifications.all, { skip, take }],
    queryFn: async () => {
      const res = await getNotifications({ skip, take });
      return res.data;
    },
  });
}

export function useUnreadNotificationsCount() {
  return useQuery({
    queryKey: queryKeys.notifications.unreadCount(),
    queryFn: async () => {
      const res = await getUnreadNotificationsCount();
      return res.data;
    },
  });
}

export function useReadNotification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: readNotification,

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.notifications.all,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.notifications.unreadCount(),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.notifications.detail(id),
      });
    },

    onError: (error, id) => {
      console.log('read error id: ', id);
      console.log('read error message: ', error.message);
    },
  });
}

export function useDeleteNotification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotification,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.notifications.all,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.notifications.unreadCount(),
      });
      queryClient.removeQueries({
        queryKey: queryKeys.notifications.detail(id),
      });
    },

    onError: (error, id) => {
      console.log('delete error id: ', id);
      console.log('delete error message: ', error.message);
    },
  });
}
