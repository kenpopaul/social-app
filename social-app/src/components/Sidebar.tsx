import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSearch} />
          <span>Explore</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBell} />
          <span>Notifications</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Messages</span>
        </li>
        <li>
          <button className="tweet-button">
            <span>Tweet</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
