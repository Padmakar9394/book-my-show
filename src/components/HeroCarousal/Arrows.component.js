import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick } = props;
  return(
    <>
    <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "black",display: "block", height: "40px",
     width: "40px", top: "160px", right: "-2px", opacity: "0.7", zIndex: "15",
   position: "absolue", borderRadius: "5px", alignContent: "center"}}
    onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow = (props) => {
  return(
    <>
    <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "black",display: "block", height: "40px",
     width: "40px", top: "160px", right: "-2px", opacity: "0.7", zIndex: "15",
   position: "absolue", borderRadius: "5px"}}
    onClick={props.onClick}
    />
    </>
  );
};
