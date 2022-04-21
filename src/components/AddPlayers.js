import { useState } from "react";
// src/components/AddPlayerForm.js
export default function AddPlayer(props) {
  /// Remove the value from the field
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const inputChange = (event) => {
    // everytime there is a change (character added) => set to state
    setName(event.target.value);
  };

  //submit
  const onSubmit = () => {
    console.log("I want to add", name);
    // if (!name) {
    //   setError("You have to provide a name");
    // }

    props.createNewPlayer(name);

    setName("");
  };

  return (
    <div className="AddPlayerForm">
      <div>
        <label>New player:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => inputChange(event)}
        />
        <div>
          <button onClick={onSubmit}>Add</button>
        </div>
        {error}
      </div>
    </div>
  );
}
