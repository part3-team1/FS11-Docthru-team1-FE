import Coments from "../Components/Coments/Coments";
import Content from "../Components/Content/Content";
import * as styles from './SubmissonsContainer.css'

export default function SubmissonsContainer() {
  return (
    <div className={styles.container}>
    <Content/>
    <Coments/>
    </div>
  )
}
