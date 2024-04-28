import React, { useState, useRef } from "react";

import input_video from "../assets/raw/input_video.mp4";
import q1_en from "../assets/raw/q1_en.mp4";
import q2_en from "../assets/raw/q2_en.mp4";
import q3_en from "../assets/raw/q3_en.mp4";
import q4_en from "../assets/raw/q4_en.mp4";
import q5_en from "../assets/raw/q5_en.mp4";
import q1_fr from "../assets/raw/q1_fr.mp4";
import q2_fr from "../assets/raw/q2_fr.mp4";
import q3_fr from "../assets/raw/q3_fr.mp4";
import q4_fr from "../assets/raw/q4_fr.mp4";
import q5_fr from "../assets/raw/q5_fr.mp4";
import q1_sp from "../assets/raw/q1_sp.mp4";
import q2_sp from "../assets/raw/q2_sp.mp4";
import q3_sp from "../assets/raw/q3_sp.mp4";
import q4_sp from "../assets/raw/q4_sp.mp4";
import q5_sp from "../assets/raw/q5_sp.mp4";
import poster from "../assets/raw/poster.png";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const outputVideos = [q1_en, q2_en, q3_en, q4_en, q5_en];
  const outputVideos_fr = [q1_fr, q2_fr, q3_fr, q4_fr, q5_fr];
  const outputVideos_sp = [q1_sp, q2_sp, q3_sp, q4_sp, q5_sp];
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [playingOutputVideo, setPlayingOutputVideo] = useState(false);

  const languageOptions = [
    { label: "English", value: "english" },
    { label: "French", value: "french" },
    { label: "Spanish", value: "spanish" },
  ];

  const languageQuestions = {
    english: [
      "What should I eat during pregnancy?",
      "Is it safe to exercise while pregnant?",
      "How can I manage morning sickness and other pregnancy symptoms?",
      "What are the signs of labor, and when should I go to the hospital?",
      "Are there any foods or activities I should avoid during pregnancy?",
    ],
    french: [
      "Que dois-je manger pendant la grossesse ?",
      "Est-il sécuritaire de faire de l’exercice pendant la grossesse ?",
      "Comment puis-je gérer les nausées matinales et autres symptômes de grossesse ?",
      "Quels sont les signes du travail et quand dois-je aller à l'hôpital ?",
      "Y a-t-il des aliments ou des activités que je devrais éviter pendant la grossesse ?",
    ],
    spanish: [
      "¿Qué debo comer durante el embarazo?",
      "¿Es seguro hacer ejercicio durante el embarazo?",
      "¿Cómo puedo controlar las náuseas matutinas y otros síntomas del embarazo?",
      "¿Cuáles son los signos del parto y cuándo debo ir al hospital?",
      "¿Hay algún alimento o actividad que deba evitar durante el embarazo?",
    ],
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleQuestionClick = (index) => {
    setPlayingOutputVideo(true);
    videoRef.current.muted = false;
    if (/english/i.test(selectedLanguage)) {
      videoRef.current.src = outputVideos[index];
    } else if (/french/i.test(selectedLanguage)) {
      videoRef.current.src = outputVideos_fr[index];
    } else {
      videoRef.current.src = outputVideos_sp[index];
    }
    // Play the video after user interaction
    videoRef.current.play().catch((error) => {
      // Handle any potential play() errors here
      console.error("Video play error:", error);
    });
  };

  const handleVideoEnd = () => {
    setPlayingOutputVideo(false);
    videoRef.current.src = input_video;

    // Play the input video after user interaction
    videoRef.current.play().catch((error) => {
      // Handle any potential play() errors here
      console.error("Video play error:", error);
    });
  };

  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <div
        className="question-card"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <label htmlFor="languageSelect" style={{ flex: "1" }}>
          NutureNest AI{" "}
        </label>
        <select
          id="languageSelect"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div style={{ textAlign: "-webkit-center" }}>
        <video
          ref={videoRef}
          src={input_video}
          controls={false}
          style={{ width: "80%", maxWidth: "800px" }}
          poster={poster}
          autoPlay
          muted="muted"
          onEnded={handleVideoEnd}
        />
      </div>

      <div className="question-grid">
        {languageQuestions[selectedLanguage].map((question, index) => (
          <div
            className="question-card"
            onClick={() => handleQuestionClick(index)}
            key={index}
          >
            <div>{question}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
