import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import DocumentsSection from './components/DocumentsSection';
import DocumentPage from './components/DocumentPage';
import QuizSelector from './components/QuizSelector';
import ChatPage from './components/ChatPage';
import MainContent from './components/MainContent'; // Importa el componente principal
import FAQ from './components/Faqs';
import Quiz from './components/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<MainContent />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='documents' element={<DocumentsSection />} />
          <Route path='documents/:name' element={<ChatPage />}/>
          <Route path='chat' element={<ChatPage />} />
          <Route path='quiz' element={<QuizSelector />} />
          <Route path='quiz/:topic' element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
