import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import toast from "react-hot-toast";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "#f5ba13",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    if (note.title === "" || note.content === "" || note.color === "") {
      toast.error("You must add a title and content!");
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      color: "#f5ba13",
    });
  }

  return (
    <div className="inputContainer">
      <div className="inputPart">
        <form className="create-form">
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            type="text"
            placeholder="Title"
          />

          <textarea
            onChange={handleChange}
            type="text"
            name="content"
            value={note.content}
            placeholder="Take a note..."
          />

          <div className="bottom">
            <input
              type="color"
              name="color"
              value={note.color}
              onChange={handleChange}
            />

            <button className="addIcon" onClick={submitNote}>
              <AddBoxIcon fontSize="large" style={{ fill: note.color }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateArea;
