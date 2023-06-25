import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import jestDomMatchers from "@testing-library/jest-dom/matchers";

expect.extend(jestDomMatchers);

afterEach(() => {
  cleanup();
});
