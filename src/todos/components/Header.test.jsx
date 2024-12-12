import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";
import { TodosContext } from "../contexts/todos";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  const mockDispatch = vi.fn();
  const mockAddTodo = vi.fn();
  it("render an default state", () => {
    render(
      <TodosContext.Provider
        value={[{}, mockDispatch, { addTodo: mockAddTodo }]}
      >
        <Header />
      </TodosContext.Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("should add an new todo", async () => {
    const user = userEvent.setup();
    render(
      <TodosContext.Provider
        value={[{}, mockDispatch, { addTodo: mockAddTodo }]}
      >
        <Header />
      </TodosContext.Provider>
    );
    const inputTxt = screen.getByTestId("newTodoInput");
    await user.type(inputTxt, "foo{enter}");
    expect(mockAddTodo).toHaveBeenCalledWith({
      text: "foo",
      isCompleted: false,
    });
    expect(inputTxt.value).toEqual("")
  });
});
