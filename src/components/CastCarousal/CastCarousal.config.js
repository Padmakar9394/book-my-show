import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
      backgroundColor: "#333333",
      height: "30px",
      marginTop: "-40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: "30px",
      position: "absolute",
      borderRadius: "50%",
      opacity: "0.8"
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
     backgroundColor: "#333333",
     height: "30px",
     marginTop: "-40px",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     cursor: "pointer",
     width: "30px",
     position: "absolute",
     borderRadius: "50%",
     opacity:"0.8"
   }}
   onClick={props.onClick}
    />
    </>
  );
};
