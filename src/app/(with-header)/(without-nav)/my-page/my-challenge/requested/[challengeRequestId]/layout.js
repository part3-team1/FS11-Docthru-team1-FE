import * as styles from './layout.css';

export default function Challenges({ children }) {
  return <main className={styles.challengesContainer}>{children}</main>;
}