import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/quiz.css';
import '../styles/movement.css'

const QuizSelector = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showTransition, setShowTransition] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (showTransition) {
        setTimeout(() => {
          switch (selectedOption) {
            case 'option1':
              navigate('/quiz/its');
              break;
            case 'option2':
              navigate('/quiz/pornografia');
              break;
            case 'option3':
              navigate('/quiz/anticoncepcio');
              break;
            default:
              // Handle default case or show an error message
              break;
          }
        }, 1500); // Adjust the timeout based on your animation duration
      }
    }, [showTransition, selectedOption, navigate]);
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    const handleContinue = () => {
      setShowTransition(true);
    };

  return (
    <div className="container">
      <h1 className="title-text">Aprenem sobre...</h1>
      <div className="button-container">
        <button
          className={`button option1 ${selectedOption === 'option1' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('option1')}
        >
          <span className="button-text">ITS</span>
        </button>
        <button
          className={`button option2 ${selectedOption === 'option2' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('option2')}
        >
          <span className="button-text">Pornografia</span>
        </button>
        <button
          className={`button option3 ${selectedOption === 'option3' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('option3')}
        >
          <span className="button-text">Anticoncepció</span>
        </button>
      </div>
      {showTransition && (
        <div className="png-transition" />
      )}
      <button
        className={`button continue ${!selectedOption ? 'disabled' : ''}`}
        onClick={handleContinue}
        disabled={!selectedOption}
      >
        <span className="button-continue">Juguem!</span>
      </button>
    </div>
  );
};

export default QuizSelector;
