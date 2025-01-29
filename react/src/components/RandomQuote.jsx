import React, { useEffect, useState } from "react";
import "./RandomQuote.css";
import twitterIcon from "../assets/twitter.svg";
import reloadIcon from "../assets/arrow.svg";
import quotes from "../data/quotes";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "If there is a will, there is a way.",
    author: "David Gao",
  });

  const updateColor = () => {
    const darkerBackgroundColor = darkenColor(backgroundColor, 20);
    document.body.style.backgroundColor = darkerBackgroundColor;
    setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
  };
  const random = () => {
    const selected = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selected);
  };

  const colors = ["#625ac4", "#2c5236", "#3c2c52", "#803d44", "#53918a"];

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - $`);
  };

  const darkenColor = (hex, percent) => {
    let num = parseInt(hex.slice(1), 16),
      amt = Math.round(2.55 * percent),
      r = (num >> 16) - amt,
      g = ((num >> 8) & 0x00ff) - amt,
      b = (num & 0x0000ff) - amt;

    return `#${(
      0x1000000 +
      (r < 0 ? 0 : r) * 0x10000 +
      (g < 0 ? 0 : g) * 0x100 +
      (b < 0 ? 0 : b)
    )
      .toString(16)
      .slice(1)}`;
  };

  const [backgroundColor, setBackgroundColor] = useState("#625ac4");

  useEffect(() => {
    updateColor();
  });
  return (
    <div
      className="container"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="quote">{`"${quote.text}"`}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icons">
            <img
              src={reloadIcon}
              alt="reload"
              onClick={() => {
                random();
              }}
            />
            <img
              src={twitterIcon}
              alt="twitter"
              onClick={() => {
                twitter();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
