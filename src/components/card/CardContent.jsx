//rafce
import { useMemo } from "react"

//Components
import CardSuite from "./CardSuite"
import CardRank from "./CardRank";

const CardContent = ({suite, rank, color}) => {
  const shouldMap = useMemo(() => rank > 1 && rank < 11,[rank]);

  const rowSizes = useMemo(() =>{
    const rowSize = rank / 2;
    const middleSize = (rowSize > 4) ? (rowSize % 4) * 2 : 0;

    return {
      rowSize: Math.floor((rank > 3) ? rowSize : rank),
      middleSize: Math.floor(middleSize),
      onlyMiddle: rank <= 3
    }
  });

  const rows = useMemo(() =>{
    const outerRow = [...Array(rowSizes.rowSize)].map((x, i) =>(
      <CardSuite color={color} key={i} suite={suite}/>
    ));

    if(rank > 3){
      const middle = [...Array(rowSizes.middleSize)].map((x, i) =>(
        <CardSuite color={color} key={i} suite={suite}/>
      ));

      return {
        left: outerRow,
        middle: middle,
        right: outerRow
      }
    }

    const singleRow = [...Array(rowSizes.rowSize)].map((x, i) =>(
      <CardSuite color={color} key={i} suite={suite}/>
    ));

    return {
      left: null,
      middle: singleRow,
      right: null
    };
  }, [rowSizes, rank]);

  return (
    <div className={`card-content w-full h-3/4 flex flex-row flex-wrap items-center justify-center gap-3`}>
      {shouldMap&&
        <div className={`size-full flex items-center ${rowSizes?.onlyMiddle ? "justify-center" : "justify-between"}`}>
          {!rowSizes?.onlyMiddle&&<div className="left card-content-section">{rows?.left}</div>}
          {<div className="middle card-content-section justify-center">{rows?.middle}</div>}
          {!rowSizes?.onlyMiddle&&<div className="right card-content-section">{rows?.right}</div>}
        </div>
      }

      {!shouldMap&&<CardRank className="text-6xl" rank={rank}/>}
    </div>
  )
}

export default CardContent
