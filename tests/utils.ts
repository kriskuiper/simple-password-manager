import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, options);

export * from "@testing-library/react";
export { userEvent, customRender as render };
