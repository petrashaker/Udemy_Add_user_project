import React from "react";
import User from "../User/User";
import Card from "../UI/Card/Card";

const UsersList = ({users}) => {
    return (
        <Card>
            {users.map(user => <User key={user.id} name={user.name} age={user.age} />)}
        </Card>
    )
};

export default UsersList;