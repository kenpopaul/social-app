import React from "react";
import Tweet from "../components/Tweet";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <Tweet username="JohnDoe" content="This is my first tweet!" />
      <Tweet username="JaneSmith" content="Excited to join Twitter!" />
    </div>
  );
};

export default Home;
