import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    }}
   onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
     backgroundColor: "rgba(0, 0, 0, 0.4)",
   }}
   onClick={props.onClick}
    />
    </>
  );
};
