import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("Error Message", () => {
  it("render an default error status", () => {
    render(<ErrorMessage />);
    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Something went wrong"
    );
  });
  it("render an custom error status", () => {
    render(<ErrorMessage message="Email alredy taken, please re-verify" />);
    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Email alredy taken, please re-verify"
    );
  });
});
