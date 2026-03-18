import Content from '../Components/Content/Content.jsx';
import FeedInput from '../Components/FeedInput/FeedInput.jsx';
import * as styles from './SubmissonsContainer.css.js';

export default function SubmissonsContainer() {
  return (
    <div className={styles.container}>
      <Content />
      <FeedInput />
    </div>
  );
}
