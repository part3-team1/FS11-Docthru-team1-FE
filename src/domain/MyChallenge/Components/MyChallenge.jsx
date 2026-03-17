"use client";

import Link from "next/link";
import * as styles from "./MyChallenge.css";
import CategoryChip from "@/components/Chip/CategoryChip";
import TypeChip from "@/components/Chip/TypeChip";

/**
 * 나의 챌린지 화면
 * 역할:
 * - 제목 / 탭 / 검색 / 카드 리스트 렌더링
 * - 카드 내용은 피그마 기준 텍스트 구조로 표시
 */
export default function MyChallenge({
  activeTab,
  tabList,
  searchKeyword,
  challengeList,
  onTabChange,
  onSearchKeywordChange,
}) {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>나의 챌린지</h1>

          <div className={styles.headerAction}>
            <button type="button" className={styles.headerButton}>
              신규 챌린지 신청 +
            </button>
          </div>
        </div>

        <div className={styles.tabList}>
          {tabList.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                className={isActive ? styles.activeTabButton : styles.tabButton}
                onClick={() => {
                  onTabChange(tab.id);
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            value={searchKeyword}
            placeholder="챌린지 이름을 검색해보세요"
            onChange={(event) => {
              onSearchKeywordChange(event.target.value);
            }}
          />
        </div>

        <div className={styles.list}>
          {challengeList.length === 0 ? (
            <p className={styles.emptyText}>조건에 맞는 챌린지가 없습니다.</p>
          ) : (
            challengeList.map((challenge) => {
              return (
                <article key={challenge.id} className={styles.card}>
                  {/* 상단 상태 배지 */}
                  <div className={styles.cardTop}>
                    <span className={styles.statusBadge}>
                      🕐 {challenge.statusLabel}
                    </span>
                  </div>

                  {/* 제목 */}
                  <h2 className={styles.cardTitle}>{challenge.title}</h2>

                  {/* 카테고리 / 문서 타입 칩 */}
                  <div className={styles.chipRow}>
  <TypeChip type={challenge.typeKey} />
  <CategoryChip category={challenge.categoryKey} />
</div>

                  {/* 구분선 */}
                  <div className={styles.divider} />

                  {/* 하단 정보 + 액션 */}
                  <div className={styles.cardBottom}>
                    <div className={styles.infoRow}>
                      <span className={styles.infoText}>⏰ {challenge.deadlineText}</span>
                      <span className={styles.infoText}>👥 {challenge.progressText}</span>
                    </div>

                    <div className={styles.action}>
                      {challenge.status === "inProgress" && (
                        <Link
                          href={`/edit?challengeId=${challenge.id}`}
                          className={styles.actionButton}
                        >
                          {challenge.actionLabel}
                        </Link>
                      )}

                      {challenge.status !== "inProgress" && (
                        <button type="button" className={styles.actionButton}>
                          {challenge.actionLabel}
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}