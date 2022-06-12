import React from "react";
import styles from "./User.module.css";

const User = ({name, age}) => {
    return (
        <ul className={styles.userList}>
            <li>{name} {age == 1 ? `${age} year` : `${age} years` } old</li>
        </ul>
    )
};

export default User;