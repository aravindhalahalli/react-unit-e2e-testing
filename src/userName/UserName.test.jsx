import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import UserName from "./userName";
import userEvent from "@testing-library/user-event";

describe("UserName Compononent", () => {
  it("renders an default input text content", () => {
    render(<UserName />);
    expect(screen.getByTestId('username')).toHaveTextContent("foo")
  });
  it("renders an changed username with button", async() => {
    render(<UserName />);
    const user  = userEvent.setup();
    await user.click(screen.getByTestId('button'))
    expect(screen.getByTestId('username')).toHaveTextContent("bar")
  });
  it("renders an changed username with input", async() => {
    render(<UserName />);
    const user  = userEvent.setup();
    await user.type(screen.getByTestId('usernameInput'),"Aravind")
    expect(screen.getByTestId('username')).toHaveTextContent("Aravind")
  });
});
