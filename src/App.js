import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setsuperPower] = useState("");
  const [displayCharacter, setDisplayCharacter] = useState(false);

  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label> Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label> superPower: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setsuperPower(event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setDisplayCharacter(true);
        }}
      >
        DisplayCharacter
      </button>
      <div>
        <h1>Hero Info</h1>
        {displayCharacter && (
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{height}</li>
            <li>{superPower}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
export default App;
