import { useEffect, useState } from "react";

function usePersistedState(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const valueStoredInLocalStorage = localStorage.getItem(key);
    return valueStoredInLocalStorage
      ? JSON.parse(valueStoredInLocalStorage)
      : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default usePersistedState;
