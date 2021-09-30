import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style, backgroundColor: "black", height: "40px", width: "40px",
 position: "absolute", opacity: "0.5", borderRadius: "5px", zIndex: "10"}}
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
   style={{ ...props.style, backgroundColor: "black", height: "40px", width: "40px",
 position: "absolute", opacity: "0.5", borderRadius: "5px", zIndex: "10"}}
   onClick={props.onClick}
    />
    </>
  );
};
