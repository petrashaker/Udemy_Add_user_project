import React from "react";

const User = ({name, age}) => {
    return (
        <ul>
            <li>{name} {age} years old</li>
        </ul>
    )
};

export default User;