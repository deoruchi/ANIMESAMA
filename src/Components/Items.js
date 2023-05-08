import { useEffect, useState } from "react";

export default function Items(props) {
  const sd = props.refs;
  const op = props.funcc;
  const op2 = props.funcsum;
  const op3 = props.classChange;
  console.log(sd[0].color);

  const linkin = sd.map((val) => {
    return (
      <p
        onClick={() => {
          op(val.reference);
          op2(val.sum, val.color);
          op3(val.class);
        }}
        className="item_clickable"
      >
        {val.name}
      </p>
    );
  });

  return (
    <>
      <div className="items-links" title={props.title}>
        {linkin}
      </div>
    </>
  );
}
