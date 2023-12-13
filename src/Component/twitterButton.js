import React from 'react'

function TwitterButton({text}) {
    const handleTwitterShare = () => {
        // console.log(text)
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(tweetUrl, '_blank');
      };
      
      return (
        <button style={{width:"20vh",height:"5vh",backgroundColor:"black",color:"white",fontSize:"2vh", borderRadius:"2vh"}} onClick={handleTwitterShare}>
          Share on Twitter
        </button>
      );
}

export default TwitterButton