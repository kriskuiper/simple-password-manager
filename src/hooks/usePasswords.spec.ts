import { describe, it, expect } from "vitest";

import { renderHook, act } from "@/tests/utils";

import usePasswords from "./usePasswords";

const initialPasswords = [
  {
    title: "Move move password",
    password: "secret123",
    client: "Benu Direct",
  },
  {
    title: "Magic box",
    password: "verymagic",
    client: "Payroll Select",
  },
];
const examplePassword = {
  title: "My password",
  password: "secret123",
  client: "Schotpoort Connect",
};
const passwordToRemove = {
  title: "Move move password",
  password: "secret123",
  client: "KNHB",
};

describe("usePasswords", () => {
  beforeEach(() => {
    localStorage.setItem("passwords", JSON.stringify(initialPasswords));
  });

  it("returns initial passwords on first render", () => {
    const { result } = renderHook(() => usePasswords());

    expect(result.current.passwords).toEqual(initialPasswords);
  });

  it("addPassword(), adds new password", () => {
    const { result } = renderHook(() => usePasswords());

    const addPassword = result.current.addPassword;

    expect(result.current.passwords).not.toContain(examplePassword);

    act(() => addPassword(examplePassword));

    expect(result.current.passwords).toHaveLength(initialPasswords.length + 1);
    expect(result.current.passwords).toContain(examplePassword);
  });

  it("removePassword(), removes password", () => {
    const { result } = renderHook(() => usePasswords());

    const removePassword = result.current.removePassword;

    expect(result.current.passwords).toHaveLength(2);

    act(() => removePassword(passwordToRemove));

    expect(result.current.passwords).toHaveLength(1);
    expect(result.current.passwords).not.toContain(passwordToRemove);
  });
});
