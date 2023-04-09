import Link from "next/link";
import React from "react";
import type { ReactNode } from "react";

enum ButtonSize {
    small = "small",
    medium = "medium",
    large = "large",
}
enum ButtonColor {
    primary = "primary",
    secondary = "secondary",
}
enum ButtonVariant {
    contained = "contained",
    outlined = "outlined",
    text = "text",
}
enum ButtonType {
    button = "button",
    submit = "submit",
    reset = "reset",
    link = "link",
}

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode;
    size: "small" | "medium" | "large";
    color?: "primary" | "secondary";
    variant?: "contained" | "outlined" | "text";
    type: "button" | "submit" | "reset" | "link";
    href: string;
    target?: string;
    rel?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <Link
            className={`button button-${props.size} button-${
                props.color ? props.color : ButtonColor.primary
            } button-${
                props.variant === ButtonVariant.outlined
                    ? ButtonVariant.contained + " button-outlined"
                    : props.variant
                    ? props.variant
                    : ButtonVariant.contained
            } `}
            role={props.type}
            href={props.href}
            target={props.target}
            rel={props.rel}
            style={props.style}
            onClick={props.onClick}
            {...(props.disabled && { disabled: true })}
        >
            {props.children}
        </Link>
    );
};

export default Button;
