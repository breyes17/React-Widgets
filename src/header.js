import React from "react";
import Link from "./components/link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/search" className="item">
        Wikipedia Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translation
      </Link>
    </div>
  );
};
export default Header;
