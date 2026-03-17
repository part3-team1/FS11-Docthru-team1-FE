import Image from 'next/image.js';
import * as styles from './FeatureSection.css.jsx';

export default function FeatureSection() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.content}>
          <Image
            src="/images/Icon/trophy.svg"
            alt="트로피 아이콘"
            width={24}
            height={24}
          />
          <div className={styles.sectionPoint}>
            혼자서는 막막했던 번역,
            <br />
            챌린지로 함께 완성하기
          </div>
          <div className={styles.description}>
            중요한 건 꺽이지 않는 마음! 동료들과 함께
            <br />
            기술 문서를 번역해 보세요.
          </div>
        </div>

        <Image
          src="/images/home1.png"
          alt="챌린지카드 예시"
          width={400}
          height={300}
          className={styles.img}
        />
      </div>

      {/*  */}
      <div className={styles.centerSection}>
        <div className={styles.content}>
          <Image
            src="/images/Icon/heart.svg"
            alt="트로피 아이콘"
            width={24}
            height={24}
          />
          <div className={styles.sectionPoint}>
            내가 좋아하는 기술 번역,
            <br />
            내가 필요한 기술 번역
          </div>
          <div className={styles.description}>
            이미 진행 중인 번역 챌린지에 참여하거나,
            <br />
            새로운 번역 챌린지를 시작해 보세요.
          </div>
        </div>
        <Image
          src="/images/home2.png"
          alt="챌린지카드 예시"
          width={400}
          height={300}
          className={styles.img2}
        />
      </div>

      {/*  */}
      <div className={styles.FeedbackSection}>
        <div className={styles.content}>
          <Image
            src="/images/Icon/feedback.svg"
            alt="트로피 아이콘"
            width={24}
            height={24}
          />
          <div className={styles.sectionPoint}>피드백으로 함께 성장하기</div>
          <div className={styles.description}>
            번역 작업물에 대해 피드백을 주고 받으며
            <br />
            영어 실력은 물론, 개발 실력까지 키워보세요
          </div>
        </div>
        <Image
          src="/images/home3.png"
          alt="챌린지카드 예시"
          width={395}
          height={280}
          className={styles.feedbackImg}
        />
      </div>
    </div>
  );
}
