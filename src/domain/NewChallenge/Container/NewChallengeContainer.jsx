import NewChallengeForm from "../Components/NewChallengeForm";
import * as styles from './NewChallengeContainer.css'

export default function NewChallengeContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>신규 챌린지 신청</div>
      <NewChallengeForm/>
    </div>
  )
}