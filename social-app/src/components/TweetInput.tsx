import React from "react";

const TweetInput = () => {
  return (
    <div className="tweet-input">
      <textarea className="tweet-textarea" placeholder="What's happening?" />
      <div className="button-container">
        <button className="tweet-button">Tweet</button>
      </div>
    </div>
  );
};

export default TweetInput;
