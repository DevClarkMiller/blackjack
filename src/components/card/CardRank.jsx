import { useMemo } from "react"

const CardRank = ({color, rank, className=""}) => {
    const underline = useMemo(() => (rank === 6 || rank === 9), [rank]);
    const rankDisplay = useMemo(() =>{
        switch(rank){
            case 1: return 'A'
            case 11: return 'J'
            case 12: return 'Q'
            case 13: return 'K'
            default: return rank
        }
    }, [rank]);

    return (
        <h2 className={`select-none text-lg text-center font-semibold text-${color} ${underline&&"underline"} ${className}`}>{rankDisplay}</h2>
    )
}

export default CardRank
