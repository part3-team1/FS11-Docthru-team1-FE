'use client';

import clsx from 'clsx';
import { ChallengeParticipantStatus } from '@/components/Participants';
import { CategoryChip, TypeChip } from '@/components/Chip';
import DueDate from '@/components/DueDate';
import * as styles from './ChallengeCard.css';
import InfoLabel from '@/components/InfoLabel';
import LinkButton from '@/components/LinkButton';
import { useRouter } from 'next/navigation';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';

function getAction(challenge, preset, submissionId) {
  if (!preset) return null;

  if (preset === 'mySubmission' && !submissionId) {
    return (
      <LinkButton
        href="#"
        preset={preset}
        onClick={(e) => {
          e.preventDefault();
          alert('작업물을 제출하지 않았습니다!');
        }}
      />
    );
  }

  const presetToHref = {
    // submissionId 있으면 edit, null이면 new로 분기
    continue: submissionId
      ? `/challenges/${challenge.id}/submissions/${submissionId}/edit`
      : `/challenges/${challenge.id}/submissions/new`,

    mySubmission: `/challenges/${challenge.id}/submissions/${submissionId}`,
  };

  const buttonHref = presetToHref[preset];

  return <LinkButton href={buttonHref} preset={preset} />;
}

export default function ChallengeCard({
  challenge,
  preset,
  submissionId,
  topRight,
  isAdmin,
  currentUser,
  onDelete,
  onBlock,
}) {
  const router = useRouter();

  const isFull = challenge.currentParticipants >= challenge.maxParticipants;

  const badge =
    challenge.status === 'CLOSED'
      ? 'challengeClosed'
      : isFull
        ? 'participateClosed'
        : null;

  const action = getAction(challenge, preset, submissionId);

  const handleClick = () => router.push(`/challenges/${challenge.id}`);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
    >
      <div
        className={clsx(
          styles.challengeCard,
          badge ? styles.heightWithStatus : styles.heightDefault,
        )}
      >
        <div className={styles.challengeTop}>
          {badge && <InfoLabel preset={badge} />}
          {topRight && (
            <div
              className={styles.topRight}
              onClick={(e) => e.stopPropagation()}
            >
              {topRight}
            </div>
          )}
          <h2 className={styles.title}>{challenge.title}</h2>
          {/* 어드민이면 나옴 */}
          {isAdmin && (
            <div
              className={styles.topRight}
              onClick={(e) => e.stopPropagation()}
            >
              <EditAndDeleteDropdown
                currentUser={currentUser}
                content={{
                  type: 'challenge',
                  authorId: challenge.requestedBy,
                  status: challenge.status,
                  current_participants: challenge.currentParticipants,
                  isBlocked: challenge.isBlocked ?? false,
                }}
                onDelete={onDelete}
                onBlock={onBlock}
              />
            </div>
          )}

          <div className={styles.chipWrapper}>
            <TypeChip type={challenge.category} />
            <CategoryChip category={challenge.documentType} />
          </div>
        </div>

        <div className={styles.challengeBottom}>
          <div className={styles.infoWrapper}>
            <DueDate dueDate={challenge.dueDate} />
            <ChallengeParticipantStatus
              current={challenge.currentParticipants}
              max={challenge.maxParticipants}
            />
          </div>
          {action && (
            <div className={styles.action} onClick={(e) => e.stopPropagation()}>
              {action}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
