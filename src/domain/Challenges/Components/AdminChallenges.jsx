import Link from 'next/link';

export default function AdminChallenges() {
  return (
    <>
      <div>Challenges - Admin</div>
      <div>
        <Link href="admin/challenges/1">챌린지 1</Link>
      </div>
      <div>
        <Link href="admin/challenges/2">챌린지 2</Link>
      </div>
    </>
  );
}
