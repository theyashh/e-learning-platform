import React, { useState } from 'react';
import './Quizzes.css';

const quizzes = [
  {
    id: 1,
    image: '/react.jpg',
    title: 'React.js Quiz',
    description: 'Test your knowledge on React.js with this quiz.',
    questions: [
      { question: 'What is React?', options: ['Library', 'Framework', 'Language', 'Tool'], answer: 'Library' },
      { question: 'Who developed React?', options: ['Google', 'Facebook', 'Microsoft', 'Twitter'], answer: 'Facebook' },
      { question: 'What is React?', options: ['Library', 'Framework', 'Language', 'Tool'], answer: 'Library' },
      { question: 'Who developed React?', options: ['Google', 'Facebook', 'Microsoft', 'Twitter'], answer: 'Facebook' },
      
    ]
  },
  {
    id: 2,
    image: '/node.png',
    title: 'Node.js Quiz',
    description: 'Test your knowledge on Node.js with this quiz.',
    questions: [
      { question: 'What is Node.js?', options: ['Library', 'Runtime', 'Framework', 'Tool'], answer: 'Runtime' },
      { question: 'Node.js is based on which language?', options: ['Java', 'Python', 'Ruby', 'JavaScript'], answer: 'JavaScript' },
      { question: 'What is Node.js?', options: ['Library', 'Runtime', 'Framework', 'Tool'], answer: 'Runtime' },
      { question: 'Node.js is based on which language?', options: ['Java', 'Python', 'Ruby', 'JavaScript'], answer: 'JavaScript' },
    ]
  },
  {
    id: 3,
    image: '/css.png',
    title: 'CSS Quiz',
    description: 'Test your knowledge on CSS with this quiz.',
    questions: [
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], answer: 'Cascading Style Sheets' },
      { question: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], answer: 'font-size' },
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], answer: 'Cascading Style Sheets' },
      { question: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], answer: 'font-size' },
      // Add more questions here
    ]
  },
  {
    id: 4,
    image: '/js.png',
    title: 'JavaScript Quiz',
    description: 'Test your knowledge on JavaScript with this quiz.',
    questions: [
      { question: 'Inside which HTML element do we put the JavaScript?', options: ['<js>', '<javascript>', '<script>', '<scripting>'], answer: '<script>' },
      { question: 'What is the correct JavaScript syntax to change the content of the HTML element below?', options: ['document.getElementById("demo").innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";', 'document.getElementByTagName("p").innerHTML = "Hello World!";'], answer: 'document.getElementById("demo").innerHTML = "Hello World!";' },
      { question: 'Inside which HTML element do we put the JavaScript?', options: ['<js>', '<javascript>', '<script>', '<scripting>'], answer: '<script>' },
      { question: 'What is the correct JavaScript syntax to change the content of the HTML element below?', options: ['document.getElementById("demo").innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";', 'document.getElementByTagName("p").innerHTML = "Hello World!";'], answer: 'document.getElementById("demo").innerHTML = "Hello World!";' },
    ]
  }
];

function Quizzes() {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleStartQuiz = (quizId) => {
    setActiveQuiz(quizId);
  };

  const handleAnswerChange = (quizId, questionIndex, option) => {
    setAnswers({
      ...answers,
      [quizId]: {
        ...answers[quizId],
        [questionIndex]: option
      }
    });
  };

  const handleSubmitQuiz = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setActiveQuiz(null);
    setAnswers({});
  };

  return (
    <div className="quizzes-grid">
      {quizzes.map(quiz => (
        <div key={quiz.id} className="quiz-card">
          <img src={quiz.image} alt={quiz.title} className="quiz-image" />
          <h3 className="quiz-title">{quiz.title}</h3>
          <p className="quiz-description">{quiz.description}</p>
          <button className="quiz-btn" onClick={() => handleStartQuiz(quiz.id)}>Start Now</button>
          {activeQuiz === quiz.id && (
            <div className="quiz-questions">
              {quiz.questions.map((q, index) => (
                <div key={index} className="quiz-question">
                  <p>{q.question}</p>
                  {q.options.map((option, i) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        onChange={() => handleAnswerChange(quiz.id, index, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
              <button className="quiz-submit-btn" onClick={handleSubmitQuiz}>Submit</button>
            </div>
          )}
        </div>
      ))}
      {showPopup && (
        <div className="quiz-popup">
          <div className="quiz-popup-content">
            <h2>Quiz Submitted!</h2>
            <p>Thank you for submitting the quiz.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quizzes;
