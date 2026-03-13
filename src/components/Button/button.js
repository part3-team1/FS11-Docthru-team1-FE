import * as styles from './button.css.js';

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
