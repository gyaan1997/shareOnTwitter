import React, { useEffect, useState } from "react";
import Data from '../data.json';
import './home.css';
function Home() {
  const [data, setData] = useState([]);
const [selectedtext,setselectedText]=useState("");
  useEffect(() => {
    const fetchData = () => {
      const quotesData = Data.quotes;
    //   console.log(quotesData);
      setData(quotesData);
    };

    fetchData();
  }, []);
  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString();
    setselectedText(selectedText)
    console.log(selectedText)
  };
  
  return (
    <div onMouseUp={handleTextSelection}>
    
      <ul >
        {data.map((quote) => (
          <li key={quote.id}>
        <p> {quote.quote}</p>
        <span>:~ {quote.philosopher}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
