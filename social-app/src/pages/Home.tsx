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
      <Tweet username="Shane Tall" content="Project One complete!" />
      <Tweet username="Jane Smith" content="Excited to Start this job!" />
    </div>
  );
};

export default Home;
