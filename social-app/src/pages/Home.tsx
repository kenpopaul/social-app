import React from "react";
import Tweet from "../components/Tweet";
import TweetInput from "../components/TweetInput";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div>
        <h2>Home</h2>
        <TweetInput />
        {/* Existing tweet list code */}
      </div>
      <Tweet username="JohnDoe" content="This is my first tweet!" />
      <Tweet username="JaneSmith" content="Excited to join Twitter!" />
    </div>
  );
};

export default Home;
