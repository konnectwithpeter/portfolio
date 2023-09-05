import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useEffect, useState } from "react";
import reactLogo from "../assets/logo.png";

const TitleBar = () => {
  let hoverState = { hovered: false, id: null, text: "" };
  const [hovered, setHovered] = useState(hoverState);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    scrollToElement();
  }, []);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Grid
      container
      sx={
        !matches
          ? {
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5rem",
            }
          : {}
      }
    >
      <Grid
        item
        xs={matches ? 6 : 4.5}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {hovered.id === "home" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
            onClick={() => scrollToElement("home")}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //01. {"<Home/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "home" })}
          >
            //01. {"<Home/>"}
          </Typography>
        )}
        {hovered.id === "portfolio" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
            onClick={() => scrollToElement("portfolio")}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //02. {"<Portfolio/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "portfolio" })}
          >
            //02. {"<Portfolio/>"}
          </Typography>
        )}
      </Grid>
      {!matches && (
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img src={reactLogo} style={{ width: "50px", height: "50px" }} />
          </Box>
        </Grid>
      )}

      <Grid
        item
        xs={matches ? 6 : 4.5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {hovered.id === "press" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
            onClick={() => scrollToElement("about")}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //03. {"<About/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "press" })}
          >
            //03. {"<About/>"}
          </Typography>
        )}
        {hovered.id === "contact" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
            onClick={() => scrollToElement("contact")}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //04. {"<Contact/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "contact" })}
          >
            //04. {"<Contact/>"}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TitleBar;
