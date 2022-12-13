import { Form } from "react-router-dom";

export default function Index() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div className="container">
    <section className="section is-small">
      <h1 className="title">Sistema de processo eletrônico</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
      </h2>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
      <p>AAAAAA</p>
    </section>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}