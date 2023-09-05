import {
  Box,
  ImageListItem,
  ImageListItemBar,
  Link,
  Paper,
  Typography,
  useMediaQuery
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blueBadge from "../assets/badges/blue.svg";
import hashBadge from "../assets/badges/hashcracker.svg";
import iceBadge from "../assets/badges/ice.svg";
import metasploitBadge from "../assets/badges/metasploit.svg";
import ohsintBadge from "../assets/badges/ohsint.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 600, min: 15 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
};

let useStyles = makeStyles({
  badges: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    obectFit: "cover",
  },
  container: {
    backgroundColor: "transparent !important",
    padding: "1rem !important",
    marginTop: "3rem !important",
    display: "flex !important",
    flexDirection: "column !important",
    gap: "3rem !important",
  },
});

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  let classes = useStyles();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "3rem",
        backgroundColor: "#040904",
        paddingTop: "2rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
          {"<h2>"}
        </Typography>

        <Typography variant={matches ? "h3" : "h2"}>
          About
          <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h2>"}</sub>
        </Typography>
      </Box>
      <Paper
        elevation={8}
        className={classes.container}
        sx={{ marginTop: matches ? "0px !important" : "3rem" }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
            {"<h3>"}
          </Typography>

          <Typography variant="h4" sx={{ color: "#019e36", textAlign: "left" }}>
            Website Developer
            <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h3>"}</sub>
          </Typography>
        </Box>
        <Typography sx={{ color: "white", }}>
          Creative and dedicated web developer with a passion for crafting
          visually stunning and user-friendly websites. Proficient in HTML, CSS,
          and JavaScript, with expertise in ReactJs and python/Django framework.
          Skilled in translating design mockups into interactive and functional
          websites.
        </Typography>
      </Paper>
      <Paper elevation={8} className={classes.container}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
            {"<h3>"}
          </Typography>

          <Typography variant="h4" sx={{ color: "#019e36", textAlign: "left" }}>
            Cyber Security
            <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h3>"}</sub>
          </Typography>
        </Box>
        <Typography sx={{ color: "white", }}>
          Comprehensive understanding of cybersecurity frameworks, tools, and
          best practices. Proven ability to identify vulnerabilities and
          recommend solutions to enhance digital security. Proficient in
          conducting risk assessments and implementing robust security measures.
          Strong analytical skills, enabling me to dissect complex security
          challenges and provide innovative solutions. Ranked top 4% in{" "}
          <Link
            component="a"
            target="_blank"
            rel="noopener"
            href="http://www.tryhackme.com"
          >
            tryhackme
          </Link>{" "}
          platform and below are some badges I have acquired.
        </Typography>

        <Box
          sx={{
            maxWidth: matches ? "90vw !important" : "80vw !important",
          }}
        >
          <Carousel
            responsive={responsive}
            autoPlay={matches}
            infinite={true}
            removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
            showDots={false}
            partialVisible={false}
            centerMode={!matches}
          >
            <ImageListItem sx={{ color: "#019e36", textAlign: "left" }}>
              <img
                src={metasploitBadge}
                style={{
                  border: "",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  obectFit: "cover",
                }}
              />
              <ImageListItemBar title="metasploit" position="below" />
            </ImageListItem>
            <ImageListItem sx={{ color: "#019e36", textAlign: "left" }}>
              <img
                src={blueBadge}
                style={{
                  border: "",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  obectFit: "cover",
                }}
              />
              <ImageListItemBar title="blue" position="below" />
            </ImageListItem>
            <ImageListItem sx={{ color: "#019e36", textAlign: "left" }}>
              <img
                src={iceBadge}
                style={{
                  border: "",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  obectFit: "cover",
                }}
              />
              <ImageListItemBar title="ice" position="below" />
            </ImageListItem>
            <ImageListItem sx={{ color: "#019e36", textAlign: "left" }}>
              <img
                src={ohsintBadge}
                style={{
                  border: "",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  obectFit: "cover",
                }}
              />

              <ImageListItemBar title="ohsint" position="below" />
            </ImageListItem>
            <ImageListItem sx={{ color: "#019e36", textAlign: "left" }}>
              <img
                src={hashBadge}
                style={{
                  border: "",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  obectFit: "cover",
                }}
              />
              <ImageListItemBar title="hashCracker" position="below" />
            </ImageListItem>
          </Carousel>
        </Box>
      </Paper>
    </Box>
  );
};

export default About;
