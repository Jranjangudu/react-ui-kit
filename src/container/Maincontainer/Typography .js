import React from "react";

const Typography = ({ color, children, align }) => {
  const style = {
    color: `var(--${color})`,
    textAlign: align,
  };
  return <p style={{ ...style }}>{children}</p>;
};

export default Typography;
Typography.defaultProps = {
  color: null,
  align: null,
};
