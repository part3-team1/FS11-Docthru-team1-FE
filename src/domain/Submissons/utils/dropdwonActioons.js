//수정 삭제 드롭다운 사용자 확인 훅

export default function useDropdownActions({ currentUser, content }) {
  const { id: userId, role } = currentUser;
  const {
    type,
    authorId,
    current_participants = [],
    status,
    isBlocked,
  } = content;

  // 어드민이니..?
  const isAdmin = role === 'ADMIN';
  // 작성자이니...?
  const isOwner = userId === authorId;
  // 참여했니..?
  const hasParticipants = current_participants.length > 0;

  // 어드민
  if (isAdmin) {
    //  만약 피드백이면
    if (type === 'feedback') {
      // 이거 나옴 ( label: 드롭다운 아림 / action: 행동 )
      return isBlocked
        ? [{ label: '해제하기', action: 'unhide' }]
        : [{ label: '가리기', action: 'hide' }];
    }
    // 피드백 아니면
    return [{ label: '삭제', action: 'delete' }];
  }

  // 챌린지 신청자
  const isChallenger = isOwner && type === 'challenge';
  // 만약.. 챌린지 신청자
  if (isChallenger) {
    // 만약 챌린지 오픈 상태가 아니면 아무것도 못함
    if (status !== 'OPENED') return [];
    // 참여자가 있다면 아무것도 못함
    if (hasParticipants) return [];
    // 챌린지가 오픈되고 참여자가 없으면 이거 나옴
    return [
      {
        label: '수정',
        action: 'edit',
        variant: 'default',
      },
    ];
  }

  //작성자 본인 (피드백, 작업물)
  if (isOwner) {
    return [
      { label: '수정', action: 'edit' },
      { label: '삭제', action: 'delete' },
    ];
  }

  // 아무것도 없는 유저
  return [];
}
