import * as styles from './TableColumn.css';

export default function TableColumn({ option, data, field }) {
  return (
    <div>
      <ul >
        <div className={styles.title}>{option}</div>

        {data.map((item) => (
          <li key={item.id} className={styles.list}>
            {item[field]}
          </li>
        ))}
      </ul>
    </div>
  );
}
