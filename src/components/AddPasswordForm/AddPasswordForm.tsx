import type { FormEvent } from "react";

const TITLE_INPUT_NAME = "name";
const PASSWORD_INPUT_NAME = "password";
const CLIENT_INPUT_NAME = "client";

type AddPasswordFormProps = {
  onSubmit: (password: Password) => void;
  clients: Client[];
  isLoadingClients: boolean;
};

function AddPasswordForm({
  onSubmit,
  clients,
  isLoadingClients,
}: AddPasswordFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get(TITLE_INPUT_NAME) as string;
    const password = formData.get(PASSWORD_INPUT_NAME) as string;
    const client = formData.get(CLIENT_INPUT_NAME) as string;
    const color = clients.find(
      (clientFromList) => clientFromList.name === client
    )?.color;

    onSubmit({
      title,
      password,
      client,
      color,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
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
            {isLoadingClients ? "Loading clients.." : "Choose a client"}
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
  );
}

export default AddPasswordForm;
