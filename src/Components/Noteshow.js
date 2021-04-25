import React, { useContext } from "react";
import { context } from "../Store";
import "./Noteshow.css";

let count = 0;
function NoteShow({ notes }) {
  const [state, dipatch] = useContext(context);
  console.log("getnote", state);

  const handleEdit = (edit) => {
    dipatch({ type: "DELETE_NOTE", payload: edit });
    dipatch({ type: "EDIT_NOTE", payload: edit });
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="showcomp">
      {state?.notes?.map((note) => {
        return (
          <div key={count++} className="Shownote">
            <h1>{note.title}</h1>
            <p>{note.note}</p>
            <button className="edit_btn" onClick={() => handleEdit(note)}>
              Edit
            </button>
            <button
              className="dele_btn"
              onClick={() => dipatch({ type: "DELETE_NOTE", payload: note })}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default NoteShow;
