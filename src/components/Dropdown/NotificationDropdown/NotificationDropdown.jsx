import * as styles from './NotificationDropdown.css.js';
import {notificationMock} from '@/mock/notificationMockData.js';

export default function NotificationDropdown() {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader}>
        <span className={styles.dropdownTitle}>알림</span>
      </div>
      <div className={styles.dropdownBody}>
        {notificationMock.map(({ message, date }) => (
          <div className={styles.dropdownContent} key={message}>
            <span className={styles.message}>{message}</span>
            <span className={styles.date}>{date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
