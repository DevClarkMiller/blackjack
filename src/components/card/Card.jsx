import { useEffect, useMemo } from "react";

//Components
import SuiteRow from "./SuiteRow";
import CardContent from "./CardContent";


const Card = ({suite, rank}) => {
    const color = useMemo(() => (suite === "hearts" || suite === "diamonds") ? "red-500" : "black", [suite]);

    useEffect(() =>{
        console.log(color);
    }, [color])

    return (
        <div className="card">
            <SuiteRow color={color} rank={rank} suite={suite}/>
            <CardContent color={color} suite={suite} rank={rank}/>
            <SuiteRow color={color} flip rank={rank} suite={suite}/>
        </div>
  );
}

export default Card
