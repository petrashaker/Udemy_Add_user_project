import React, { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./UserForm.module.css"
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const UserForm = ({label, handleUsersData}) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (not empty values)."
            });
            return;
        }
        if(+enteredAge < 1) { //enteredAge is string, by using plus sign, we are assuring the enteredAge is taken as a number by JS
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            });
            return;
        }

        const users = {name: enteredUsername, age: enteredAge, id: Math.random().toString()};
        handleUsersData(users);
        setEnteredUsername("");
        setEnteredAge("");
    }

    const usernameChangeHandler = ({target}) => {
        setEnteredUsername(target.value);
    }

    const ageChangeHandler = ({target}) => {
        setEnteredAge(target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return(
        <>
        {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />}

        <Card>
        <form className={styles.flex} onSubmit={addUserHandler}>
            <label className={styles.label} htmlFor="username">
                User
                <input id="username" type="text" className={styles.input} onChange={usernameChangeHandler} value={enteredUsername}/>
            </label> 
            <label className={styles.label} htmlFor="age">
                    Age (Years)
                <input id="age" type="number" className={styles.input} onChange={ageChangeHandler} value={enteredAge}/>
            </label> 
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </>
    )
};

export default UserForm;