import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import PregnancyTimelineChild from "./PregnancyTimelineChild";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import axios from "axios";

export default function PregnancyTimelineMain() {
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
            <PregnancyTimelineChild week={{ i: item }} />
            {/* Card View */}
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
                  style={{ fontWeight: "bold" }}
                >
                  Steps
                </Typography>
                <Box display="flex" flexDirection="row">
                  <img
                    component="img"
                    alt="Step Image"
                    style={{
                      margin: "8px",
                      width: "64px",
                      height: "64px",
                      alignSelf: "center",
                    }}
                    src="https://cdn-icons-png.flaticon.com/512/196/196472.png"
                  />
                  <div style={{ alignSelf: "center" }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ fontSize: "1rem" }}
                    >
                      You've walked for just&nbsp;
                      <span style={{ fontWeight: "bold" }}>
                        3 minutes (50 steps)
                      </span>{" "}
                      today; it's essential to engage in brisk walking during
                      the third trimester as it can promote a smoother delivery.
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>

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
                  style={{ fontWeight: "bold" }}
                >
                  Stairs
                </Typography>
                <Box display="flex" flexDirection="row">
                  <img
                    component="img"
                    alt="Stairs Image"
                    width="100px"
                    style={{
                      margin: "8px",
                      width: "64px",
                      height: "64px",
                      alignSelf: "center",
                    }}
                    src="https://www.iconbunny.com/icons/media/catalog/product/2/1/2128.9-climbing-stairs-icon-iconbunny.jpg"
                    height="100"
                  />
                  <div style={{ alignSelf: "center" }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ fontSize: "1rem" }}
                    >
                      You've &nbsp;
                      <span style={{ fontWeight: "bold" }}>
                        ascended two stairs
                      </span>{" "}
                      today; it's crucial to exercise caution and have someone
                      with you when climbing stairs.
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>

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
                  style={{ fontWeight: "bold" }}
                >
                  Blood pressure
                </Typography>
                <Box display="flex" flexDirection="row">
                  <img
                    component="img"
                    alt="Blood pressure Image"
                    src="https://png.pngtree.com/png-vector/20220928/ourmid/pngtree-blood-pressure-icon-flat-design-tonometer-hypertension-diagnosis-vector-png-image_20006414.png"
                    height="100"
                    width="100px"
                    style={{
                      margin: "8px",
                      width: "64px",
                      height: "64px",
                      alignSelf: "center",
                    }}
                  />
                  <div style={{ alignSelf: "center" }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ fontSize: "1rem" }}
                    >
                      Your BP is under control!
                      <span style={{ fontWeight: "bold" }}> 120/80 mm</span> Hg.
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>

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
                  style={{ fontWeight: "bold" }}
                >
                  Heart Rate
                </Typography>
                <Box display="flex" flexDirection="row">
                  <img
                    component="img"
                    alt="Heart Rate Image"
                    src="https://static.vecteezy.com/system/resources/previews/014/322/523/original/heart-rate-icons-design-in-blue-circle-png.png"
                    height="100"
                    width="100px"
                    style={{
                      margin: "8px",
                      width: "64px",
                      height: "64px",
                      alignSelf: "center",
                    }}
                  />
                  <div style={{ alignSelf: "center" }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ fontSize: "1rem" }}
                    >
                      Over the{" "}
                      <span style={{ fontWeight: "bold" }}> last 4 hours</span>,
                      your heart has beaten at a rate exceeding{" "}
                      <span style={{ fontWeight: "bold" }}>
                        120 beats per minute
                      </span>{" "}
                      twice. Embrace relaxation with stress-free moments through
                      soothing yoga and meditation practices to nurture both you
                      and your little one.
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </div>
        ))}
      </SwipeableViews>
    </React.Fragment>
  );
}
