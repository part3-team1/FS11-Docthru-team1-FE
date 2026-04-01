const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

//GET /notifications
// skip, take 처리 여부 나중에 결정 (URLSearchParams())
export async function getNotifications({ skip = 0, take = 10 }) {
  const response = await fetch(
    `${BASE_URL}/notifications?skip=${skip}&take=${take}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '알림 불러오기 실패');
  }

  return data;
}

//GET /notifications/unreadCount
export async function getUnreadNotificationsCount() {
  const response = await fetch(`${BASE_URL}/notifications/unreadCount`, {
    method: 'GET',
    credentials: 'include',
  });

  const data = response.json();
  if (!response.ok) {
    throw new Error(data.message || '읽지 않은 알림 불러오기 실패');
  }

  return data;
}

//PATCH /notifications/:id/read
export async function readNotification(id) {
  const response = await fetch(`${BASE_URL}/notifications/${id}/read`, {
    method: 'PATCH',
    credentials: 'include',
  });

  const data = response.json();
  if (!response.ok) {
    throw new Error(data.message || '알림 읽기 처리 실패');
  }

  return data;
}

//DELETE /notifications/:id
export async function deleteNotification(id) {
  const response = await fetch(`${BASE_URL}/notifications/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  const data = response.json();
  if (!response.ok) {
    throw new Error(data.message || '알림 삭제 실패');
  }

  return;
}
