import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useFetch from "./useFetch";
import axios from "axios";

describe("custom useFetch Hook", () => {
  it("should render default hook", () => {
    const { result } = renderHook(() => useFetch("/todos"));
    const [{ response, isLoading, error }, doFetch] = result.current;
    expect(error).toBeNull();
    expect(isLoading).toEqual(false);
    expect(response).toBeNull();
    expect(doFetch).toBeDefined();
  });
  
  it("should render result after successfull fetch", async () => {
    const mockResponse = {
      data: [{ id: 1, text: "foo", isCompleted: false }],
    };
    vi.spyOn(axios, "request").mockResolvedValue(mockResponse);
    const { result } = renderHook(() => useFetch("/todos"));

    await act(async () => {
      result.current[1]();
    });

    const [{ response, isLoading, error }, doFetch] = result.current;
    expect(error).toBeNull();
    expect(isLoading).toEqual(false);
    expect(response).toEqual(mockResponse.data);
    expect(doFetch).toBeDefined();
  });
});
