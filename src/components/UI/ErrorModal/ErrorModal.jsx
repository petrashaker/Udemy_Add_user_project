import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({title, message, onClick}) => {
    const [close, setClose] = useState(false);
    const closeModal = () => {
        setClose(true);
    }

    return (
        <>
        <div className={styles.backdrop} onClick={onClick} />
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={onClick}>OK</Button>
            </footer>
        </Card>
        </>
    )
};

export default ErrorModal;