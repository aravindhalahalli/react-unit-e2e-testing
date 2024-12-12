import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import Tag from "./Tag";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import axios from "axios";

describe("Tag component", () => {
  const server = setupServer(
    http.get("http://localhost:3000/tags", () => {
      return HttpResponse.json([
        { id: 1, name: "React" },
        { id: 2, name: "Typescript" },
      ]);
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
  it("renders the tags", async () => {
    render(<Tag />);
    // use an findAllByTestId when using an async and await
    // const tags = await screen.getAllByTestId("tag");
    const tags = await screen.findAllByTestId("tag");
    expect(tags).toHaveLength(2);
    expect(tags[0]).toHaveTextContent("React");
  });

  it("render with axios mock", async () => {
    const mockResponse = {
      data: [
        { id: 1, name: "Vue Js" },
        { id: 2, name: "Typescript" },
      ],
    };
    vi.spyOn(axios,'get').mockResolvedValue(mockResponse);
    render(<Tag />);
    // use an findAllByTestId when using an async and await
    // const tags = await screen.getAllByTestId("tag");
    const tags = await screen.findAllByTestId("tag");
    expect(tags).toHaveLength(2);
    expect(tags[0]).toHaveTextContent("Vue Js");
  });
});
