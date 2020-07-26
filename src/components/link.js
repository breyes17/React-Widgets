import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    window.history.pushState({}, "", href);

    const newEvent = new PopStateEvent("popstate");
    window.dispatchEvent(newEvent);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};
export default Link;
