/*
    Note - RyContainer are used to constrain a content's width to the current breakpoints, while keeping it fluid
    Usage:
    - to contain any piece of cotent, wrap it in the RyContainer
    - by defaul max width of the cotainer is 60ch - 60 character
    - centering container children use centerContent props
*/

import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import "./index.css";

interface RyContainerProps {
      children: ReactNode;
      className?: string;
      centerContent?: boolean;
      [key: string]: any;
}

const RyContainer: FC<RyContainerProps> = ({ children, className, centerContent, ...props }) => {
      return (
            <div
                  className={classNames("ryContainer", className, {
                        "ryContainer--centerContent": centerContent,
                  })}
                  {...props}
            >
                  {children}
            </div>
      );
};

export default RyContainer;
