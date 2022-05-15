import { useState } from "react";
import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1> Name: {props.name}</h1>
      <h1> brother: {props.brother}</h1>
      <h1> last name: jingleheimer</h1>
      <h1> shit: schmit</h1>
    </>
  );
};

function App() {
  const name = "name";
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div>
        <Person name={"fucking"} brother={"butthole"} />
        {name ? (
          <>
            {" "}
            <h1> hello {name} </h1>
          </>
        ) : (
          <>
            <h3> "there is no name" </h3>
          </>
        )}{" "}
      </div>
      <div>
        <button
          onClick={() => {
            setCounter((prevCount) => prevCount + 1);
          }}
        >
          +
        </button>
        <h1>{counter}</h1>
        <button
          onClick={() => {
            setCounter((prevCount) => prevCount - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
