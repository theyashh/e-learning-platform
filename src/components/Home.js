import React, { useState } from 'react';
import './Home.css';
import Courses from './Courses';
import Quizzes from './Quizzes';
import DiscussionForum from './DiscussionForum';
import Certificates from './Certificates';
import Profile from './Profile';

function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'courses':
        return <Courses />;
      case 'quizzes':
        return <Quizzes />;
      case 'discussionForum':
        return <DiscussionForum />;
      case 'certificates':
        return <Certificates />;
      case 'profile':
        return <Profile />;
      default:
        return <Courses />;
    }
  };

  return (
    <div className="home-container">
      <header className="fixed-header">
        <div className="logo-container">
          <img src="/logo.jpg" alt="Logo" className="logo-image" />
          <h1 className="logo-text">Edu.Path</h1>
        </div>
        <nav className="nav">
          <ul>
            <li onClick={() => setCurrentPage('courses')}>Courses</li>
            <li onClick={() => setCurrentPage('quizzes')}>Quizzes</li>
            <li onClick={() => setCurrentPage('discussionForum')}>Discussion Forums</li>
            <li onClick={() => setCurrentPage('certificates')}>Certificates</li>
            <li onClick={() => setCurrentPage('profile')}>Profile</li>
          </ul>
        </nav>
      </header>
      <div className="content">
        {renderContent()}
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>
            <img src="liveclass.jpeg" alt="Daily Live Classes" />
            <div>
              <h3>Daily Live Classes</h3>
              <p>Join live interactive classes conducted by top educators. Engage in discussions, ask questions, and get instant feedback.</p>
            </div>
          </li>
          <li>
            <img src="practice.jpg" alt="Practice and Revise" />
            <div>
              <h3>Practice and Revise</h3>
              <p>Practice with a variety of quizzes and revision sessions. Keep track of your progress and improve continuously.</p>
            </div>
          </li>
          <li>
            <img src="learn.jpg" alt="Learn Anytime, Anywhere" />
            <div>
              <h3>Learn Anytime, Anywhere</h3>
              <p>Access course material, recorded classes, and resources at your convenience. Learn at your own pace, wherever you are.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="get-app">
        <h2>Get the App</h2>
        <p>Download the Unacademy app on iOS and Android to access all the features on the go!</p>
        <div className="app-buttons">
          <button className="ios">Download on the App Store</button>
          <button className="android">Get it on Google Play</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
