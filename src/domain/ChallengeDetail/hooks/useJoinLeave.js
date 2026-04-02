'use client';
import { joinChallenge, leaveChallenge } from '@/api/challenges.API';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useJoinLeave = (
  challengeId,
  initialIsParticipating,
  initialParticipants,
) => {
  const queryClient = useQueryClient();
  const [isParticipating, setIsParticipating] = useState(
    initialIsParticipating,
  );
  const [currentParticipants, setCurrentParticipants] =
    useState(initialParticipants);

  const invalidate = () => {
    queryClient.invalidateQueries({
      queryKey: [...queryKeys.challenges.detail(), challengeId],
    });
    queryClient.invalidateQueries({
      queryKey: queryKeys.challenges.list(),
    });
  };

  const { mutate: join } = useMutation({
    mutationFn: () => joinChallenge(challengeId),
    onSuccess: () => {
      setIsParticipating(true);
      setCurrentParticipants((prev) => prev + 1);
      invalidate();
    },
  });

  const { mutate: leave } = useMutation({
    mutationFn: () => leaveChallenge(challengeId),
    onSuccess: () => {
      setIsParticipating(false);
      setCurrentParticipants((prev) => prev - 1);
      invalidate();
    },
  });

  useEffect(() => {
    setIsParticipating(initialIsParticipating);
  }, [initialIsParticipating]);

  return { join, leave, isParticipating, currentParticipants };
};
