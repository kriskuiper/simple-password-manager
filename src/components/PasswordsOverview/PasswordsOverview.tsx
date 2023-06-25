import PasswordCard from "../PasswordCard";

type PasswordsOverviewProps = {
  passwords: Password[];
};

function PasswordsOverview({ passwords }: PasswordsOverviewProps) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {passwords.map((password: Password) => (
        <li>
          <PasswordCard password={password} />
        </li>
      ))}
    </ul>
  );
}

export default PasswordsOverview;
