import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import usePasswords from "../hooks/usePasswords";

const TITLE_INPUT_NAME = "name";
const PASSWORD_INPUT_NAME = "password";
const CLIENT_INPUT_NAME = "client";

type Client = {
  name: string;
  color: string;
};

function AddPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { addPassword: addPasswordToStorage } = usePasswords();

  useEffect(() => {
    if (clients.length > 0) {
      return;
    }

    fetch("/api/clients")
      .then((response) => response.json())
      .then((result) => setClients(result));
  }, [clients.length]);

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
          <input
            type="text"
            id="name"
            name={TITLE_INPUT_NAME}
            required
            data-cy="add-page-title-input"
          />
          <p>Give your password a title so you can identify it later on</p>
        </div>

        <div>
          <label htmlFor="password" data-cy="add-page-password-input">
            Password:
          </label>
          <input type="text" id="password" name="password" required />
        </div>

        <div>
          <label htmlFor="client">Client</label>
          <select
            name={CLIENT_INPUT_NAME}
            id="client"
            defaultValue=""
            required
            data-cy="add-page-client-input"
          >
            <option value="" disabled>
              Choose a client
            </option>
            {clients.map((client) => (
              <option key={client.name} value={client.name}>
                {client.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" data-cy="add-page-submit-button">
          Add
        </button>
      </form>

      <Link to="/" data-cy="add-page-back-to-home-button">
        Show all passwords
      </Link>

      {showSuccessMessage && <p data-cy="add-page-success-message">Meeep!!</p>}
    </div>
  );
}

export default AddPage;
