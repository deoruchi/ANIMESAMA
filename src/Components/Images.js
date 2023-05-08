import React, { useState } from "react";
import "./Images.css";
export default function Images(props) {
  console.log(props.classImage);
  return (
    <>
      <div
        className={`image-scrolled image1 ${props.classImage}`}
        ref={props.reference}
        style={{ color: `${props.color}` }}
      ></div>
    </>
  );
}
