import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import usePasswords from "../hooks/usePasswords";

const TITLE_INPUT_NAME = "name";
const PASSWORD_INPUT_NAME = "password";
const CLIENT_INPUT_NAME = "client";

function AddPage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { addPassword: addPasswordToStorage } = usePasswords();

  useEffect(() => {
    if (!showSuccessMessage) {
      return;
    }

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }, [showSuccessMessage]);

  const addPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get(TITLE_INPUT_NAME) as string;
    const password = formData.get(PASSWORD_INPUT_NAME) as string;
    const client = formData.get(CLIENT_INPUT_NAME) as string;

    addPasswordToStorage({
      title,
      password,
      client,
    });

    setShowSuccessMessage(true);

    form.reset();
  };

  return (
    <div className="container">
      <h1>Add a bloody hot password</h1>

      <form onSubmit={addPassword}>
        <div>
          <label htmlFor="name">Title:</label>
          <input type="text" id="name" name={TITLE_INPUT_NAME} required />
          <p>Give your password a title so you can identify it later on</p>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" required />
        </div>

        <div>
          <label htmlFor="client">Client</label>
          <select name={CLIENT_INPUT_NAME} id="client" defaultValue="" required>
            <option value="" disabled>
              Choose a client
            </option>
            <option value="one">Option one</option>
            <option value="two">Option two</option>
          </select>
        </div>

        <button>Add</button>
      </form>

      {showSuccessMessage && <p>Meeep!!</p>}
    </div>
  );
}

export default AddPage;
