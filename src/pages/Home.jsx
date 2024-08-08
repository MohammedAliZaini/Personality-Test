import React, { useState } from 'react';
import BeginButton from '../components/BeginButton';
import QuizQuestion from '../components/QuizQuestion';
import questions from '../components/Questions';
import YinYangAnimation from '../components/YinYangAnimation';
import YangAnimation from '../components/YangAnimation';
import YinAnimation from '../components/YinAnimation';
import YinQuote from '../components/YinQuote';
import YangQuote from '../components/YangQuote';
import BalancedAnimation from '../components/BalancedAnimation';
import BalancedQuote from '../components/BalancedQuote';
import Introduction from '../components/Introduction';
import BackgroundAudio from '../components/BackgroundAudio';
import './Home.css';

const Home = () => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [yinCount, setYinCount] = useState(0);
  const [yangCount, setYangCount] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleBegin = () => {
    setIsQuizStarted(true);
    setQuizEnded(false);
    setCurrentQuestionIndex(0);
    setYinCount(0);
    setYangCount(0);
  };

  const handleAnswer = (answerType) => {
    if (answerType === 'yin') {
      setYinCount(prev => prev + 1);
    } else if (answerType === 'yang') {
      setYangCount(prev => prev + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnded(true);
      setIsQuizStarted(false);
    }
  };

  const handleSkip = () => {
    setIsAnimationStarted(true);
  };

  const totalAnswers = yinCount + yangCount;
  const yinPercentage = totalAnswers > 0 ? ((yinCount / totalAnswers) * 100).toFixed(2) : 0;
  const yangPercentage = totalAnswers > 0 ? ((yangCount / totalAnswers) * 100).toFixed(2) : 0;

  return (
    <div className="home">
      {!isQuizStarted && !quizEnded ? (
        !isAnimationStarted ? (
          <>
            <div className='wrapper'>
              <Introduction onFinish={() => setIsAnimationStarted(true)} />
              <BackgroundAudio play={!isAnimationStarted} />
            </div>
            <button className='skip-button' data-testid="skip-button" role='button' type='button' onClick={handleSkip}>
              <span className='left-text'>Skip</span>
              <span className='right-text'>Intro</span>
            </button>
          </>
        ) : (
          <div className="popout-card">
            <YinYangAnimation />
            <BeginButton onClick={handleBegin} />
          </div>
        )
      ) : (
        !quizEnded ? (
          <div className="popout-card">
            <div className='quiz-questions'>
              <QuizQuestion
                questionData={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
              />
            </div>
          </div>
        ) : (
          <div className="popout-card">
            {yinPercentage === yangPercentage ? (
              <>
                <BalancedAnimation />
                <BalancedQuote />
              </>
            ) : yinPercentage > yangPercentage ? (
              <>
                <YinAnimation />
                <YinQuote />
              </>
            ) : (
              <>
                <YangAnimation />
                <YangQuote />
              </>
            )}
            <p>You scored: {yinPercentage}% Yin, {yangPercentage}% Yang</p>
            <button className='retake-test' role='button' type='button' onClick={handleBegin}>
              <span className='retake-left-text'>Retake</span>
              <span className='retake-right-text'>Test</span>
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Home;