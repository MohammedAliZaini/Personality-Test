import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import YinQuote from "../src/components/YinQuote";
import YangQuote from "../src/components/YangQuote";

describe("YinQuote", () => {
  it("Provides a Yin Quote"), () => {
    render(<YinQuote/>)
    expect(screen.getByText("Water is fluid, soft, and yielding. But water will wear away rock, which is rigid and cannot yield. As a rule, whatever is fluid, soft, and yielding will overcome whatever is rigid and hard. This is another paradox: what is soft is strong.\" ― Lao Tzu")).toBeInTheDocument();
  };

  it("Shows the right quote based on the result", () => {
    render(<YangQuote/>);
    fireEvent.click(screen.getByText("It does not matter how slowly you go as long as you do not stop.\" - Confucius"))
  })
});