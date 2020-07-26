import React, { useState } from "react";
import Route from "./components/route";
import Translation from "./components/translation";
import Search from "./components/search";
import Accordion from "./components/accordion";
import Dropdown from "./components/dropdown";
import Header from "./header";

const App = () => {
  const items = [
    {
      title: "Gwapo ko",
      content: "Ang ang wala man kay tapad",
    },
    {
      title: "Pastilan",
      content: "Ka gwapo jud nako",
    },
    {
      title: "Joke ra",
      content: "Maninuod man ka oy.. Gwapo jud bitaw ko",
    },
  ];

  const options = [
    { label: "The Fiery Red", value: "red" },
    { label: "The Peaceful Blue", value: "blue" },
    { label: "The Shining Gold", value: "gold" },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
          label="Pick a color"
        />
      </Route>
      <Route path="/translate">
        <Translation />
      </Route>
    </div>
  );
};

export default App;
