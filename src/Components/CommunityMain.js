import * as React from "react";
import community1 from "../assets/raw/community1.png";
export default function About() {
  return (
    <React.Fragment>
      <div style={{ fontSize: "1.2rem", margin: "20px 20px" }}>
        <img
          src={community1}
          alt="community"
          onClick={() => {
            window.location.replace("https://aitalk.in/thread");
          }}
        />
      </div>
    </React.Fragment>
  );
}
