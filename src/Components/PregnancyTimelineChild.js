import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import week_4_fruit from "../assets/raw/week_4_fruit.png";
import week_4_baby from "../assets/raw/week_4_baby.png";
import week_5_fruit from "../assets/raw/week_5_fruit.png";
import week_5_baby from "../assets/raw/week_5_baby.png";
import week_6_fruit from "../assets/raw/week_6_fruit.png";
import week_6_baby from "../assets/raw/week_6_baby.png";
import week_7_fruit from "../assets/raw/week_7_fruit.png";
import week_7_baby from "../assets/raw/week_7_baby.png";
import week_8_fruit from "../assets/raw/week_8_fruit.png";
import week_8_baby from "../assets/raw/week_8_baby.png";
import week_9_fruit from "../assets/raw/week_9_fruit.png";
import week_9_baby from "../assets/raw/week_9_baby.png";
import week_10_fruit from "../assets/raw/week_10_fruit.png";
import week_10_baby from "../assets/raw/week_10_baby.png";
import week_11_fruit from "../assets/raw/week_11_fruit.png";
import week_11_baby from "../assets/raw/week_11_baby.png";
import week_12_fruit from "../assets/raw/week_12_fruit.png";
import week_12_baby from "../assets/raw/week_12_baby.png";
import week_13_fruit from "../assets/raw/week_13_fruit.png";
import week_13_baby from "../assets/raw/week_13_baby.png";
import week_14_fruit from "../assets/raw/week_14_fruit.png";
import week_14_baby from "../assets/raw/week_14_baby.png";
import week_15_fruit from "../assets/raw/week_15_fruit.png";
import week_15_baby from "../assets/raw/week_15_baby.png";
import week_16_fruit from "../assets/raw/week_16_fruit.png";
import week_16_baby from "../assets/raw/week_16_baby.png";
import week_17_fruit from "../assets/raw/week_17_fruit.png";
import week_17_baby from "../assets/raw/week_17_baby.png";
import week_18_fruit from "../assets/raw/week_18_fruit.png";
import week_18_baby from "../assets/raw/week_18_baby.png";
import week_19_fruit from "../assets/raw/week_19_fruit.png";
import week_19_baby from "../assets/raw/week_19_baby.png";
import week_20_fruit from "../assets/raw/week_20_fruit.png";
import week_20_baby from "../assets/raw/week_20_baby.png";
import week_21_fruit from "../assets/raw/week_21_fruit.png";
import week_21_baby from "../assets/raw/week_21_baby.png";
import week_22_fruit from "../assets/raw/week_22_fruit.png";
import week_22_baby from "../assets/raw/week_22_baby.png";
import week_23_fruit from "../assets/raw/week_23_fruit.png";
import week_23_baby from "../assets/raw/week_23_baby.png";
import week_24_fruit from "../assets/raw/week_24_fruit.png";
import week_24_baby from "../assets/raw/week_24_baby.png";

