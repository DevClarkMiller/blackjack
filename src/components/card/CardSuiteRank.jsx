import { useMemo } from "react"

//Components
import CardSuite from "./CardSuite"
import CardRank from "./CardRank"

const CardSuiteRank = ({color, suite, rank, flip=false}) => {
    return (
        <div className={`card-suite-rank ${flip&&"rotate-180"}`}>
            <CardRank color={color} rank={rank}/>
            <CardSuite color={color} suite={suite} className="text-sm"/>
        </div>
    )
}

export default CardSuiteRank
