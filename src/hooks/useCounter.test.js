import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useCounter from "./useCounter";

describe("custom counter increment hook", () => {
  it("should render initial count as 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toEqual(0);
  });
  it("should render custom count", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toEqual(10);
  });

  it("should increment an count", () => {
    const { result } = renderHook(() => useCounter(1000));
    act(() => {
      result.current.incrementCounter();
    });
    expect(result.current.count).toEqual(1001);
  });
});
