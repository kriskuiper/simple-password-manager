import { Link } from "react-router-dom";

import usePasswords from "../hooks/usePasswords";
import PasswordsOverview from "../components/PasswordsOverview";

function HomePage() {
  const { passwords } = usePasswords();

  const userHasPasswords = passwords?.length > 0;

  return (
    <div className="container">
      <header>
        <h1>Bloody hot password manager</h1>
        <p>I wouldn't manage your passwords here, they get bloody hot 🔥</p>
      </header>
      <main>
        {userHasPasswords ? (
          <PasswordsOverview passwords={passwords} />
        ) : (
          <p data-cy="passwords-empty-state-message">
            You don't have any passwords yet, feel free to add one
          </p>
        )}
        <Link to="/add">Add new password</Link>
      </main>
    </div>
  );
}

export default HomePage;
