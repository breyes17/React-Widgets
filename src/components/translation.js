// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// for more language just visit this page https://cloud.google.com/translate/docs/languages
import React, { useState } from "react";
import Dropdown from "./dropdown";
import Convert from "./convert";

const Translation = () => {
  const options = [
    { label: "English", value: "en" },
    { label: "Tagalog", value: "tl" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
  ];

  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("Hello");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter a text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectChange={setLanguage}
        label="Select a language"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translation;
