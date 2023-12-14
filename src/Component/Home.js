import React, { useEffect, useState } from "react";
import Data from "../data.json";
import "./home.css";
import TwitterButton from "./twitterButton";
function Home() {
  const [data, setData] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  const [buttonPosition,setButtonPosition]=useState(null)
  const [showTwitterButton,setShowTwitterButton]=useState(false)
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
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
  
    if (selectedText) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
  
      const buttonTop = rect.top + window.pageYOffset - 50;
      const buttonLeft = rect.left + window.pageXOffset ;
  
      setButtonPosition({ top: buttonTop, left: buttonLeft });
      setShowTwitterButton(true);
      setSelectedText(selectedText);
    } else {
      setShowTwitterButton(false);
    }
  };
  

  return (
    <div onMouseUp={handleTextSelection}>
      <ul>
        {data.map((quote) => (
          <li key={quote.id}>
            <p> {quote.quote}</p>
            <span>:~ {quote.philosopher}</span>
            {showTwitterButton && (
        <div
          style={{
            position: "absolute",
            top: buttonPosition.top,
            left: buttonPosition.left,
          
          }}
        >
          <TwitterButton text={selectedText} />
        </div>
      )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
