import { describe, it, expect, vi } from "vitest";

import { getByRole, render, screen, userEvent } from "@/tests/utils";

import AddPasswordForm from "./AddPasswordForm";

const testPassword = {
  title: "My title",
  password: "beepbeep",
  client: "KNHB",
  color: "#e39c22",
};
const clients = [
  {
    name: "Payroll Select",
    color: "#0000FF",
  },
  {
    name: "Benu Direct",
    color: "#259617",
  },
  {
    name: "Schotpoort Connect",
    color: "#e3c922",
  },
  {
    name: "KNHB",
    color: "#e39c22",
  },
];

describe("AddPasswordForm", () => {
  it("renders necessary inputs", () => {
    const { getAllByRole, getByRole } = render(
      // @ts-expect-error no onSubmit method given
      <AddPasswordForm clients={clients} isLoadingClients={false} />
    );

    getAllByRole("textbox");
    getByRole("combobox");
    getByRole("button");
  });

  it("handles submit accordingly", async () => {
    const handleSubmit = vi.fn();

    const { getByRole } = render(
      <AddPasswordForm
        clients={clients}
        isLoadingClients={false}
        onSubmit={handleSubmit}
      />
    );

    const submitButton = getByRole("button");
    const titleInput = getByRole("textbox", { name: "Title:" });
    const passwordInput = getByRole("textbox", { name: "Password:" });
    const clientSelect = getByRole("combobox");

    await userEvent.type(titleInput, testPassword.title);
    await userEvent.type(passwordInput, testPassword.password);
    await userEvent.selectOptions(clientSelect, "KNHB");
    await userEvent.click(submitButton);

    expect(handleSubmit).toBeCalledTimes(1);
    expect(handleSubmit).toBeCalledWith(testPassword);
  });
});