import timelineData_french from "../Utils/timelineData_french.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PregnancyTimelineChild(props) {
  const image_babies = [
    week_4_baby,
    week_5_baby,
    week_6_baby,
    week_7_baby,
    week_8_baby,
    week_9_baby,
    week_10_baby,
    week_11_baby,
    week_12_baby,
    week_13_baby,
    week_14_baby,
    week_15_baby,
    week_16_baby,
    week_17_baby,
    week_18_baby,
    week_19_baby,
    week_20_baby,
    week_21_baby,
    week_22_baby,
    week_23_baby,
    week_24_baby,
  ];

  const image_fruits = [
    week_4_fruit,
    week_5_fruit,
    week_6_fruit,
    week_7_fruit,
    week_8_fruit,
    week_9_fruit,
    week_10_fruit,
    week_11_fruit,
    week_12_fruit,
    week_13_fruit,
    week_14_fruit,
    week_15_fruit,
    week_16_fruit,
    week_17_fruit,
    week_18_fruit,
    week_19_fruit,
    week_20_fruit,
    week_21_fruit,
    week_22_fruit,
    week_23_fruit,
    week_24_fruit,
  ];

  const [timeline, setTimeLine] = useState(
    timelineData_french["week" + props.week["i"]]
  );

  const week = true;
  const [expanded, setExpanded] = useState(true);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      {
        <Accordion
          style={{ backgroundColor: "#78d6a4", color: "white" }}
          expanded={expanded === week}
          onChange={handleAccordionChange(week)}
          key={week}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <img
              src={image_babies[props.week["i"] - 4]} //{timeline.veg}
              alt="Baby"
              style={{
                height: expanded === week ? "110px" : "52px",
                marginRight: "10px",
              }}
            />{" "}
            {/* Display the image in the accordion title */}
            <div style={{ alignSelf: "center", textAlign: "center", flex: 1 }}>
              <Typography style={{ fontSize: "15px" }}>
                Your Pregnancy Week
              </Typography>
              <Typography style={{ fontSize: "18px", fontWeight: "bold" }}>
                {timeline.currentWeek} Weeks & 3 Days
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails style={{ margin: "0px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{ alignSelf: "center", textAlign: "center", flex: 1 }}
              >
                <span style={{ fontSize: "14px" }}>Ideal Height</span>
                <br></br>
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {timeline.babyHeight}
                </span>
              </div>

              <span
                style={{ alignSelf: "center", textAlign: "center", flex: 1 }}
              >
                |<br></br>|
              </span>
              <div
                style={{ alignSelf: "center", textAlign: "center", flex: 1 }}
              >
                <span style={{ fontSize: "14px" }}>Ideal Weight</span>
                <br></br>
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {timeline.babyWeight}
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <img
                src={image_fruits[props.week["i"] - 4]} //{timeline.veg}
                alt="Fruit"
                style={{
                  height: "68px",
                  alignSelf: "center",
                }}
              />{" "}
              <Typography
                variant="body1"
                gutterBottom
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  alignSelf: "center",
                  flex: 1,
                  margin: "10px",
                }}
              >
                {timeline.motherText}
              </Typography>
            </div>

            {timeline.scan && (
              <div
                style={{
                  marginTop: "30px",
                  marginLeft: "-16px",
                  backgroundColor: "white",
                  color: "black",
                  marginRight: "-16px",
                  padding: "10px",
                }}
              >
                <span style={{ fontSize: "19px", fontWeight: "bold" }}>
                  Your Ultrasound in Week {timeline.currentWeek}
                </span>

                <Typography
                  variant="body1"
                  gutterBottom
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    margin: "10px",
                  }}
                  dangerouslySetInnerHTML={{ __html: timeline.scan }}
                />
              </div>
            )}

            {timeline.babySummary && (
              <div
                style={{
                  marginTop: "2px",
                  marginLeft: "-16px",
                  backgroundColor: "white",
                  color: "black",
                  marginRight: "-16px",
                  padding: "10px",
                }}
              >
                <span style={{ fontSize: "19px", fontWeight: "bold" }}>
                  Your Baby in Week {timeline.currentWeek}
                </span>

                <Typography
                  variant="body1"
                  gutterBottom
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    margin: "10px",
                  }}
                  dangerouslySetInnerHTML={{ __html: timeline.babySummary }}
                />
              </div>
            )}

            {timeline.motherSymptopms && (
              <div
                style={{
                  marginTop: "2px",
                  marginLeft: "-16px",
                  backgroundColor: "white",
                  color: "black",
                  marginRight: "-16px",
                  padding: "10px",
                }}
              >
                <span style={{ fontSize: "19px", fontWeight: "bold" }}>
                  Symptoms you might feel in Week {timeline.currentWeek}
                </span>

                <Typography
                  variant="body1"
                  gutterBottom
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    margin: "10px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: timeline.motherSymptopms,
                  }}
                />
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      }
    </React.Fragment>
  );
}
