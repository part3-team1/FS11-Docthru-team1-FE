import LinkButton from '@/components/LinkButton/LinkButton.jsx';
import * as styles from './Challenges.css.js';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import { ChallengeCardList } from '@/components/ChallengeCard/index.js';
import { challengesMockData } from '@/mock/challengesMockData.js';

export default function Challenges() {
  return (
    <div className={styles.challengesContainer}>
      <div className={styles.challengesHeader}>
        <span className={styles.headerTitle}>나의 챌린지</span>
        <LinkButton href="/new-challenge" preset="apply" />
      </div>
      {/* 아직 검색 기능은 구현 안 했어요 UI만 넣었습니다 */}
      <SearchBar className={styles.searchBar} />
      {/* 테스트를 위해 목데이터를 임의로 만들어서 했습니다. 지울 예정입니다. */}
      <ChallengeCardList challenges={challengesMockData} />
    </div>
  );
}
