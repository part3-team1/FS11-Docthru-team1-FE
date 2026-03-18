'use client';
import { useState } from 'react';
import * as styles from './FeedInput.css';
import Image from 'next/image';
import ComentCard from '../FeedbackCard/FeedbackCard';


const feedback = ['테스트 내용']


export default function FeedInput() {
  const [coment, setComent] = useState('');

  // const handleSubmit = async () => {
  //   if (!coment.trim()) return;
  //   await creatComent(coment);
  //   setComent('');
  // }

  const handleChange = (e) => {
    setComent(e.target.value);
  };

  return (
    <div className={styles.container}>
      <textarea
        value={coment}
        onChange={handleChange}
        placeholder="피드백을 남겨주세요"
        className={styles.input}
      />

      <Image
        src={
          coment
            ? '/images/icon/comentBtn-active.png'
            : '/images/icon/comentBtn-inacitve.png'
        }
        alt="댓글등록버튼"
        width={40}
        height={40}
        className={styles.addBtn}
        // onClick={handleSubmit}
      />

      {/* 댓글 카드map */}
      {/* currentUser={currentUser} 서버 연결시 삽입 */}
      <ComentCard feedback={feedback} currentUser='ADMIN'  />

      {/* 더보기 */}
      <button className={styles.moreBtn}>더보기</button>
    </div>
  )
}
