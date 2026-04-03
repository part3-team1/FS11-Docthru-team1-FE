'use client';
import { useChallengeDetail } from '@/domain/ChallengeDetail/hooks/useChallengeDetail';
import NewChallengeForm from '../Components/NewChallengeForm';
import { useEditChallenge } from '../hooks/useEditChallenge';
import { useRouter } from 'next/navigation';

export default function ChallengeEditContainer({ id }) {
  const router = useRouter();
  const { data } = useChallengeDetail(id);
  const { challengeEdit } = useEditChallenge();
  return (
    <>
      <NewChallengeForm
        defaultData={data}
        onEdit={(formData) =>
          challengeEdit(
            { id, data: formData },
            { onSuccess: () => router.replace(`/challenges/${id}`) },
          )
        }
      />
    </>
  );
}
