import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import axios from "axios";
import sos from "../assets/raw/sos.png";
import Timer from "./Timer";

export default function PregnancyTimelineSOS() {
  const i = [
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24,
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    // Define a separate function to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get("http://aitalk.in:5000/json_data"); // Replace with your actual Flask endpoint URL
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();

    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      setTimeOfDay("Good Morning, Mommy!");
    } else if (currentTime >= 12 && currentTime < 18) {
      setTimeOfDay("Good Afternoon, Mommy!");
    } else {
      setTimeOfDay("Good Evening, Mommy!");
    }
  }, []);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <React.Fragment>
      <div>
        <Typography variant="h6" gutterBottom style={{ margin: "10px" }}>
          {timeOfDay}
        </Typography>
      </div>

      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {i.map((item, index) => (
          <div key={item}>
            {/* Card View */}
            <div style={{ textAlign: "center" }}>
              <Card
                variant="outlined"
                style={{
                  margin: "10px",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "0.3s",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ fontSize: "1.2rem", margin: "20px 20px" }}
                  >
                    Press and Hold to send SOS alert
                  </Typography>

                  <section class="video-area">
                    <div class="video-play-btn ripple">
                      <a href="#" class="play-btn">
                        <img
                          component="img"
                          alt="Step Image"
                          style={{
                            margin: "8px",
                            alignSelf: "center",
                            width: "100px",
                            margin: "-20px",
                          }}
                          src={sos}
                        />
                      </a>
                    </div>
                  </section>

                  <Typography
                    variant="h5"
                    component="div"
                    style={{ fontSize: "1.2rem", margin: "20px 20px" }}
                  >
                    You have been inactive for long time and it seems abnormal.
                    If you don't respond within 60 Seconds then an automatic SOS
                    alert will be triggered.{" "}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </SwipeableViews>
    </React.Fragment>
  );
}
