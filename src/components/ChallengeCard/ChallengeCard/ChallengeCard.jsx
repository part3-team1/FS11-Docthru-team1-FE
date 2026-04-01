'use client';

import clsx from 'clsx';
import { ChallengeParticipantStatus } from '@/components/Participants';
import { CategoryChip, TypeChip } from '@/components/Chip';
import DueDate from '@/components/DueDate';
import * as styles from './ChallengeCard.css';
import InfoLabel from '@/components/InfoLabel';
import LinkButton from '@/components/LinkButton';
import { useRouter } from 'next/navigation';

function getAction(challenge, preset, submissionId) {
  if (!preset) return null;

  if (!submissionId) {
    console.warn('submissionId is missing');
    return null;
  }


  const presetToHref = {
    continue: `/challenges/${challenge.id}/submissions/${submissionId}/edit`,
    mySubmission: `/challenges/${challenge.id}/submissions/${submissionId}`,
  };

  const href = presetToHref[preset];

  return <LinkButton href={href} preset={preset} />;
}

export default function ChallengeCard({
  challenge,
  preset,
  submissionId,
  topRight,
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

  console.log(challenge.status);
  console.log(challenge.dueDate);
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
