import { CategoryChip, StatusChip, TypeChip } from '@/components/Chip';
import * as styles from './TableColumn.css';
import clsx from 'clsx';

// 날짜 폼
function formatDate(dateTime) {
  const date = new Date(dateTime);
  return `${String(date.getFullYear()).slice(2)}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
}

export default function TableColumn({ option, data, field, onClick  }) {
  const isDate = field.includes('At') || field.includes('date');
  //카테고리이면 카테고리 칩
  const isCategory = field === 'category';
  //도큐먼트타입이면 도큐먼트 칩으로
  const isDocumentType = field === 'documentType';

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
              onClick&& styles.click
            )}
            onClick={() => onClick?.(item)}
          >
            {isDate ? (
              formatDate(item[field])
            ) : field === 'status' ? (
              <StatusChip status={item[field]} />
            ) : isCategory  ? (
              <TypeChip type={item[field]} /> 
            ) :isDocumentType ? (
              <CategoryChip category={item[field]} />
            ) : (
              item[field]
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
