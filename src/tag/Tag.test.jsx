import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import Tag from "./Tag";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

describe("Tag component", () => {
  const server = setupServer(
    http.get("http://localhost:3004/tags", () => {
      return HttpResponse.json([{ id: 1, name: "React" }]);
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
  it("renders the tags", async() => {
    render(<Tag />);
    // use an findAllByTestId when using an async and await
    // const tags = await screen.getAllByTestId("tag");  
    const tags = await screen.findAllByTestId("tag");
    screen.debug()
    expect(tags).toHaveLength(1);
  });
});
