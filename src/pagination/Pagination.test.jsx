import { describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as utils from "../utils";

vi.mock("../utils.js", () => {
  return {
    range: () => [1, 2, 3, 4, 5],
  };
});

describe("Pagination", () => {
  it("renders correct pagination", () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
    const pageContainer = screen.getAllByTestId("page-container");
    expect(pageContainer).toHaveLength(5);
    expect(pageContainer[0]).toHaveTextContent(1);
  });
  it("should emit clicked page", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />
    );
    const pageContainer = screen.getAllByTestId("page-container");
    await user.click(pageContainer[0]);
    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it("spies on utils", () => {
    vi.spyOn(utils, "range");
    render(
        <Pagination
          total={50}
          limit={10}
          currentPage={1}
        />
      );
      expect(utils.range).toHaveBeenCalledWith(1,6)
  });
});
