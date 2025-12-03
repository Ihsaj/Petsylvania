import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={index} className="step-wrapper">
          <div className={`step-item ${index <= currentStep ? 'active' : ''}`}>
            <div className={`step-circle ${
              index < currentStep ? 'completed' : index === currentStep ? 'current' : ''
            }`}>
              {index < currentStep ? '✓' : index + 1}
            </div>
            <span className="step-text">{step}</span>
          </div>
          {index < steps.length - 1 && <div className="step-connector"></div>}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
