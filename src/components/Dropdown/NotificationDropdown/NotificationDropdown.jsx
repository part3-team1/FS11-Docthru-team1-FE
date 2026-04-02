'use client';
import { useState } from 'react';
import * as styles from './NotificationDropdown.css.js';
import { notificationMock } from '@/mock/notificationMockData.js';
import {
  useDeleteNotification,
  useNotifications,
  useReadNotification,
} from '@/domain/Notification/hooks/useNotification.js';

export default function NotificationDropdown() {
  //const [data, setData] = useState(notificationMock);
  // const handleDelete = (id) => {
  //   setData((prev) => prev.filter((elem) => elem.id !== id));
  // };

  const { data, isLoading, isError, error } = useNotifications({
    skip: 0,
    take: 10,
  });

  const deleteMutation = useDeleteNotification();
  const readMutation = useReadNotification();

  if (isLoading) {
    return (
      <div className={styles.dropdownContainer}>
        <span>로딩중...</span>
      </div>
    );
  }

  if (isError) {
    console.log(error.message);
    return (
      <div className={styles.dropdownContainer}>
        <span>문제가 발생했습니다.</span>
      </div>
    );
  }

  const notifications = data?.items ?? [];

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader}>
        <span className={styles.dropdownTitle}>알림</span>
      </div>
      <div className={styles.dropdownBody}>
        {notifications.length === 0 ? (
          <div>알림이 없습니다.</div>
        ) : (
          notifications.map(({ id, message, createdAt, isRead }) => (
            <div
              className={`${styles.dropdownContent} ${!isRead ? styles.unread : ''}`}
              key={id}
              onClick={() => {
                if (!isRead) {
                  readMutation.mutate(id);
                }
              }}
            >
              <span className={styles.message}>{message}</span>

              <div className={styles.dateAndDeleteButton}>
                <span className={styles.date}>
                  {new Date(createdAt).toLocaleDateString('ko-KR')}
                </span>

                <button
                  className={styles.deleteButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteMutation.mutate(id);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
