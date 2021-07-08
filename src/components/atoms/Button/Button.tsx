/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { styles } from "./Button.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { ButtonPropsType } from "./Button.types";

const Button = React.forwardRef(
    (
        {
            fullWidth,
            variant = "yell",
            styles: stylesProp = {},
            children,
            ...props
        }: ButtonPropsType,
        ref?: React.Ref<HTMLButtonElement>
    ) => {
        const width = fullWidth ? "100%" : "auto";
        const theme = useTheme();
        return (
            <button
                css={stylegun({
                    css: {
                        ...styles.Button,
                        ":focus-visible" : styles.FocusedButton,
                        width,
                        ...stylesProp,
                    },
                    theme,
                    component: "Button",
                    variant,
                })}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;
