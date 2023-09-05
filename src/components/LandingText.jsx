import {
  Button,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/styles";
import React, { useState } from "react";
import blob from "../assets/blobanimation.svg";
import "./App.css";
import Cvitae from "./Cvitae";

const LandingText = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let props = { open, handleClose };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "100vw",
          marginTop: matches ? "3rem" : 0,
          marginBottom: matches ? "3rem" : 0,
        }}
      >
        <Grid
          item
          lg={7}
          xs={12}
          sm={12}
          md={7}
          sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        >
          <Typography variant="h6" sx={{ color: "#019e36" }}>
            <span style={{ color: "#a3a2a4" }}>{"<p>"}</span>
            <span>This is</span>
            <span style={{ color: "#a3a2a4" }}>{"</p>"}</span>
          </Typography>
          <Typography variant={matches ? "h3" : "h1"} sx={{ color: "#185b33" }}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "2rem",
              }}
            >
              <span style={{ fontSize: "16px", color: "#a3a2a4" }}>
                {"<h1>"}
              </span>
              <span style={{ marginLeft: "2rem", fontStyle: "bold" }}>
                Peter
              </span>
              <span style={{ marginLeft: "2rem", fontWeight: "bold" }}>
                Njoroge
              </span>
              <span style={{ color: "#a3a2a4", fontSize: "16px" }}>
                {"</h1>"}
              </span>
            </span>
          </Typography>
          <Typography variant={matches?"h6":"h6"} style={{ color: "#a3a2a4" }}>
            {"<h2>"}
            <span style={{ color: "#019e36",textAlign:"justify" }}>
              Web App Developer & Cyber Security enthusiast
            </span>
            {"</h2>"}
          </Typography>
        </Grid>
        <Grid
          item
          lg={5}
          xs={12}
          sm={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={blob}
            alt="blob"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              maxWidth: "50%",
              maxHeight: "50%",
              position: "absolute",
              zIndex: 1,
              opacity: 0.3,
            }}
          />
          <div style={{ zIndex: 10 }}>
            {/* <img src={publicProfile} alt="TryHackMe" /> */}

            <Button
              variant="outlined"
              onClick={handleOpen}
              sx={{
                borderRadius: "50%",
                padding: "2rem",
                textTransform: "none !important",
              }}
            >
              <div style={{ paddingTop: "1.2rem", paddingBottom: "1.2rem" }}>
                <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                  {"<>"}
                </Typography>
                <Typography variant="h4">View CV</Typography>
                <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                  {"</>"}
                </Typography>
              </div>
            </Button>
          </div>
        </Grid>
      </Grid>
      <Cvitae {...props} />
    </>
  );
};

export default LandingText;
