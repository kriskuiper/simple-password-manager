type PasswordsOverviewProps = {
  passwords: Password[];
};

function PasswordsOverview({ passwords }: PasswordsOverviewProps) {
  return (
    <ul>
      {passwords.map((password: Password) => (
        <li>
          <div
            data-cy="password-card"
            style={{ backgroundColor: password.color }}
          >
            <h2>{password.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PasswordsOverview;
