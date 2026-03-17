"use client";

import { useMemo, useState } from "react";
import MyChallenge from "../Components/MyChallenge";

/** 탭 id 상수 */
const TAB = {
  IN_PROGRESS: "inProgress",
  COMPLETED: "completed",
  APPLIED: "applied",
};

/** 탭 목록 */
const TAB_LIST = [
  { id: TAB.IN_PROGRESS, label: "참여중인 챌린지" },
  { id: TAB.COMPLETED, label: "완료한 챌린지" },
  { id: TAB.APPLIED, label: "신청한 챌린지" },
];

/** MyChallenge 화면에서 사용할 더미 데이터 */
const CHALLENGE_LIST = [
  {
    id: 1,
    status: TAB.COMPLETED,
    statusLabel: "챌린지가 마감되었어요",
    title: "Next.js - App Router: Routing Fundamentals",
    category: "Next.js",
    docType: "공식문서",
    typeKey: "NEXTJS",
    categoryKey: "DOCUMENTATION",
    deadlineText: "2024년 3월 3일 마감",
    progressText: "5/5 참여 완료",
    actionLabel: "내 작업물 보기",
  },
  {
    id: 2,
    status: TAB.COMPLETED,
    statusLabel: "챌린지가 마감되었어요",
    title: "Fetch API, 너는 에러를 제대로 핸들링 하고 있는가?(dailydev)",
    category: "API",
    docType: "공식문서",
    typeKey: "API",
    categoryKey: "DOCUMENTATION",
    deadlineText: "2024년 2월 28일 마감",
    progressText: "5/5 참여 완료",
    actionLabel: "내 작업물 보기",
  },
  {
    id: 3,
    status: TAB.COMPLETED,
    statusLabel: "챌린지가 마감되었어요",
    title: "개발자로서 자신만의 브랜드를 구축하는 방법(dailydev)",
    category: "Career",
    docType: "블로그",
    typeKey: "CAREER",
    categoryKey: "BLOG",
    deadlineText: "2024년 2월 28일 마감",
    progressText: "5/5 참여 완료",
    actionLabel: "내 작업물 보기",
  },
  {
    id: 4,
    status: TAB.IN_PROGRESS,
    statusLabel: "진행 중인 챌린지",
    title: "TanStack Query - Optimistic Updates",
    category: "React",
    docType: "공식문서",
    typeKey: "CAREER",
    categoryKey: "BLOG",
    deadlineText: "2024년 8월 15일 마감",
    progressText: "2/5 참여 중",
    actionLabel: "도전 계속하기",
  },
  {
    id: 5,
    status: TAB.APPLIED,
    statusLabel: "신청한 챌린지",
    title: "JavaScript 비동기 흐름 완전 정복",
    category: "JavaScript",
    docType: "아티클",
    typeKey: "CAREER",
    categoryKey: "BLOG",
    deadlineText: "2024년 8월 20일 마감",
    progressText: "승인 대기 중",
    actionLabel: "신청 상태 보기",
  },
];


export default function MyChallengeContainer() {
  /** 피그마 기준으로 완료한 챌린지를 기본 선택 탭으로 둠 */
  const [activeTab, setActiveTab] = useState(TAB.COMPLETED);

  /** 검색창 입력값 상태 */
  const [searchKeyword, setSearchKeyword] = useState("");

  /** 현재 선택된 탭 + 검색어 기준으로 리스트 필터링 */
  const filteredChallengeList = useMemo(() => {
    /** 1차: 현재 탭에 맞는 데이터만 남김 */
    const tabFilteredList = CHALLENGE_LIST.filter((challenge) => {
      return challenge.status === activeTab;
    });

    /** 검색어 앞뒤 공백 제거 후 소문자 비교용으로 변환 */
    const normalizedKeyword = searchKeyword.trim().toLowerCase();

    /** 검색어가 없으면 탭 필터 결과 그대로 반환 */
    if (!normalizedKeyword) {
      return tabFilteredList;
    }

    /** 2차: 제목 / 카테고리 / 문서 타입 기준으로 검색 */
    return tabFilteredList.filter((challenge) => {
      return (
        challenge.title.toLowerCase().includes(normalizedKeyword) ||
        challenge.category.toLowerCase().includes(normalizedKeyword) ||
        challenge.docType.toLowerCase().includes(normalizedKeyword)
      );
    });
  }, [activeTab, searchKeyword]);

  return (
    <MyChallenge
      activeTab={activeTab}
      tabList={TAB_LIST}
      searchKeyword={searchKeyword}
      challengeList={filteredChallengeList}
      onTabChange={setActiveTab}
      onSearchKeywordChange={setSearchKeyword}
    />
  );
}