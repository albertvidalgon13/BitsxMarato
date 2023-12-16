import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const questionsByTopic = {
  ITS: [
    {
        id: 1,
        question: '¿Cuál de las siguientes ETS es conocida como "la bacteria que puede causar ardor al orinar y secreción anormal"?',
        options: ['Sífilis', 'Gonorrea', 'VIH/SIDA', 'Hepatitis B'],
        correctAnswer: 'Gonorrea'
      },
      {
        id: 2,
        question: '¿Qué ETS puede causar llagas o úlceras en los genitales y en la boca?',
        options: ['Clamidia', 'Herpes genital', 'Tricomoniasis', 'Hepatitis C'],
        correctAnswer: 'Herpes genital'
      },
      {
        id: 3,
        question: '¿Cuál de las siguientes ETS puede transmitirse a través del contacto con fluidos corporales como la sangre, el semen o las secreciones vaginales?',
        options: ['Sífilis', 'VIH/SIDA', 'Candidiasis', 'Tricomoniasis'],
        correctAnswer: 'VIH/SIDA'
      },
      {
        id: 4,
        question: '¿Cuál de las siguientes ETS puede ser prevenida mediante el uso regular de preservativos o condones durante las relaciones sexuales?',
        options: ['Hepatitis B', 'Candidiasis', 'Tricomoniasis', 'Clamidia'],
        correctAnswer: 'Clamidia'
      }
    // Add more HTML questions as needed
  ],
  Pornografia: [
    { id: 1, question: 'What does CSS stand for?', options: ['Counter Strike: Source', 'Corrective Style Sheet', 'Cascading Style Sheet'], correctAnswer: 'Cascading Style Sheet' },
    // Add more CSS questions as needed
  ],
  Anticoncepció: [
    {
        id: 1,
        question: '¿Cuál de los siguientes métodos anticonceptivos es una barrera física?',
        options: ['Píldoras anticonceptivas', 'DIU (Dispositivo Intrauterino)', 'Preservativo', 'Implante anticonceptivo'],
        correctAnswer: 'Preservativo'
      },
      {
        id: 2,
        question: '¿Cuál de los siguientes métodos anticonceptivos se administra mediante una inyección cada tres meses?',
        options: ['Parche anticonceptivo', 'DIU hormonal', 'Inyección anticonceptiva', 'Anillo vaginal'],
        correctAnswer: 'Inyección anticonceptiva'
      },
      {
        id: 3,
        question: '¿Cuál es uno de los métodos anticonceptivos más eficaces cuando se utiliza correctamente y se coloca dentro de los cinco días posteriores a tener relaciones sexuales sin protección?',
        options: ['Píldora del día después', 'DIU de cobre', 'Preservativo', 'Implante anticonceptivo'],
        correctAnswer: 'Píldora del día después'
      },
      {
        id: 4,
        question: '¿Cuál de los siguientes métodos anticonceptivos se coloca en el útero y puede durar hasta 3 a 10 años, dependiendo del tipo?',
        options: ['Preservativo femenino', 'Implante anticonceptivo', 'DIU (Dispositivo Intrauterino)', 'Píldoras anticonceptivas'],
        correctAnswer: 'DIU (Dispositivo Intrauterino)'
      }
    // Add more CSS questions as needed
  ],
  // Add more topics as needed
};

const Quiz = () => {
    const { topic } = useParams();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
  
    const currentQuestion = questionsByTopic[topic][currentQuestionIndex];
  
    const handleAnswerClick = (selectedAnswer) => {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
  
      if (currentQuestionIndex + 1 < questionsByTopic[topic].length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert(`Quiz completed! Your score: ${score}/${questionsByTopic[topic].length}`);
      }
    };
  
    return (
      <div className="quiz-container">
        <h2>{`Quiz: ${topic.toUpperCase()}`}</h2>
        {currentQuestion && (
          <div className="question-container">
            <p>{`Question ${currentQuestion.id}: ${currentQuestion.question}`}</p>
            <ul className="options-list">
              {currentQuestion.options.map((option, index) => (
                <li key={index} onClick={() => handleAnswerClick(option)} className="option">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

export default Quiz;