import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TweetInput = () => {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState<
    { text: string; timestamp: string; liked: boolean }[]
  >([]);
  const [username, setUsername] = useState("YourUsername");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetText(event.target.value);
  };

  const getFormattedTimestamp = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  };

  const handleTweet = () => {
    if (tweetText.trim() !== "") {
      const newTweet = {
        text: tweetText,
        timestamp: getFormattedTimestamp(),
        liked: false,
      };
      setTweets([newTweet, ...tweets]);
      setTweetText("");
    }
  };

  const handleLike = (index: number) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].liked = !updatedTweets[index].liked;
    setTweets(updatedTweets);
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
            <span className="tweet-username">{username}</span>
            <span className="tweet-timestamp">{tweet.timestamp}</span>
          </div>
          <div className="tweet-content">{tweet.text}</div>
          <div
            className={`heart-icon ${tweet.liked ? "liked" : ""}`}
            onClick={() => handleLike(index)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TweetInput;
