import { screen, render, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from "vitest";
import QuizQuestion from '../src/components/QuizQuestion';
import questions from '../src/components/Questions';

describe("QuizQuestion", () => {
  it("Renders the questions", () => {
    render(<QuizQuestion questionData={questions[0]} />);
    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
  });

  it("Calls onAnswer with yesType when the 'Yes' button is clicked"), () => {
    const handleAnswer = vi.fn();
    render(<QuizQuestion questionData={questions[0]} onAnswer={handleAnswer} />)
    fireEvent.click(screen.getByText('Yes'));
    expect(handleAnswer).toHaveBeenCalledWith(questions[0].yesType);
  };

  it("Calls onAnswer with yesType 4 times when the 'Yes' button is clicked 4 times"), () => {
    const handleAnswer = vi.fn();
    render(<QuizQuestion questionData={questions[4]} onAnswer={handleAnswer} />)
    fireEvent.click(screen.getByText('Yes'));
    expect(handleAnswer).toHaveBeenCalledWith(questions[4].yesType);
  };

  it("Calls onAnswer with noType when the 'No' button is clicked"), () => {
    const handleAnswer = vi.fn();
    render(<QuizQuestion questionData={questions[0]} onAnswer={handleAnswer} />)
    fireEvent.click(screen.getByText('No'));
    expect(handleAnswer).toHaveBeenCalledWith(questions[0].noType);

  };

  it("Calls onAnswer with noType 8 times when the 'No' button is clicked 8 times"), () => {
    const handleAnswer = vi.fn();
    render(<QuizQuestion questionData={questions[8]} onAnswer={handleAnswer} />)
    fireEvent.click(screen.getByText('No'));
    expect(handleAnswer).toHaveBeenCalledWith(questions[8].noType);
  };
});
