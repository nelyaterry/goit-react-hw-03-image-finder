import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalBlock } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.hendelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.hendelKeyDown);
  }

  hendelKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClick();
    }
  };
  hendelBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <Overlay className="Overlay" onClick={this.hendelBackdropClick}>
        <ModalBlock className="Modal">{this.props.children}</ModalBlock>
      </Overlay>,
      modalRoot
    );
  }
}
