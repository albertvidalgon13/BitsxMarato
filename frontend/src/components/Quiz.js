import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const questionsByTopic = {
  its: [
    {
      id: 1,
      question: 'Quina de les següents ETS és coneguda com "la bacteria que pot causar picor en orinar i secreció anormal"?',
      options: ['Sífilis', 'Gonorrèa', 'VIH/SIDA', 'Hepatitis B'],
      correctAnswer: 'Gonorrèa'
    },
    {
      id: 2,
      question: 'Quina ETS pot causar ferides o úlceres als genitals i a la boca?',
      options: ['Clamídia', 'Herpes genital', 'Tricomoniasis', 'Hepatitis C'],
      correctAnswer: 'Herpes genital'
    },
    {
      id: 3,
      question: 'Quina de les següents ETS es pot transmetre a través del contacte amb fluids corporals com la sang, el semen o les secrecions vaginals?',
      options: ['Sífilis', 'VIH/SIDA', 'Candidiasi', 'Tricomoniasis'],
      correctAnswer: 'VIH/SIDA'
    },
    {
      id: 4,
      question: 'Quina de les següents ETS es pot prevenir mitjançant l\'ús regular de preservatius o condons durant les relacions sexuals?',
      options: ['Hepatitis B', 'Candidiasi', 'Tricomoniasis', 'Clamídia'],
      correctAnswer: 'Clamídia'
    }
  ],
  pornografia: [
    {
      id: 1,
      question: 'Per què el cinema per adults no és una representació precisa de la realitat?',
      options: ['Perquè reflexa de manera precisa les relacions íntimes.', 'Perquè utilitza actors professionals amb experiència en la vida real.', 'Perquè sol tenir un guió i escenes dissenyades per a l\'entreteniment.', 'Perquè es basa en històries reals de la societat.'],
      correctAnswer: 'Perquè sol tenir un guió i escenes dissenyades per a l\'entreteniment.'
    },
    {
      id: 2,
      question: 'Quin és un dels principals problemes al considerar el cinema per adults com una guia per a la vida íntima?',
      options: ['És una representació exacta de les relacions amoroses.', 'Els actors són models a seguir en la vida real.', 'Les escenes sovint s\'exageren i són fictícies.', 'Proporciona solucions pràctiques per a problemes íntims.'],
      correctAnswer: 'Les escenes sovint s\'exageren i són fictícies.'
    },
    {
      id: 3,
      question: 'Per què és important tenir una comprensió crítica del cinema per adults?',
      options: ['Perquè és l\'única font d\'educació sobre relacions íntimes.', 'Per poder distingir entre ficció i realitat.', 'Perquè els actors són experts en assumptes íntims.', 'Perquè totes les pel·lícules per adults són educatives.'],
      correctAnswer: 'Per poder distingir entre ficció i realitat.'
    },
    {
      id: 4,
      question: 'Quin paper juguen els estereotips en el cinema per adults?',
      options: ['Reflecteixen la diversitat i la realitat de les relacions.', 'Contribueixen a una representació precisa de la societat.', 'Poden perpetuar idees errònies i poc realistes.', 'Ajuden a educar adequadament sobre relacions íntimes.'],
      correctAnswer: 'Poden perpetuar idees errònies i poc realistes.'
    }
  ],
  anticoncepcio: [
    {
      id: 1,
      question: 'Quin dels següents mètodes anticonceptius és una barrera física?',
      options: ['Píndoles anticonceptives', 'DIU (Dispositiu Intrauterí)', 'Preservatiu', 'Implant anticonceptiu'],
      correctAnswer: 'Preservatiu'
    },
    {
      id: 2,
      question: 'Quin dels següents mètodes anticonceptius s\'administra mitjançant una injecció cada tres mesos?',
      options: ['Parche anticonceptiu', 'DIU hormonal', 'Injecció anticonceptiva', 'Anell vaginal'],
      correctAnswer: 'Injecció anticonceptiva'
    },
    {
      id: 3,
      question: 'Quin és un dels mètodes anticonceptius més eficaços quan s\'utilitza correctament i es col·loca dins dels cinc dies posteriors a tenir relacions sexuals sense protecció?',
      options: ['Píndola del dia després', 'DIU de coure', 'Preservatiu', 'Implant anticonceptiu'],
      correctAnswer: 'Píndola del dia després'
    },
    {
      id: 4,
      question: 'Quin dels següents mètodes anticonceptius es col·loca a l\'úter i pot durar fins a 3 a 10 anys, depenent del tipus?',
      options: ['Preservatiu femení', 'Implant anticonceptiu', 'DIU (Dispositiu Intrauterí)', 'Píndoles anticonceptives'],
      correctAnswer: 'DIU (Dispositiu Intrauterí)'
    }
  ],
};


const Quiz = () => {
  const navigate = useNavigate();

  const { topic } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // Estado para mostrar la respuesta correcta
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questionsByTopic[topic][currentQuestionIndex];

  const history = useParams();


  const handleAnswerClick = (selectedAnswer) => {
    setSelectedOption(selectedAnswer);
    setShowCorrectAnswer(true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questionsByTopic[topic].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowCorrectAnswer(false); // Ocultar la respuesta correcta al pasar a la siguiente pregunta
      setSelectedOption(null); // Reiniciar la opción seleccionada
    } else {
      alert(`Quiz completat! La teva puntuació: ${score}/${questionsByTopic[topic].length}`);
      navigate("/quiz");
      // Aquí puedes redirigir a una página de resultados o realizar alguna acción adicional
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="title-text-2">{`Quiz: ${topic.toUpperCase()}`}</h2>
      {currentQuestion && (
        <div className="question-container">
          <p>{`Pregunta ${currentQuestion.id}: ${currentQuestion.question}`}</p>
          <div className="options-grid">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`button-option option-1 ${showCorrectAnswer && option === currentQuestion.correctAnswer ? 'correct' : ''} ${selectedOption === option ? 'selecte-test' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          {showCorrectAnswer && (
            <div className="answer-feedback">
              <p>Resposta correcta: {currentQuestion.correctAnswer}</p>
              <button className="button-quizz-pregunta" onClick={handleNextQuestion}>Següent Pregunta</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


export default Quiz;