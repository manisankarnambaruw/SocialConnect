import { Button as SemanticButton, Popup } from "semantic-ui-react";
import { IPopupProps, IButtonProps } from "../interfaces";

export default function Button(props: IButtonProps | IPopupProps) {
  const buttonProps = { as: props.as, to: props.to, onClick: props.onClick };
  const defaultButtonProps = {
    color: props.color,
    className: props.disabled
      ? `disabled-button${props.className ? " " + props.className : ""}`
      : props.className,
    style: props.style,
    type: props.type,
  };
  const mergeButtonProps = props.disabled
    ? defaultButtonProps
    : { ...defaultButtonProps, ...buttonProps };
  const button = (
    <SemanticButton {...mergeButtonProps}>{props.children}</SemanticButton>
  );

  return props.disabled ? (
    <Popup
      disabled={props.disabledContent}
      content={props.content}
      trigger={button}
    />
  ) : (
    button
  );
}
