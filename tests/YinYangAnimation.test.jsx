import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import YinYangAnimation from "../src/components/YinYangAnimation";

describe("YinYangAnimation", () => {
  it("Should render a Yin Yang animation"), () => {
    render(<YinYangAnimation />);
    expect(screen.getByTestId("yin-yang-animation")).toBeInTheDocument();
  };
});