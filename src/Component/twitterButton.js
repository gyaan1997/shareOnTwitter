import React from 'react'

function TwitterButton({text}) {
    const handleTwitterShare = () => {
   
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(tweetUrl, '_blank');
      };
      
      return (
        <button  onClick={handleTwitterShare}
        style={{width:"18vh",height:"4vh",backgroundColor:"#7c73e6",color:"black",fontSize:"2vh", borderRadius:"1vh",cursor:"pointer",border:"transparent"}}>
          Share on Twitter
        </button>

      );
}

export default TwitterButton

