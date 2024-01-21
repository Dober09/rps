
import GameSet from "./GameSet";
import Section from "./Section";
const Content = ({playerHand,cpuHand,data,handleClick,handleBtnClick,result,setResult}) => {
    return (
        <>
          {
      playerHand
     ?
    <GameSet
     result={result}
      setResult ={setResult}
      handleBtnClick={handleBtnClick}
      
      cpuHand={cpuHand}
      playerHand={data.filter(item=> (item.hand === playerHand))}
    />:
     <Section
      data={data}
      handleClick={handleClick}
    /> 
     }  
        </>
    );
}

export default Content;
