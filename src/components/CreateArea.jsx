import React, { useState } from "react";

function CreateArea(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  function addNewNote(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setNewTitle(value);
    } else if (name === "content") {
      setNewContent(value);
    }
  }

  function handleAddNote() {
    props.addOnNote({
      title: newTitle,
      content: newContent
    });
    setNewTitle("");
    setNewContent("");
  }
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={newTitle}
          onChange={addNewNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newContent}
          onChange={addNewNote}
        />
        <button onClick={handleAddNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
