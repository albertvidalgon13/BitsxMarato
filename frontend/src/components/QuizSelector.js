import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/quiz.css';

const QuizSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    // Redirect based on the selected option
    switch (selectedOption) {
      case 'option1':
        navigate('/quiz/ITS');
        break;
      case 'option2':
        navigate('/quiz/Pornografia');
        break;
      case 'option3':
        navigate('/quiz/Anticoncepció');
        break;
      default:
        // Handle default case or show an error message
        break;
    }
  };

  return (
    <div className="container">
      <h1>Escull una opció</h1>
      <div className="button-container">
        <button
          className={`button option1 ${selectedOption === 'option1' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('option1')}
        >
          <span>ITS</span>
        </button>
        <button
          className={`button option2 ${selectedOption === 'option2' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('option2')}
        >
          <span>Pornografia</span>
        </button>
        <button
          className={`button option3 ${selectedOption === 'option3' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('option3')}
        >
          <span>Anticoncepció</span>
        </button>
      </div>
      <button
        className={`button continue ${!selectedOption ? 'disabled' : ''}`}
        onClick={handleContinue}
        disabled={!selectedOption}
      >
        <span>Continue</span>
      </button>
    </div>
  );
};

export default QuizSelector;
