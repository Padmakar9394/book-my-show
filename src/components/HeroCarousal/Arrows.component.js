import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick } = props;
  return(
    <>
    <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "black", display: "block", padding: 30, paddingLeft:10, }}
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
    style={{ ...props.style, backgroundColor: "black"}}
    onClick={props.onClick}
    />
    </>
  );
};
