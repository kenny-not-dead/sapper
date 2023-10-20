import React from "react";
import classes from "./Modal.module.scss";

interface ModalType {
  closeModal: () => void;
  win: string;
}

export default function Modal(props: ModalType) {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <h2>
          <b className="text-lg">{props.win}</b>
          Попробуем еще раз?
        </h2>
        <button onClick={closeModal}>Погнали!</button>
      </div>
    </div>
  );
}
