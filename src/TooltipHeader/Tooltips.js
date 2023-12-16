import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import "./Tooltips.css"; // Import the CSS file

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://www.instagram.com/burnnoticemusic"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="instagram-icon"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
      </a>

      <a
        href="https://www.facebook.com/burnnoticeokc"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="facebook-icon"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
      </a>

      <a
        href="https://open.spotify.com/artist/23JyytsWwDMDzcONPWH3oH?si=6zddIlg7Rb2tEo5qxwcYuA"
        target="_blank"
        rel="noopener noreferrer"
        title="Spotify"
      >
        <FontAwesomeIcon icon={faSpotify} size="2x" color="green" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
