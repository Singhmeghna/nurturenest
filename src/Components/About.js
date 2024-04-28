import * as React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
export default function About() {
  return (
    <React.Fragment>
      <div style={{ fontSize: "1.2rem", margin: "20px 20px" }}>
        <Typography variant="h6" gutterBottom>
          Developed by
        </Typography>
        <div>
          Team 14 Winnovate Systems &nbsp;&nbsp;&nbsp;{" "}
          <GitHubIcon style={{ verticalAlign: "top" }} />
          &nbsp;
          <LinkedInIcon style={{ verticalAlign: "top" }} />
          &nbsp;
          <LanguageIcon style={{ verticalAlign: "top" }} />
        </div>
      </div>
    </React.Fragment>
  );
}
