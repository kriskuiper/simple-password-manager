import { describe, test, it } from "vitest";

import { render, screen } from "@/tests/utils";

import App from "./App";

describe("Application", () => {
  test("given no arguments", () => {
    beforeEach(() => {
      render(<App />, {});
    });

    it("shows title", () => {
      screen.getByText("React + TS");
    });
  });
});
