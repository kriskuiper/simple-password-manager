import usePersistedState from "./usePersistedState";

export type Password = {
  title: string;
  password: string;
  client: string;
  color?: string;
};

function usePasswords() {
  const [passwords, setPasswords] = usePersistedState<Password[]>(
    "passwords",
    []
  );

  const addPassword = (password: Password) => {
    setPasswords([...passwords, password]);
  };

  const removePassword = (password: Password) => {
    const updatedPasswords = passwords.filter(
      (word: Password) => word.title !== password.title
    );

    setPasswords(updatedPasswords);
  };

  return {
    passwords,
    addPassword,
    removePassword,
  };
}

export default usePasswords;
