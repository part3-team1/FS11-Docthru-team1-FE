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

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return await response.json();
}

//GET /notifications/unread-count
export async function getUnreadNotificationsCount() {
  const response = await fetch(`${BASE_URL}/notifications/unread-count`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return await response.json();
}

//PATCH /notifications/:id/read
export async function readNotification(id) {
  const response = await fetch(`${BASE_URL}/notifications/${id}/read`, {
    method: 'PATCH',
    credentials: 'include',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return await response.json();
}

//DELETE /notifications/:id
export async function deleteNotification(id) {
  const response = await fetch(`${BASE_URL}/notifications/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return;
}
