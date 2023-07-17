import React from "react";

interface TweetDisplayProps {
  tweetText: string;
}

const TweetDisplay: React.FC<TweetDisplayProps> = ({ tweetText }) => {
  return (
    <div className="tweet-display">
      <h3>Your Tweet:</h3>
      <p>{tweetText}</p>
    </div>
  );
};

export default TweetDisplay;
