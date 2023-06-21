import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [itemsList, setItemsList] = useState([]);

  function submitNote(newNote) {
    setItemsList((previousItems) => [...previousItems, newNote]);
  }

  function deleteNote(id) {
    setItemsList((previousItems) =>
      previousItems.filter((item, index) => index !== id)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addOnNote={submitNote} />
      {itemsList.map((note, index) => (
        <Note
          key={index}
          id={index} // Use the index as the id for simplicity (make sure to use a unique identifier in a production environment)
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
