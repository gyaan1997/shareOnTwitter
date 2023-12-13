import React, { useEffect, useState } from "react";
import Data from "../data.json";
import "./home.css";
import TwitterButton from "./twitterButton";
function Home() {
  const [data, setData] = useState([]);
  const [selectedtext, setselectedText] = useState("");
  
  useEffect(() => {
    const fetchData = () => {
      try {
        const quotesData = Data.quotes;
        setData(quotesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString();
    setselectedText(selectedText);
    // console.log(selectedText)
  };

  return (
    <div onMouseUp={handleTextSelection}>
      <ul>
        {data.map((quote) => (
          <li key={quote.id}>
            <p> {quote.quote}</p>
            <span>:~ {quote.philosopher}</span>
            {selectedtext && (
              <TwitterButton
                // style={{
                //   top: selectionPosition.top,
                //   left: selectionPosition.left,
                // }}
                text={selectedtext}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

// const handleTextSelection = () => {
//   const selection = window.getSelection();
//   if (selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     const rect = range.getBoundingClientRect();
//     console.log("Selection Coordinates:", rect);

//     const buttonTop = rect.top + window.pageYOffset - 30; 
//     const buttonLeft = rect.left + window.pageXOffset + rect.width / 2;
//     setButtonPosition({ top: buttonTop, left: buttonLeft });
//     setShowTwitterButton(true);
//   }

//   const selectedText = selection.toString();
//   setSelectedText(selectedText);
// };
