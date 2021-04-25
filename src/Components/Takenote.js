import React, { useState, useContext, useEffect } from "react";
import { context } from "../Store";
import "./Takenote.css";

function Takenote() {
  const [state, dispatch] = useContext(context);
  const [note, setNote] = useState({ title: "", note: "" });

  useEffect(() => {
    if (state.editnote.length > 0) {
      console.log("edittinggg", state.editnote);
      state.editnote.map((edit) => {
        setNote({ title: edit.title, note: edit.note });
      });
    }
  }, [state.editnote.length]);

  const handleTitleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  const handleSave = () => {
    if (note.title !== "" || note.note !== "") {
      dispatch({ type: "SET_NOTE", payload: note });
      setNote({ title: "", note: "" });
    } else {
      alert("please write some note");
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="getnote">
        <h1>Make A Note</h1>
        <input
          name="title"
          type="text"
          className="title"
          value={note.title}
          placeholder="Enter the note title"
          onChange={handleTitleChange}
        />
        <textarea
          name="note"
          rows="10"
          cols="40"
          className="note"
          value={note.note}
          placeholder="Enter the Note"
          onChange={handleTitleChange}
        />
        <button onClick={handleSave}>Add note</button>
      </div>
    </div>
  );
}

export default Takenote;
