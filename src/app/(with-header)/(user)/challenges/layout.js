import LinkButton from '@/components/LinkButton/LinkButton.jsx';
import * as styles from '@/domain/Challenges/Components/Challenges.css.js';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import { ChallengeCardList } from '@/components/ChallengeCard/index.js';
import { mockChallenges } from '@/mock/mockChallenges.js';
import FilterDropdown from '@/components/Dropdown/FilterDropdown/FilterDropdown.jsx';

export default function Challenges({children}) {
  return (
    <>
    {/* <div className={styles.challengesContainer}>
      <div className={styles.challengesHeader}>
        <span className={styles.headerTitle}>나의 챌린지</span>
        <LinkButton href="/new-challenge" preset="apply" />
      </div> */}
      {/* 아직 검색 기능은 구현 안 했어요 UI만 넣었습니다 */}
      {/* <div className={styles.filterWrapper}>
        <FilterDropdown />
        <SearchBar className={styles.searchBar} />
      </div>

      <ChallengeCardList challenges={mockChallenges} />
    </div> */}
      {children}
    </>
  );
}
