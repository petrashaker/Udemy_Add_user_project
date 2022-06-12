import React from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

const Backdrop = ({onClick}) => {
    return <div className={styles.backdrop} onClick={onClick} />
}

const ModalOverlay = ({title, message, onClick}) => {
    return (
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

    )
}

const ErrorModal = ({title, message, onClick}) => {
    return (
        <>
        {ReactDom.createPortal(<Backdrop onClick={onClick} />, document.getElementById("backdrop-root"))}
        {ReactDom.createPortal(<ModalOverlay title={title} message={message} onClick={onClick} />, document.getElementById("modal-root"))}
        </>
    )
};

export default ErrorModal;