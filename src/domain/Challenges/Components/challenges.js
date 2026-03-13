import Link from "next/link";

export default function Challenges() {
  return (
    <>
      <div>Challenges</div>
      <div>
        <Link href='/challenges/1'>챌린지 1</Link>
      </div>
      <div>
        <Link href='/challenges/2'>챌린지 2</Link>
      </div>
    </>
  )
}
