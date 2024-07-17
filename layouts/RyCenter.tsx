/*
    Note - RyCenter is a layout component that centers its children
    Usage:
    - Put any children in the RyCenter give it any widht and height it will insured the child is centered
*/

import React, { FC, ReactNode, ElementType } from "react";
import classNames from "classnames";
import "./index.css";

interface RyCenterProps {
      as?: ElementType;
      className?: string;
      children: ReactNode;
      [key: string]: any;
}

const RyCenter: FC<RyCenterProps> = ({ as: Component = "div", className, children, ...props }) => {
      return (
            <Component className={classNames("ryCenter", classNames)} {...props}>
                  {children}
            </Component>
      );
};

export default RyCenter;
