import React, { useState, useEffect, useRef } from "react";

const RefPopUp = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   const onBodyClick = (event) => {
  //     if (ref.current.contains(event.target)) return;
  //     setOpen(false);
  //   };

  //   document.body.addEventListener("click", onBodyClick);

  //   return () => {
  //     document.body.removeEventListener("click", onBodyClick);
  //   };
  // }, []);

  return (
    <div className="refpopup">
      <div ref={ref} className="content">
        <button onClick={() => setOpen(!open)}>Hey</button>

        <div className={`dropdown ${open ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default RefPopUp;
