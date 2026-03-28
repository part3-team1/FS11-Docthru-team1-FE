'use client';
import { useState } from 'react';
import * as styles from './NotificationDropdown.css.js';
import { notificationMock } from '@/mock/notificationMockData.js';

export default function NotificationDropdown() {
  const [data, setData] = useState(notificationMock);
  const handleDelete = (id) => {
    setData((prev) => prev.filter((elem) => elem.id !== id));
  };
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader}>
        <span className={styles.dropdownTitle}>알림</span>
      </div>
      <div className={styles.dropdownBody}>
        {data.map(({ id, message, date }) => (
          <div className={styles.dropdownContent} key={id}>
            <span className={styles.message}>{message}</span>
            <div className={styles.dateAndDeleteButton}>
              <span className={styles.date}>{date}</span>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
