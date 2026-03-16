import Image from 'next/image.js';
import * as styles from './FeatureSection.css.jsx';

export default function FeatureSection() {
  return (
    <div>
      <div className={styles.section}>
        <div>
          <Image
            src="/images/Logo/trophy.svg"
            alt="트로피 아이콘"
            width={24}
            height={24}
          />
          <h2>
            혼자서는 막막했던 번역,
            <br />
            챌린지로 함께 완성하기
          </h2>
          <h4>
            중요한 건 꺽이지 않는 마음! 동료들과 함께
            <br />
            기술 문서를 번역해 보세요.
          </h4>
        </div>
      </div>
      <div className={styles.section}>
        <div>
          <Image
            src="/images/Logo/heart.svg"
            alt="트로피 아이콘"
            width={24}
            height={24}
          />
          <h2>
            내가 좋아하는 기술 번역,
            <br />
            내가 필요한 기술 번역
          </h2>
          <h4>
            이미 진행 중인 번역 챌린지에 참여하거나,
            <br />
            새로운 번역 챌린지를 시작해 보세요.
          </h4>
        </div>
      </div>
      <div className={styles.section}>
        <div>
          <Image
            src="/images/Logo/feedback.svg"
            alt="트로피 아이콘"
            width={24}
            height={24}
          />
          <h2>피드백으로 함께 성장하기</h2>
          <h4>
            번역 작업물에 대해 피드백을 주고 받으며
            <br />
            영어 실력은 물론, 개발 실력까지 키워보세요
          </h4>
        </div>
      </div>
    </div>
  );
}
