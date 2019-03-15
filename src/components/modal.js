import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames/bind";
import styles from "./modal.module.scss";

const cx = classnames.bind(styles);

const portalRoot = typeof document !== `undefined` ? document.body : null;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el =
      typeof document !== `undefined` ? document.createElement("div") : null;
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }
  componentWillUnMount() {
    portalRoot.removeChild(this.el);
  }

  ToggleShow = () => {
    console.log("toggle");
    this.props.ToggleShow();
  };

  render() {
    if (this.el) {
      return ReactDOM.createPortal(
        <div className={cx("wrap")}>{this.props.children}</div>,
        this.el
      );
    } else {
      return null;
    }
  }
}

export default Modal;
