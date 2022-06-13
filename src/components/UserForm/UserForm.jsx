import React, { useRef, useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./UserForm.module.css";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const UserForm = ({ label, handleUsersData }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (not empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      //enteredAge is string, by using plus sign, we are assuring the enteredAge is taken as a number by JS
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const users = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    handleUsersData(users);

    //use this rarely to change the DOM, we can use useState as well to clear the input
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}

      <Card>
        <form className={styles.flex} onSubmit={addUserHandler}>
          <label className={styles.label} htmlFor="username">
            User
            <input
              id="username"
              type="text"
              className={styles.input}
              ref={nameInputRef}
            />
          </label>
          <label className={styles.label} htmlFor="age">
            Age (Years)
            <input
              id="age"
              type="number"
              className={styles.input}
              ref={ageInputRef}
            />
          </label>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
