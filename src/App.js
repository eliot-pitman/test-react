import "./App.css";

function App() {
  const name = "name";
  return (
    <div className="App">
      <div>
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
      <div> {2 + 2} </div>
    </div>
  );
}

export default App;
