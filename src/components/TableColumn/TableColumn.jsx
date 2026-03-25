import { StatusChip } from '@/components/Chip';
import * as styles from './TableColumn.css';
import clsx from 'clsx';

// 날짜 폼
function formatDate(dateTime) {
  const date = new Date(dateTime);
  return `${String(date.getFullYear()).slice(2)}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
}

export default function TableColumn({ option, data, field, className }) {
  const isDate = field.includes('At') || field.includes('date');

  return (
    <div className={styles.container}>
      <ul>
        <div className={styles.titleName}>{option}</div>

        {data.map((item) => (
          <li
            key={item.id}
            className={clsx(
              styles.list,
              field === 'title' && styles.title,
              field === 'status' && styles.chip,
              item.status === 'DELETED' && styles.deleteBox,
            )}
          >
            {isDate ? (
              formatDate(item[field])
            ) : field === 'status' ? (
              <StatusChip status={item[field]} />
            ) : (
              item[field]
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
