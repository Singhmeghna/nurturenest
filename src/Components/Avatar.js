import React from "react";
import VideoPlayer from "./VideoPlayer";
import input_video from "../assets/raw/input_video.mp4";

function Avatar() {
  return (
    <div className="App">
      <VideoPlayer
        videoSource={input_video} // Replace with your video source
        width={640}
        height={360}
      />
    </div>
  );
}

export default Avatar;
