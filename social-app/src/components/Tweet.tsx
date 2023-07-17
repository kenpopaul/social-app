import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface TweetProps {
  username: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content }) => {
  const [liked, setLiked] = React.useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="tweet">
      <h4>{username}</h4>
      <p>{content}</p>
      <div
        className={`heart-icon ${liked ? "liked" : ""}`}
        onClick={handleLike}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

export default Tweet;
