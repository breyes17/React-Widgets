import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickIndex = (index) => setActiveIndex(index);

  const renderedItem = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={index}>
        <div className={`${active} title`} onClick={() => onClickIndex(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItem}</div>;
};

export default Accordion;
