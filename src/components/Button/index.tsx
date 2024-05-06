import React, { useEffect, useState } from "react";
import { ButtonProps } from "./types";
import "./index.less";
import classnames from "classnames";

const BUTTONNAME = "NiceButton";

export default function NiceButton(props: ButtonProps) {
  function handleClick() {
    if (!props.onClick) return;
    props.onClick();
  }
  const btnClassName = classnames({
    "nice-btn": true,
    [`nice-btn-${props.type}`]: true,
    [`nice-btn-${props.size}`]: true,
    "nice-btn-disabled": props.disabled,
    "nice-btn-circle": props.circle,
  });
  return (
    <button className={btnClassName} onClick={handleClick}>
      {props.icon ? (
          <span className={`iconfont ${props.icon} nice-btn-icon `} />
        ) : null}
      {props?.children}
    </button>
  );
}
NiceButton.defaultProps = {
  children: "Button",
  type: "primary",
  size: "default",
  disabled: false,
  circle: false,
  icon: "",
};
