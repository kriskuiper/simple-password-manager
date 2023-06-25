import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <header>
        <h1>Bloody hot password manager</h1>
        <p>I wouldn't manage your passwords here, they get bloody hot 🔥</p>
      </header>
      <main>
        <p>You don't have any passwords yet, feel free to add one</p>
        <Link to="/add">Add a password</Link>
      </main>
    </>
  );
}

export default HomePage;
