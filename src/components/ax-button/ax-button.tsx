import React, { forwardRef } from "react";
import "./ax-button.css";

interface buttonProps {
  id: string
  label: string
  className:string
  ['aria-label']?:string
  disabled?:boolean
  ref?:any
  buttonType?: 'button' | 'reset' | 'submit';
  onClick:any
}

const AXButton = (props:buttonProps) => {
  return (
    <button
      ref={props?.ref}
      type={props?.buttonType || 'button'}
      className={props?.className}
      disabled={props?.disabled}
      aria-label={props?.['aria-label'] || props?.label}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

AXButton.displayName = "Button";

export default AXButton;
