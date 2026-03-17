import { style } from "@vanilla-extract/css";

/** 페이지 전체 바깥 영역 */
export const page = style({
  width: "100%",
  minHeight: "100vh",
  padding: "2.5rem 2rem 4rem",
  boxSizing: "border-box",
});

/** 가운데 정렬용 내부 래퍼 */
export const inner = style({
  width: "100%",
  maxWidth: "64rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

/** 상단 제목 + 액션 버튼 영역 */
export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
});

/** 페이지 제목 */
export const title = style({
  margin: 0,
  fontSize: "1.5rem",
  fontWeight: "700",
  lineHeight: "1.4",
  color: "#111111",
});

/** 우측 액션 버튼 영역 */
export const headerAction = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

/** 탭 전체 영역 */
export const tabList = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  borderBottom: "0.0625rem solid #E5E7EB",
  paddingBottom: "0.75rem",
  overflowX: "auto",
});

/** 비활성 탭 버튼 */
export const tabButton = style({
  border: "none",
  background: "transparent",
  padding: "0.5rem 0.75rem",
  borderRadius: "0.5rem",
  fontSize: "0.9375rem",
  fontWeight: "500",
  lineHeight: "1.4",
  color: "#666666",
  cursor: "pointer",
  whiteSpace: "nowrap",
});

/** 활성 탭 버튼 */
export const activeTabButton = style({
  border: "none",
  background: "#111111",
  padding: "0.5rem 0.75rem",
  borderRadius: "0.5rem",
  fontSize: "0.9375rem",
  fontWeight: "600",
  lineHeight: "1.4",
  color: "#FFFFFF",
  cursor: "pointer",
  whiteSpace: "nowrap",
});

/** 검색창 래퍼 */
export const searchBox = style({
  width: "100%",
});

/** 검색 input */
export const searchInput = style({
  width: "100%",
  height: "2.75rem",
  padding: "0 1rem",
  border: "0.0625rem solid #D1D5DB",
  borderRadius: "0.75rem",
  fontSize: "0.9375rem",
  lineHeight: "1.4",
  color: "#111111",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box",
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: "#9CA3AF",
    },
    "&:focus": {
      borderColor: "#111111",
    },
  },
});

/** 카드 리스트 영역 */
export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

/** 빈 상태 메시지 */
export const emptyText = style({
  margin: 0,
  padding: "2rem 1rem",
  textAlign: "center",
  fontSize: "0.9375rem",
  lineHeight: "1.6",
  color: "#666666",
  border: "0.0625rem dashed #D1D5DB",
  borderRadius: "0.75rem",
  backgroundColor: "#FAFAFA",
});

/** 임시 카드 박스 */
export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.875rem",
  padding: "1rem",
  border: "0.0625rem solid #D1D5DB",
  borderRadius: "0.75rem",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box",
});

/** 카드 상단 뱃지 */
export const badge = style({
  alignSelf: "flex-start",
  padding: "0.25rem 0.5rem",
  borderRadius: "9999rem",
  backgroundColor: "#111111",
  fontSize: "0.75rem",
  fontWeight: "600",
  lineHeight: "1.2",
  color: "#FFFFFF",
});

/** 카드 제목 */
export const cardTitle = style({
  margin: 0,
  fontSize: "1rem",
  fontWeight: "700",
  lineHeight: "1.5",
  color: "#111111",
});

/** 카드 보조 정보 줄 */
export const meta = style({
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
  flexWrap: "wrap",
  fontSize: "0.875rem",
  lineHeight: "1.4",
  color: "#666666",
});

/** 카드 하단 정보 영역 */
export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  color: "#666666",
});

/** 카드 액션 영역 */
export const action = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "0.25rem",
});

/** 텍스트 링크 느낌 버튼/링크 */
export const actionLink = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "2rem",
  padding: "0.375rem 0.75rem",
  border: "0.0625rem solid #111111",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: "600",
  lineHeight: "1.4",
  color: "#111111",
  backgroundColor: "#FFFFFF",
  textDecoration: "none",
  cursor: "pointer",
});

/** 상태 버튼 공통 */
export const actionButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "2rem",
  padding: "0.375rem 0.75rem",
  border: "0.0625rem solid #111111",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: "600",
  lineHeight: "1.4",
  color: "#111111",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
});