import type { FormEvent } from "react";

const TITLE_INPUT_NAME = "name";
const PASSWORD_INPUT_NAME = "password";
const CLIENT_INPUT_NAME = "client";

type AddPasswordFormProps = {
  onSubmit: (password: Password) => void;
  clients: Client[];
  isLoadingClients: boolean;
  className?: string;
};

function AddPasswordForm({
  onSubmit,
  clients,
  isLoadingClients,
  className,
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
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold">
          Title:
        </label>
        <input
          type="text"
          id="name"
          name={TITLE_INPUT_NAME}
          required
          data-cy="add-page-title-input"
          className="block border border-gray-200 w-full my-2 p-2"
        />
        <p className="text-xs">
          Give your password a title so you can identify it later on
        </p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          data-cy="add-page-password-input"
          className="block font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          required
          className="block border border-gray-200 w-full p-2"
        />
      </div>

      <div>
        <label htmlFor="client" className="block font-bold mb-2">
          Client
        </label>
        <select
          name={CLIENT_INPUT_NAME}
          id="client"
          defaultValue=""
          required
          data-cy="add-page-client-input"
          className="block border border-gray-200 w-full my-2 p-2"
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

      <button
        type="submit"
        data-cy="add-page-submit-button"
        className="bg-purple-500 text-white py-4 px-6 rounded-full block mt-10 w-full"
      >
        Add
      </button>
    </form>
  );
}

export default AddPasswordForm;
