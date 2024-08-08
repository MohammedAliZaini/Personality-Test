import React from "react";
import {it, describe, expect, vi} from "vitest";
import {screen, render, waitFor} from "@testing-library/react";
import Introduction from "../src/components/Introduction";

describe("Introduction", () => {
  it("Renders an introduction text", () => {
    render(<Introduction/>);
    expect(screen.getByTestId("introduction")).toBeInTheDocument();
  })

  it("Should have the correct CSS class", () => {
    render(<Introduction/>)
    expect(screen.getByTestId("introduction")).toHaveClass("introduction-container");
  });
});

