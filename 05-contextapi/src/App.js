import "./App.css";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import { UserContext } from "./contexts/UserContext";

// const url = "https://randomuser.me/api/?results=20";
const users = [
  {
    name: "John",
    age: "25",
    color: "red",
    id: 1,
  },
  {
    name: "Jane",
    age: "26",
    color: "blue",
    id: 2,
  },
  {
    name: "Jack",
    age: "27",
    color: "green",
    id: 3,
  },
];

function App() {
  const [user, setUser] = useState(users);

  const changeColor = (id, color) => {
    setUser(users.map((user) => (user.id === id ? { ...user, color } : user)));
  };

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     setUser(res.data.results);
  //     console.log(user);
  //   });
  // }, []);
  return (
    <UserContext.Provider value={{users, changeColor }}>
      <div className="App">
        <h1>USER HOME</h1>
        <UserList/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
