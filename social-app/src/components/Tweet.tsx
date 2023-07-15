import React from "react";

interface TweetProps {
  username: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content }) => {
  return (
    <div className="tweet">
      <h4>{username}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Tweet;
