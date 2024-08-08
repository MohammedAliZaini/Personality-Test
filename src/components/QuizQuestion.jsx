import React from 'react';
import YesButton from './YesButton';
import NoButton from './NoButton';
import "../components/styles/QuizQuestion.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const QuizQuestion = ({ questionData, onAnswer }) => {
  const { question, yesType, noType } = questionData;

  const handleYes = () => {
    console.log('Yes button clicked');
    onAnswer(yesType);
  };

  const handleNo = () => {
    console.log('No button clicked');
    onAnswer(noType);
  };

  return (
    <TransitionGroup>
      <CSSTransition>
        <div className="quiz-question">
          <h2>{question}</h2>
          <div className="options">
            <YesButton onClick={handleYes} />
            <NoButton onClick={handleNo} />
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default QuizQuestion;