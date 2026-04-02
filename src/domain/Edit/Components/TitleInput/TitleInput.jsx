import { useEditorStore } from '@/domain/Edit/store/editor.store.js';
import * as styles from './TitleInput.css.js';

export default function TitleInput() {
  const { title, setTitle } = useEditorStore();

  return (
    <div className={styles.titleInput}>
      <input
        type="text"
        value={title}
        placeholder="제목을 입력하세요."
        onChange={(event) => setTitle(event.target.value)}
        className={styles.inputField}
      />
    </div>
  );
}
