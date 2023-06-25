import { Link } from "react-router-dom";

import usePasswords from "../hooks/usePasswords";
import PasswordsOverview from "../components/PasswordsOverview";
import DefaultLayout from "../layouts/default";

function HomePage() {
  const { passwords } = usePasswords();

  const userHasPasswords = passwords?.length > 0;

  return (
    <DefaultLayout>
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Bloody hot password manager</h1>
        <p className="max-w-xs mx-auto">
          I wouldn't manage your passwords here, they get bloody hot 🔥
        </p>
      </header>
      <main>
        {userHasPasswords ? (
          <PasswordsOverview passwords={passwords} />
        ) : (
          <p
            data-cy="passwords-empty-state-message"
            className="bg-gray-100 p-4 border-b-4 border-t-4 border-gray-200"
          >
            You don't have any passwords yet, feel free to add one
          </p>
        )}
        <Link
          to="/add"
          className="bg-purple-500 text-white py-4 px-6 rounded-full block mt-10"
        >
          Add new password
        </Link>
      </main>
    </DefaultLayout>
  );
}

export default HomePage;
