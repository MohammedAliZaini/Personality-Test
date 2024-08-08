import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BeginButton from "../src/components/BeginButton";

describe("BeginButton", () => {
  it("should render a button with text 'Begin'", () => {
    render(<BeginButton />);
    expect(screen.getByText(/Begin/i)).toBeInTheDocument();
  });
  
  it("should call the onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<BeginButton onClick={handleClick} />);
    
    const buttonElement = screen.getByText(/Begin/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});