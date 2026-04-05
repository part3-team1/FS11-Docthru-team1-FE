import { CategoryChip, TypeChip } from '@/components/Chip';
import Image from 'next/image';
import * as styles from './Content.css';
import EditAndDeleteDropdown from '@/components/EditAndDeleteDropdown/EditAndDeleteDropdown';
import { deleteSubmissionById } from '@/api/challenges.API';
import { useRouter } from 'next/navigation';
import { submissionFormatDate } from '@/utils/format';
import { useEffect, useState } from 'react';
import { useHeart } from '../../hooks/useHeart';
import LinkButton from '@/components/LinkButton';
import { useEditor, EditorContent } from '@tiptap/react';
import { commonExtensions } from '@/domain/Edit/Components/Editor/EditorExtensions';
import ReportBtn from '@/components/ReportBtn/ReportBtn';
import ReasonModal from '@/components/ReasonModal/ReasonModal';


export default function Content({ currentUser, submission }) {
  const router = useRouter();
  const [isHeart, setIsHeart] = useState(submission.isHearted ?? false);
  const [heartCount, setHeartCount] = useState(submission.heartCount);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { mutate: toggleHeart } = useHeart(submission.id);
  const isAdmin = ['ADMIN', 'MASTER'].includes(currentUser?.role);

  const handleHeart = () => {
    toggleHeart(undefined, {
      onSuccess: (res) => {
        setIsHeart(res.data.liked);
        setHeartCount(res.data.heartCount);
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  const viewer = useEditor({
    editable: false,
    extensions: [...commonExtensions],
    content: submission?.content,
    immediatelyRender: false,
  });

  useEffect(() => {
    if (viewer && submission?.content) {
      const content = submission.content;
      if (content?.blocks) {
        const tiptapContent = {
          type: 'doc',
          content: content.blocks.map((block) => ({
            type: 'paragraph',
            content: block.text ? [{ type: 'text', text: block.text }] : [],
          })),
        };
        viewer.commands.setContent(tiptapContent);
      } else {
        viewer.commands.setContent(content);
      }
    }
  }, [submission?.content, viewer]);

  const handleDelete = async () => {
    await deleteSubmissionById(submission.id);
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.totalTitle}>
          <div>
            <div className={styles.challengeTitle}>
              {submission.challenge.title}
            </div>
            <div className={styles.submissionTitle}>{submission.title}</div>
          </div>

          <div className={styles.dropAndReport}>
            {!isAdmin && currentUser?.id !== submission?.userId && (
              <ReportBtn targetId={submission?.id} reportType="SUBMISSION" />
            )}
            <EditAndDeleteDropdown
              currentUser={currentUser}
              content={{
                type: 'submission',
                authorId: submission.userId,
                status: null,
                current_participants: 0,
                isBlocked: false,
              }}
              editHref={`/challenges/${submission.challengeId}/submissions/${submission.id}/edit`}
              onDelete={() => isAdmin ? setIsDeleteModalOpen(true) : handleDelete()}
            />
          </div>
        </div>

        <div className={styles.categoryContainer}>
          <div className={styles.chip}>
            <TypeChip type={submission.challenge.category} />
            <CategoryChip category={submission.challenge.documentType} />
          </div>
          <div>
            <LinkButton
              href={`/challenges/${submission.challengeId}`}
              preset="participatedChallenge"
            />
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.user}>
            {submission?.user.grade === 'NORMAL' ? (
              <Image
                src="/Images/Icon/user.png"
                alt="일반유저 아이콘"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/Images/Icon/user_expert.png"
                alt="전문가 아이콘"
                width={24}
                height={24}
              />
            )}
            <div className={styles.nickName}>{submission.user.nickname}</div>
          </div>
          <div onClick={handleHeart} className={styles.like}>
            <Image
              src={!isHeart ? '/Images/Icon/heart_white.svg' : '/Images/Icon/love.png'}
              alt="좋아요"
              width={16}
              height={16}
              className={styles.heartIcon}
            />
            <div className={styles.likeCount}>{heartCount}</div>
          </div>
        </div>
        <div className={styles.creatDate}>
          {submissionFormatDate(submission.createdAt)}
        </div>
      </div>

      <div className={styles.content}>
        <EditorContent editor={viewer} />
      </div>

      <ReasonModal
        mode="delete"
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={async () => {
          await handleDelete();
          setIsDeleteModalOpen(false);
        }}
      />
    </div>
  );
}