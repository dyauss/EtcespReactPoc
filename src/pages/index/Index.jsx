import { Form } from "react-router-dom";

import './index.css';

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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris sem, accumsan a tincidunt at, vulputate in sem. Etiam bibendum tellus quis est tincidunt, in convallis urna feugiat. Donec ullamcorper magna non turpis bibendum mattis. Aenean placerat sapien sit amet libero sollicitudin, id auctor odio venenatis. Phasellus pulvinar dui ut arcu sodales sodales. Duis dolor velit, feugiat rutrum mollis eu, interdum ut dolor. Etiam facilisis leo vel augue luctus, non molestie erat commodo. In aliquet sem sit amet diam egestas, eget tempor ligula cursus. Sed non magna id leo iaculis consectetur. Quisque sed tincidunt diam, sit amet placerat eros. Curabitur tincidunt aliquam tellus in congue. Vivamus in sodales arcu. Fusce facilisis hendrerit sapien non accumsan. Nullam sed varius risus, condimentum tempus lacus. Donec finibus nibh sed fringilla ultricies. Sed aliquet massa eu commodo facilisis.</p><br></br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris sem, accumsan a tincidunt at, vulputate in sem. Etiam bibendum tellus quis est tincidunt, in convallis urna feugiat. Donec ullamcorper magna non turpis bibendum mattis. Aenean placerat sapien sit amet libero sollicitudin, id auctor odio venenatis. Phasellus pulvinar dui ut arcu sodales sodales. Duis dolor velit, feugiat rutrum mollis eu, interdum ut dolor. Etiam facilisis leo vel augue luctus, non molestie erat commodo. In aliquet sem sit amet diam egestas, eget tempor ligula cursus. Sed non magna id leo iaculis consectetur. Quisque sed tincidunt diam, sit amet placerat eros. Curabitur tincidunt aliquam tellus in congue. Vivamus in sodales arcu. Fusce facilisis hendrerit sapien non accumsan. Nullam sed varius risus, condimentum tempus lacus. Donec finibus nibh sed fringilla ultricies. Sed aliquet massa eu commodo facilisis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris sem, accumsan a tincidunt at, vulputate in sem. Etiam bibendum tellus quis est tincidunt, in convallis urna feugiat. Donec ullamcorper magna non turpis bibendum mattis. Aenean placerat sapien sit amet libero sollicitudin, id auctor odio venenatis. Phasellus pulvinar dui ut arcu sodales sodales. Duis dolor velit, feugiat rutrum mollis eu, interdum ut dolor. Etiam facilisis leo vel augue luctus, non molestie erat commodo. In aliquet sem sit amet diam egestas, eget tempor ligula cursus. Sed non magna id leo iaculis consectetur. Quisque sed tincidunt diam, sit amet placerat eros. Curabitur tincidunt aliquam tellus in congue. Vivamus in sodales arcu. Fusce facilisis hendrerit sapien non accumsan. Nullam sed varius risus, condimentum tempus lacus. Donec finibus nibh sed fringilla ultricies. Sed aliquet massa eu commodo facilisis.</p><br></br>
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