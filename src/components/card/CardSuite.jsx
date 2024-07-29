import { useMemo, useContext, useEffect } from "react";

//Context
import { CardContext } from "../../App";

const CardSuite = ({color, suite, flip, className=""}) =>{
    //Context
    const {Suites} = useContext(CardContext);

    return(
        <>{suite&&
            <div className={`text-2xl text-center col-flex-center justify-between text-${color} ${flip&&"rotate-180"} ${className}`}>{Suites[suite]}</div>
        }</>
    );
}

export default CardSuite;