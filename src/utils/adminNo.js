// utils/adminNo.js

// 목록에서 상세로 이동할 때 URL에 no, totalCount 붙여서 넘기기
// ex) router.push(`/admin/challenge-management/${item.id}?no=${item.no}&totalCount=${totalCount}`)

// 상세 페이지에서 no 계산
export function getAdminRequestNo({ no, totalCount }) {
  if (!no || !totalCount) return null;
  return { no: Number(no), totalCount: Number(totalCount) };
}

// 이전/다음 이동을 위해 목록의 ids를 sessionStorage에 저장
export function saveRequestIds(ids) {
  sessionStorage.setItem('adminRequestIds', JSON.stringify(ids));
}

export function getAdjacentIds(currentId) {
  const ids = JSON.parse(sessionStorage.getItem('adminRequestIds') ?? '[]');
  const currentIndex = ids.indexOf(currentId);
  if (currentIndex === -1) return { prevId: null, nextId: null };

  return {
    prevId: currentIndex > 0 ? ids[currentIndex - 1] : null,
    nextId: currentIndex < ids.length - 1 ? ids[currentIndex + 1] : null,
  };
}