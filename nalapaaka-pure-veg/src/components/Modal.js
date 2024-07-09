// Modal.js
import React from "react";
import "../styles/Styles.css";

const Modal = ({ show, onClose, item }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{item.name}</h2>
        <img
          className="menu-image"
          src={item.image}
          alt={item.name}
          //   style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Modal;
