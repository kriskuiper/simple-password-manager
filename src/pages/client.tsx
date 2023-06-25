import { Link, useParams } from "react-router-dom";

import usePasswords from "../hooks/usePasswords";
import PasswordsOverview from "../components/PasswordsOverview";
import DefaultLayout from "../layouts/default";

function HomePage() {
  const { passwords } = usePasswords();
  const { client } = useParams();

  const filteredPasswords = passwords.filter(
    (word: Password) => word.client === client
  );

  return (
    <DefaultLayout>
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Passwords for {client}</h1>
      </header>
      <main>
        <PasswordsOverview passwords={filteredPasswords} />
        <Link
          to="/"
          className="bg-purple-500 text-white py-4 px-6 rounded-full block mt-10"
        >
          Back to home
        </Link>
      </main>
    </DefaultLayout>
  );
}

export default HomePage;
