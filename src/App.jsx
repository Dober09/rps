import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Model from "./components/Modal";
import { data } from "./data/data";
import Content from "./components/Content";

const App = () => {
  const [showRules,setShowRules] = useState(false)
  const [playerHand,setPlayerHand] = useState(null)
  const [cpuHand,setCpuHand] = useState(null)
  const [score,setScore] = useState(0)
  const [result,setResult] = useState(null)
  
  const handleResult = ()=>{
    if(result === 'win') {
      
      setScore((prevScore)=>prevScore+1)
    }else if(result === 'lose'){
      if (score !== 0){

        setScore((prevScore)=>prevScore-1)
      }
    }
    
  } 
 

  const handleCpuHand= ()=>{
    let rand = Math.floor(Math.random()*3)
    setCpuHand(data[rand])

  
  }
  
  
  
  const handleClick = (hand)=>{
    handleCpuHand()
    setPlayerHand(hand)
    
    
  }
  const handleRuleClick = ()=>{
    setShowRules(!showRules)
  }
  
  const handleBtnClick= ()=>{
    setPlayerHand(null)
    handleResult()
  }
  
  return (
    <main style={{backgroundColor: !showRules ? "transparent":"snow"}}>
    {
      !showRules ?
      <>
    <Header
      score={score}

    />
    <Content
      playerHand={playerHand}
      data = {data}
      
      cpuHand = {cpuHand}
      handleClick={handleClick}
       handleBtnClick= {handleBtnClick} 
      result={result}
      setResult ={setResult}
    />
     
      </>
    :
    <Model/>
    }

      
      <Button
        showRules={showRules}
        handleRuleClick={handleRuleClick}

        />
    </main>
  );
}

export default App;
