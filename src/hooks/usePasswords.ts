import usePersistedState from "./usePersistedState";

type Password = {
  title: string;
  password: string;
  clientId: number;
};

function usePasswords() {
  const [passwords, setPasswords] = usePersistedState("passwords", []);

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
