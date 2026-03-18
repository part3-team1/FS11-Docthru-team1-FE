'use client';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';
import CategoryDropdown from '@/components/Dropdown/CategoryDropdown/CategoryDropdown';
import { useState } from 'react';
import * as styles from './SubmissionsContainer.css'


export default function SubmissonsContainer() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className={styles.container}>
        <CategoryDropdown onSelect={setValue} />
        <EditAndDeleteDropdown editHref={'/login'} onDelete={()=> api호출함수(id)} />
      </div>
    </>
  );
}
