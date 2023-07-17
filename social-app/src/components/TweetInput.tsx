import React, { useState } from "react";

const TweetInput = () => {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(event.target.value);
  };

  const handleTweet = () => {
    if (tweetText.trim() !== "") {
      setTweets([tweetText, ...tweets]);
      setTweetText("");
    }
  };

  return (
    <div className="tweet-input">
      <textarea
        className="tweet-textarea"
        placeholder="What's happening?"
        value={tweetText}
        onChange={handleInputChange}
      />
      <button className="tweet-button" onClick={handleTweet}>
        Tweet
      </button>
      {tweets.map((tweet, index) => (
        <div className="tweet" key={index}>
          <div className="tweet-header">
            <span className="tweet-username">YourUsername</span>
            <span className="tweet-timestamp">Just now</span>
          </div>
          <div className="tweet-content">{tweet}</div>
        </div>
      ))}
    </div>
  );
};

export default TweetInput;
