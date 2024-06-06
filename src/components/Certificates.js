import React, { useState } from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    image: '/react.jpg',
    title: 'React.js Mastery',
    date: '2023-05-12',
    description: 'Awarded for mastering the React.js framework.',
  },
  {
    id: 2,
    image: '/node.png',
    title: 'Node.js Expert',
    date: '2023-04-10',
    description: 'Awarded for exceptional knowledge in Node.js.',
  },
  // Add more certificate objects here
];

const eligibilityCriteria = [
  'Complete all quizzes with a score of 80% or above.',
  'Participate in at least 5 discussion forums.',
  'Complete all course assignments.',
  'Attend at least 3 live sessions.',
];

function Certificates() {
  const [eligible, setEligible] = useState(false);

  const checkEligibility = () => {
    // Simulate an eligibility check
    setEligible(true);
  };

  return (
    <div className="certificates-page">
      <div className="eligibility-section">
        <h2>Certificate Eligibility Criteria</h2>
        <ul>
          {eligibilityCriteria.map((criteria, index) => (
            <li key={index}>{criteria}</li>
          ))}
        </ul>
        <button className="eligibility-btn" onClick={checkEligibility}>
          Check Eligibility
        </button>
        {eligible && <p className="eligibility-message">You are eligible for certificates!</p>}
      </div>

      <div className="certificates-grid">
        {certificates.map(certificate => (
          <div key={certificate.id} className="certificate-card">
            <img src={certificate.image} alt={certificate.title} className="certificate-image" />
            <h3 className="certificate-title">{certificate.title}</h3>
            <p className="certificate-date">{certificate.date}</p>
            <p className="certificate-description">{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
