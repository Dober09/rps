import { useEffect } from "react"

 const gameLogic = (player,cpu) => {
    if(player === cpu){           
    return ('draw')
    } else if(player === "paper" && cpu === "rock"){
        return ("win")
    }else if(player === "rock" && cpu === "scissors"){
        return ("win")
    }else if( player === "scissors" && cpu === "paper"){
        return ("win")
    }else {
        return ("lose")
    }

}

const GameSet = ({playerHand,cpuHand,result,setResult,handleBtnClick}) => {
    
    const gameResult = ()=>{
        setResult(gameLogic(playerHand[0].hand,cpuHand.hand))

    }

    
    gameResult()
    


   
    return (
        <>

        <div className="game">
            <div className='player'>
                <div className={playerHand[0].hand}>
                {playerHand.hand}
                    <img src={playerHand[0].image} alt={playerHand[0].hand} />
                </div>
                <p>you picked</p>
            </div>
            <div className='cpu'>
            <div className={cpuHand.hand}>
                {playerHand.hand}
                    <img src={cpuHand.image} alt={cpuHand.hand} />
                </div>
                <p>the house picked</p>
            </div>
        </div>
        <div className="result">
            <p>
            {`YOU ${result}`}
            
            </p>
            <button 
            onClick={()=>(handleBtnClick())}>Play again</button>
        </div>
        </>
    );
}

export default GameSet;
