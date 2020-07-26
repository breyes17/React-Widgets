import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  const translate = async () => {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: debouncedText,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );

    setTranslated(response.data.data.translations[0].translatedText);
  };

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), 500);
    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    translate();
  }, [debouncedText, language]);
  return <h1>{translated}</h1>;
};

export default Convert;
