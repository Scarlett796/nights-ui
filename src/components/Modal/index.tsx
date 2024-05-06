import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalConfig, modalNode } from "./modalConfig";
import { ModalProps, Props } from "./types";
// import "./index.less";

const MODALNAME = "NiceModal";

export default function NiceModal(props: Props & ModalProps) {
  const [_visible, set_Visible] = useState(props.visible);

  useEffect(() => {
    if (ModalConfig.initable) {
      set_Visible(props.visible);
    } else {
      console.log(`${MODALNAME} is Not Init`);
    }
  }, [props.visible]);

  return _visible
    ? ReactDOM.createPortal(
        <Modal {...props}>{props.children}</Modal>,
        modalNode
      )
    : null;
}

function Modal(props: ModalProps) {
  function handleCancel() {
    if (props.onCancel) {
      props.onCancel();
    }
  }
  function handleOk() {
    if (props.onOk) {
      props.onOk();
    }
  }
  return (
    <div className="nice-modal">
      <div
        className="nice-modal-mask"
        onClick={() => {
          if (props.maskable) {
            handleCancel();
          }
        }}
      ></div>
      <div className="container">
        <div className="nice-modal-header">
          <p className="nice-modal-title">{props.title}</p>
          <p className="nice-modal-close" onClick={handleCancel}>
            x
          </p>
        </div>
        <div className="nice-modal-content">{props.children}</div>
        <div className="nice-modal-footer">
          <button className="nice-modal-cancel-btn" onClick={handleCancel}>{props?.cancelText || "取消"}</button>
          <button className="nice-modal-ok-btn" onClick={handleOk}>{props?.okText || "确认"}</button>
        </div>
      </div>
    </div>
  );
}
