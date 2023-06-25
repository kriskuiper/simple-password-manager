import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddPasswordForm from "../components/AddPasswordForm";

import usePasswords from "../hooks/usePasswords";
import DefaultLayout from "../layouts/default";

function AddPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoadingClients, setIsLoadingClients] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { addPassword } = usePasswords();

  useEffect(() => {
    if (clients.length > 0) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsLoadingClients(true);
    }, 1000);

    fetch("/api/clients")
      .then((response) => response.json())
      .then((result) => setClients(result))
      .finally(() => {
        clearTimeout(timeout);
        setIsLoadingClients(false);
      });

    return clearTimeout(timeout);
  }, [clients.length]);

  useEffect(() => {
    if (!showSuccessMessage) {
      return;
    }

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }, [showSuccessMessage]);

  const handlePasswordFormSubmit = (password: Password) => {
    addPassword(password);
    setShowSuccessMessage(true);
  };

  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold text-center">
        Add a bloody hot password
      </h1>

      <AddPasswordForm
        clients={clients}
        isLoadingClients={isLoadingClients}
        onSubmit={handlePasswordFormSubmit}
        className="mb-4"
      />

      <Link
        to="/"
        data-cy="add-page-back-to-home-button"
        className="block text-purple-500"
      >
        Show all passwords
      </Link>

      {showSuccessMessage && <p data-cy="add-page-success-message">Meeep!!</p>}
    </DefaultLayout>
  );
}

export default AddPage;
