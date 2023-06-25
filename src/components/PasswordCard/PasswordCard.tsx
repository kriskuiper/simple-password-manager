import { Link } from "react-router-dom";

function PasswordCard({ password }: { password: Password }) {
  // TODO: ideally we wouldn't use the name here but rather an id or slug
  // but we don't have that data at the moment of writing.
  return (
    <div
      className="block border-gray-200 border-b pb-4"
      data-cy="password-card"
    >
      <div
        style={{ height: "4px", backgroundColor: password.color }}
        className="mb-2"
      />

      <div className="px-4">
        <h2 className="font-bold">{password.title}</h2>
        <Link to={`/clients/${password.client}`} className="inline-block mb-4">
          {password.client}
        </Link>
        <Link to={`/${password.title}`} className="inline-block underline">
          Check credentials
        </Link>
      </div>
    </div>
  );
}

export default PasswordCard;
