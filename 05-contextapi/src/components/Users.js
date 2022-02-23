import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Users({ user }) {
  const context = useContext(UserContext);
  console.log(context);

  return (
    <div style={{ background: user.color, margin: "20px", padding: "5px" }}>
      <h4>{user.name}</h4>
      <h5>{user.age}</h5>
      <input type="text" onChange={(e) => context.changeColor(user.id, e.target.value)} />
    </div>
  );
}
