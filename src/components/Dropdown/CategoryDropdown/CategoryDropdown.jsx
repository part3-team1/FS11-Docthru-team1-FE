'use client';

import * as styles from './CategoryDropdown.css.jsx';
import toggle_down from '@/../public/Images/Icon/ic_toggle_down.png';
import toggle_up from '@/../public/Images/Icon/ic_toggle_up.png';
import Image from 'next/image.js';
import { useEffect, useState, useRef } from 'react';

export default function CategoryDropdown({ onSelect }) {
  /*
  Category Dropdown 사용 예시
  사용하는 파일에서: 
    'use client';
    ...
    const [value, setValue] = useState('');
    ...
    return (
    ...
    <CategoryDropdown 
      onSelect={setValue};
      }}
    />
    ...
    )
    value 뽑아서 쓰시면 될 것 같습니다~
  */
  const options = ['Next.js', 'API', 'Career', 'Modern JS', 'Web'];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const wrapperRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(selected);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current) return;

      if (!wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.dropdownContainer}>
      <button onClick={handleToggle} className={styles.dropdownButton}>
        <span>{selected ? selected : '카테고리'}</span>
        <span>
          <Image src={isOpen ? toggle_up : toggle_down} alt="toggle_down.png" />
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <button
              key={option}
              className={styles.dropdownOption}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
