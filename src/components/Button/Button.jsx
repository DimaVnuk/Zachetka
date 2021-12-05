import React from "react";

function Button({ children, propsStyle, onClickProps }) {
  return (
    <>
      <div className="button" style={propsStyle} onClick={onClickProps}>
        {children}
      </div>
    </>
  );
}

export default Button;
