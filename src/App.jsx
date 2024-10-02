import React, { Fragment, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
    toast.success("Note successfully added!");
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return id !== index;
      });
    });
    toast.success("Note successfully deleted!");
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Fragment>
      <Toaster />
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          color={note.color}
          onDelete={deleteNote}
        />
      ))}
    </Fragment>
  );
}

export default App;
