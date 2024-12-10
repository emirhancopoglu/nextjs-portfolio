import React from "react";

export default function Container({ children, className, el = "div", clean }) {
  const rootClassName = "container mx-auto max-w-[90rem]";

  let Component = el;

  // className varsa, rootClassName ile birleştir
  const combinedClassName = className
    ? `${rootClassName} ${className}`
    : rootClassName;

  return <Component className={combinedClassName}>{children}</Component>;
}
