import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Waiter from "./Waiter";

describe("Waiter", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });
  afterEach(()=>{
    vi.useRealTimers()
  })
  it("should render correct waiter component", async() => {
    render(<Waiter />);
    act(()=>{
        vi.advanceTimersByTime(2000)
    })
    const waiter = await screen.findByTestId("waiter");
    expect(waiter).toBeInTheDocument();
    expect(waiter).toHaveTextContent("passed");
  });
});
