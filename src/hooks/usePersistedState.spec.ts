import { describe, it, expect } from "vitest";

import { renderHook, act } from "@/tests/utils";
import usePersistedState from "./usePersistedState";

describe("usePersistedState", () => {
  it("should initiate item in localStorage", () => {
    const { result } = renderHook(() =>
      usePersistedState("key", "my initial value")
    );
    const [value] = result.current;

    expect(value).toEqual("my initial value");
  });

  it("using setValue method updates the value", () => {
    const { result } = renderHook(() =>
      usePersistedState("key", "my initial value")
    );

    act(() => result.current[1]("my other value"));

    expect(result.current[0]).toEqual("my other value");
  });

  it("using setValue method updates the value in localStorage", () => {
    const { result } = renderHook(() =>
      usePersistedState("key", "my initial value")
    );

    act(() => result.current[1]("another one"));

    expect(localStorage.getItem("key")).toEqual(JSON.stringify("another one"));
  });
});
