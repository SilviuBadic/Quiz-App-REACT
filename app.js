import './App.css';
import React, {useState} from 'react';

function App() {

  const[start, setStartBtn] = useState(false);
  const[question, setQuestion] = useState(false)
  const [number, setNumber] = useState(1)
  const [answer, setAnswers] = useState(
    {
    city1: "Cluj",
    city2: "Bucharest",
    city3: "Timisoara",
    city4: "Constanta",
    city5: "Porto",
    city6: "Braga",
    city7: "Guimaraes",
    city8: "Lisbon",
    city9: "Madrid",
    city10: "Barcelona",
    city11: "Sevilla",
    city12: "Valencia",
    city13: "Cluj",
    city14: "Bucharest",
    city15: "Timisoara",
    city16: "Constanta",
    city17: "Singapore",
    city18: "China",
    city19: "USA",
    city20: "Africa"
    }
    
  )
  const [newquestions, setNewQuestions] = useState(
    {
      question1 : "What is the capital of Romania?",
      question2 : "What is the capital of Portugal?",
      question3 : "What is the capital of Spain?",
      question4 : "Where is New York located?",
      question5 : "What country is well-known for its traditional Flamenco art?"

    }
  )


  const quizStarted = (event) => {
    console.log("hello");
    setStartBtn(true);
  }

  const questionsStarted = (event) => {
    console.log("Hola");
    setQuestion(true);
    
}

  const changeNumber = (event) =>{
    setNumber(number + 1)
  }

  const checkNumber = () => {
    
    if (number === 1){
      document.getElementById("the_question").innerHTML = newquestions.question2;
      document.getElementById("btn1").innerHTML = "Lisbon";
      document.getElementById("btn2").innerHTML = "Porto"
      document.getElementById("btn3").innerHTML = "Braga"
      document.getElementById("btn4").innerHTML = "Guimaraes"
    }
    else if (number === 2)
    {
      document.getElementById("the_question").innerHTML = newquestions.question3;
      document.getElementById("btn1").innerHTML = "Barcelona";
      document.getElementById("btn2").innerHTML = "Sevilla"
      document.getElementById("btn3").innerHTML = "Madrid"
      document.getElementById("btn4").innerHTML = "Zaragoza"
    }
    else if (number === 3)
    {
      document.getElementById("the_question").innerHTML = newquestions.question4;
      document.getElementById("btn1").innerHTML = "Asia";
      document.getElementById("btn2").innerHTML = "Europe"
      document.getElementById("btn3").innerHTML = "Africa"
      document.getElementById("btn4").innerHTML = "North America"
    }
    else if (number === 4)
    {
      document.getElementById("the_question").innerHTML = newquestions.question5;
      document.getElementById("btn1").innerHTML = "Portugal";
      document.getElementById("btn2").innerHTML = "Spain"
      document.getElementById("btn3").innerHTML = "Netherlands"
      document.getElementById("btn4").innerHTML = "Italy"
    }
    else if (number > 4){
      setStartBtn(false);
      setQuestion(false);
    }
  }

  const checkAnswer = () => {
    if (number === 1)
  }

  return (
    <div className='main_box'>
      {!start ? <h1 className='title'>This is a test.</h1> : null}
      {!start ? <button onClick = { () => {
        quizStarted();
        questionsStarted() 
      }}
        className='start_test'>Start the test!</button> : null}

      {question ? <div className='question_div'>
        <div className='question_paper'>
          <div className='quest_nr'>
            <h2 id="my_question">Question {number}/5</h2>
            <h3 id="the_question">{newquestions.question1}</h3>
          </div>
          <div className='questions'>
            <div className='buttons_box'>
              <button id="btn1" onClick={() => {
                changeNumber();
                checkNumber();
                checkAnswer()}}>Arad</button>
              <button id="btn2" onClick={() => {
                changeNumber();
                checkNumber()
                }}>Bucharest</button>
              <button id="btn3" onClick={() => {
                changeNumber();
                checkNumber()
                }}>Timisoara</button>
              <button id="btn4" onClick={() => {
                changeNumber();
                checkNumber()
                }}>Constanta</button>
            </div>
            
          </div>
        </div>
      </div> : null} 




    </div>
   
  )
}



export default App;
