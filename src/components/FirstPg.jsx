
import { QuizCss } from '../Other/QuizCss';
import React from 'react';
import { useState } from 'react';
import QuizResult from './QuizResult';

function FirstPg() {
const [currentQuestion,setCurrentQuestion] = useState(0);
const [score,setScore] = useState(0);
const [clickOption,setClickOption] = useState(0)
const [showResult,setShowResult] = useState(false)
 const changeQuestion = () =>{
    updateScore();
  if(currentQuestion< QuizCss.length-1){
    setCurrentQuestion(currentQuestion+1)
    setClickOption(0)
  }else{
    setShowResult(score+1)
  }
  }
  const updateScore = ()=>{
    if(clickOption === QuizCss[currentQuestion].answer){
        setScore(score+1);
    }
  }

const resetAll = ()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setClickOption(0);
    setScore(0)
}

  return (
    <div>
        <p className='heading-txt'>QUIZ APP</p>
        <div className='container'>
            {showResult ? (
                <QuizResult score={score} totalScore = {QuizCss.length}  tryAgain={resetAll}/>
            ):(
                <>
            <div className="question">
<span id='question-number'>{currentQuestion+1}.</span>
<span id='question-txt'>{QuizCss[currentQuestion].question}</span>
            </div>
            <div className="option-container">
{QuizCss[currentQuestion].options.map((options,i)=>{
    return(
        <button 
        // className="option-btn"
        className={`option-btn ${
            clickOption == i+1? "checked": null
        }`}
         key={i} onClick={()=> setClickOption(i+1)}>
{options}
        </button>
    )
})}

            </div>
            <input type="button" value={"Next"} id='next-button' onClick={changeQuestion} />
            </>)}
            </div>
    </div>
  )
}

export default FirstPg