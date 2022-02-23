import Users from "./Users"
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


export default function UserList ({}) {
    const context = useContext(UserContext);
    return (
        <div>
            <h2>User List</h2>
            {context.users.map(user => (
                <Users user={user} key={user.id} />


            ))}
        </div>
    )
}