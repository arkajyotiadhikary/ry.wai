/*
    Note - ryBox is the most abstact component in this project
    by default it will render a div

    Usage:
    - responsive layouts
    - shorthand way to pass styles
    - compose new components and allow for overide using the as props
*/

import React, { ReactNode, ElementType, FC } from "react";
import classNames from "classnames";
import "./index.css";

interface RyBoxProps {
      children: ReactNode;
      className?: string;
      as?: ElementType;
      [key: string]: any;
}

const styles = {
      ryBox: {
            padding: "10px",
            margin: "10px",
      },
};

const RyBox: FC<RyBoxProps> = ({ as: Component = "div", className, children, ...props }) => {
      return (
            <Component styles={styles.ryBox} className={classNames("ryBox", className)} {...props}>
                  {children}
            </Component>
      );
};

export default RyBox;
