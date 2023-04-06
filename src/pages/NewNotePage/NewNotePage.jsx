import { set } from "mongoose";
import { useState } from "react";

export default function NewNotePage() {
  const [note, setNote] = useState('');

  function handleChange(evt) {
    setNote(evt.target.value)
  }

function handleSubmit(evt) {
  setNote(evt.target.value)
}

    return (
      <>
      <h1>New Note</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input type="text" name="text" id="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Add Note"/>
      </form>
      </>
    );
}