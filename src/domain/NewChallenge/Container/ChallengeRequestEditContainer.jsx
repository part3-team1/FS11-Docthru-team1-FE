'use client'
import { useMyChallengeDetail } from '@/domain/MyChallengeDetail/hook/useMyChallengeDetail';
import NewChallengeForm from '../Components/NewChallengeForm';
import { useEditChallenge } from '../hooks/useEditChallenge';
import { useRouter } from 'next/navigation';


export default function ChallengeRequestEditContainer({ id }) {
  const router = useRouter();
  const { data } = useMyChallengeDetail(id);
  const { challengeRequestEdit } = useEditChallenge();
  return (
    <>
      <NewChallengeForm
        defaultData={data}
        onEdit={(formData) =>
          challengeRequestEdit(
            { id, data: formData },
            {
              onSuccess: () =>
                router.replace(`/my-page/my-challenge/requested/${id}`),
            },
          )
        }
      />
    </>
  );
}
