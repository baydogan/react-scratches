import "./App.css";
import { useState } from "react";

function App() {
  const [showTexts, setShowTexts] = useState(true);
  const [name, setName] = useState("change");
  const [list, setList] = useState([
    { title: "First Text", id: 1 },
    { title: "Second Text", id: 2 },
    { title: "Third Text", id: 3 },
  ]);

  

  const handleClick = () => {
    setName("changed");
  };

  const clickButton = (id) => {
    setList(
      list.filter((list) => {
        return id !== list.id;
      })
    );
  };

  return (
    <div className="App">
      {!showTexts && (
        <div>
          <button onClick={() => setShowTexts(true)}>Show texts</button>
        </div>
      )}

      {showTexts && (
        <div>
          <button onClick={() => setShowTexts(false)}>Hide texts</button>
        </div>
      )}
      <h1>This will be {name}</h1>
      <button onClick={handleClick}>Click</button>
      {showTexts &&
        list.map((list, index) => (
          <div key={list.id}>
            <h2>
              {list.id} - {list.title}
            </h2>
            <button onClick={() => clickButton(list.id)}>Delete text</button>
          </div>
        ))}
    </div>
  );
}

export default App;
