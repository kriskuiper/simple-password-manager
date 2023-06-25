import { Link } from "react-router-dom";

import DefaultLayout from "../layouts/default";

function NotFoundPage() {
  return (
    <DefaultLayout>
      <main className="container">
        <h1>Not found! 😢</h1>
        <p>Boohoo, it looks like that page doesn't exist</p>
        <Link to="/">Back to home</Link>
      </main>
    </DefaultLayout>
  );
}

export default NotFoundPage;
