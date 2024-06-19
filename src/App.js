import './App.css';
import HomeSection from './components/Home';
import { useState, useRef } from 'react';
import FlowingComp from './components/Flowing';

function App() {

  const [point ,setPoint] = useState('X')
  const [winScore, setWinScore] = useState('')

  const resetButton = useRef()
  
  const buttonClicked = (e)=>{
    
    e.target.textContent = point
    e.target.style.color = e.target.textContent === 'X' ? 'aqua' : 'orange'
    e.target.style.textShadow = e.target.textContent === 'X' ? '0px 0px 5px aqua' : '0px 0px 5px orange'
    e.target.disabled = true
    e.target.style.animationName = 'animate'
    resetButton.current.style.animationName = ''
    point === 'X' ? setPoint('O') : setPoint('X')
    checkWining()
  }

  const ButtonValues = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()]

  
  

  function checkWining(){
    const winChance = [
      [0,1,2], [0,4,8], [0,3,6], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]
    ]

    const totalButtons = [ButtonValues[0].current.textContent, ButtonValues[1].current.textContent, ButtonValues[2].current.textContent,
     ButtonValues[3].current.textContent, ButtonValues[4].current.textContent, ButtonValues[5].current.textContent,
      ButtonValues[6].current.textContent, ButtonValues[7].current.textContent, ButtonValues[8].current.textContent]
  
    // console.log(totalButtons);

    for(let choice of winChance){
      const [a,b,c] = choice

      const buttons = [ButtonValues[a].current, ButtonValues[b].current, ButtonValues[c].current]

      if(buttons[0].textContent === buttons[1].textContent && buttons[1].textContent === buttons[2].textContent && buttons[2].textContent !== ''){
        if(point === 'X'){
          for(let i of buttons){
            i.style.backgroundColor = 'aqua';
            i.style.color = 'rgb(55, 74, 90)'
          } 
        }
        else{
          for(let i of buttons){
            i.style.backgroundColor = 'orange';
            i.style.color = 'rgb(55, 74, 90)'
          } 
        }
        

        setWinScore(`${point}-Wins`)
        disabledALL()
        return
      }
      else{
        if(totalButtons[0] !== '' && totalButtons[1] !== '' && totalButtons[2] !== '' && totalButtons[3] !== '' && totalButtons[4] !== '' && totalButtons[5] !== '' && totalButtons[6] !== '' && totalButtons[7] !== '' && totalButtons[8] !== '' ){
          setWinScore('Match tie')
          disabledALL()
        }
      }
    }
    


    function disabledALL(){
      for(let i=0; i<9; i++){
        ButtonValues[i].current.disabled = true
      }
    }
  }



  const handleReset = (e)=>{
    setPoint('X')
    setWinScore('')
    e.target.style.animationName = 'animate'
    for(let i=0; i<9; i++){
      ButtonValues[i].current.textContent = ''
      ButtonValues[i].current.disabled = false
      ButtonValues[i].current.style.animationName = ''
      ButtonValues[i].current.style.backgroundColor = ''
      ButtonValues[i].current.style.color = ''
    }
  }

  const closeResult = ()=>{
    setWinScore('')
  }

  return (
    <div className="App">
      <h1><span style={{textShadow:'0px 0px 5px aqua', color:'aqua'}}>TIC T</span><span style={{textShadow:'0px 0px 5px white', fontSize:'3rem'}}>A</span><span style={{textShadow:'0px 0px 5px orange', color:'orange'}}>C TOE</span></h1>
      <HomeSection handleButton = {buttonClicked}  ButtonValues = {ButtonValues} resetAll = {handleReset} resetButton={resetButton}/>
      <p className='Para'>Built using React. Check out more projects on <a href='https://github.com/JayakarAddepalli' rel="noreferrer" target='_blank' style={{backgroundColor:'transparent', color:'blue', textDecoration:'none'}}>Github</a>.</p>
      {winScore !== '' ? <FlowingComp winScoreData = {winScore} closeResult = {closeResult}  winScore = {winScore}/> : null}
    </div>
  );
}

export default App;
