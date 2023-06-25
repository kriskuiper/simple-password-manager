import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import DefaultLayout from "../layouts/default";
import NotFoundPage from "./not-found";

import usePasswords from "../hooks/usePasswords";

function PasswordPage() {
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const { passwordId } = useParams();
  const { passwords } = usePasswords();
  const password = passwords.find(
    (originalPassword: Password) => originalPassword.title === passwordId
  );
  const showPasswordLabel = passwordIsShown ? "Hide password" : "Show password";
  const inputType = passwordIsShown ? "text" : "password";

  const togglePassword = () => setPasswordIsShown(!passwordIsShown);

  if (!password) {
    return <NotFoundPage />;
  }

  return (
    <DefaultLayout>
      <div className="max-w-xs mx-auto">
        <Link to="/">Back to home</Link>
        <main className="bg-gray-100 p-10 border-gray-300 border">
          <header>
            <div
              style={{ height: "4px", backgroundColor: password.color }}
              className="mb-2"
            ></div>
            <h2 className="font-bold text-xl">{password.title}</h2>
            <p className="text-sm italic">{password.client}</p>
          </header>

          <div>
            <input
              type={inputType}
              disabled
              value={password.password}
              className="block border border-gray-200 w-full my-2 p-2 disabled:bg-white"
            />
          </div>

          <button onClick={togglePassword}>{showPasswordLabel}</button>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default PasswordPage;
