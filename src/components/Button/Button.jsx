import * as styles from './Button.css.jsx';

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
