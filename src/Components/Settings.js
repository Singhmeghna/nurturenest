import * as React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
export default function Settings() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Developed by
      </Typography>
      <div>
        Saravanan &nbsp;&nbsp;&nbsp;{" "}
        <GitHubIcon style={{ verticalAlign: "top" }} />
        &nbsp;
        <LinkedInIcon style={{ verticalAlign: "top" }} />
        &nbsp;
        <LanguageIcon style={{ verticalAlign: "top" }} />
      </div>
    </React.Fragment>
  );
}
