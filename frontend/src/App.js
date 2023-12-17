import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuizSelector from './components/QuizSelector';
import ChatPage from './components/ChatPage';
import MainContent from './components/MainContent';
import FAQ from './components/Faqs';
import Quiz from './components/Quiz';
import './styles/fadeout.css'

function App() {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    if (showTransition) {
      setTimeout(() => {
        setShowTransition(false);
      }, 4000);
    }
  }, [showTransition]);

  return (
    <BrowserRouter>
    {showTransition && <div className="png-transition-entry" />}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainContent />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="quiz" element={<QuizSelector />} />
          <Route path="quiz/:topic" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
