import React from "react";
const SizedBox = ({ width = "auto", height = "auto", children }) => {
  return (
    <div
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        display: children ? "inline-block" : "block", // Use block when empty
      }}
    >
      {children}
    </div>
  );
};

export default SizedBox;
