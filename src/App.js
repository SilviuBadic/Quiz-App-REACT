import './App.css';
import React, {useState} from 'react';

function App() {
  const questions = [
    {
      questText: "What is the capital of Romania?",
      answerOpt: [
        { answerText : "Bucharest", isCorrect : true},
        { answerText : "Constanta", isCorrect : false},
        { answerText : "Timisoara", isCorrect : false},
        { answerText : "Iasi", isCorrect : false}
      ]
    },
    {
      questText: "Where is Porto Situated?",
      answerOpt: [
        { answerText : "Spain", isCorrect : false},
        { answerText : "Italy", isCorrect : false},
        { answerText : "Portugal", isCorrect : true},
        { answerText : "France", isCorrect : false}
      ]
    },
    {
      questText: "What is the capital of Spain?",
      answerOpt: [
        { answerText : "Rome", isCorrect : false},
        { answerText : "Budapest", isCorrect : false},
        { answerText : "Prague", isCorrect : false},
        { answerText : "Madrid", isCorrect : true}
      ]
    },
    {
      questText: "When did the WWI begin?",
      answerOpt: [
        { answerText : 1912, isCorrect : false},
        { answerText : 1914, isCorrect : true},
        { answerText : 1916, isCorrect : false},
        { answerText : 1918, isCorrect : false}
      ]
    }

  ]

  const[start, setStartBtn] = useState(false);
  const[question, setQuestion] = useState(false);
  const[number, setNumber] = useState(1);
  const[questionNr, setQuestionNr] = useState(0);
  const[finalScore, setFinalScore] = useState(false);
  const[showScore, setshowScore] = useState(3)


  const quizStarted = (event) => {
    console.log("hello");
    setStartBtn(true);
  }

  const questionsStarted = (event) => {
    console.log("Hola");
    setQuestion(true)
}

  const changeNumber = () => {
    setNumber(number+1)
  }

  const calculateScore = () => {
    if (questions[questionNr].isCorrect === true){
      const newScore = showScore + 1;
      setshowScore(newScore)
    }
  }

  const resetFunction = () => {
    setStartBtn(!start);
    setFinalScore(finalScore)
  }

  const changequestions = (isCorrect) => {
    if (isCorrect === true){
      alert('correct')
    }
    else {
      alert('incorrect')
    }

    const increment = questionNr + 1
    if (increment < questions.length){
      setQuestionNr(increment)
    }
    else{
      setFinalScore(!finalScore)
    }
    }

  return (

    <div className='main_box'>
      {!start ? <h1 className='title'>This is a test.</h1> : null}
      {!start ? <button onClick = { () => {
        quizStarted();
        questionsStarted() 
      }}
        className='start_test'>Start the test!</button> : null}
      {finalScore ? 
      <>
      <h2 className='finalScore'>Score {showScore} out of 4</h2>
      <button onClick = {resetFunction} className='resetBtn'>Reset</button>
      </>
     
      :

      question ? <div className='question_div'>

        <div className='question_paper'>
          <div className='quest_nr'>
            <h2 id="my_question">Question {number}/4</h2>
            <h3 id="the_question">{questions[questionNr].questText}</h3>
          </div>
          <div className='questions'>
            <div className='buttons_box'>
            {questions[questionNr].answerOpt.map((answerOpt) => (
              <button id="newBtn" onClick={()=> {
                changeNumber();
                changequestions(answerOpt.isCorrect);
                calculateScore()
              }}>{answerOpt.answerText}</button> 
            ))}
            </div>
          </div>
        </div>
      </div> : null}


    </div>
    
  )
}


export default App;
