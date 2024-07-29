
//Components
import CardSuiteRank from "./CardSuiteRank"

const SuiteRow = ({flip=false, suite, rank, color}) => {
  return (
    <div className={`card-suite-row col-flex-center ${flip&&"justify-end"}`}>
        <CardSuiteRank color={color} flip={flip} rank={rank} suite={suite}/>
    </div>
  )
}

export default SuiteRow
