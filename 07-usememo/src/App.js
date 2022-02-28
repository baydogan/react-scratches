import "./App.css";
import { useState, useMemo } from "react";

const userList = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Jack",
  },
  {
    id: 4,
    name: "Jill",
  },
  {
    id: 5,
    name: "Tom",
  },
  {
    id: 6,
    name: "Alex",
  },
  {
    id: 7,
    name: "Bob",
  },
  {
    id: 8,
    name: "Sam",
  },
  {
    id: 9,
    name: "Tommy",
  },
  {
    id: 10,
    name: "Mike",
  },
];

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      userList.filter((user) => {
        console.log("Filter function is running ...");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      <List list={filteredUsers} />
    </div>
  );
}

const List = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
