import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectChange(option)}
      >
        {option.label}
      </div>
    );
  });

  const onBodyClick = (event) => {
    if (ref.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick);

    return () => document.body.removeEventListener("click", onBodyClick);
  }, []);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible" : ""} transition`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
