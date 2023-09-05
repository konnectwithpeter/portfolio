import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery
} from "@mui/material";

import { makeStyles, useTheme } from "@mui/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import clinic1 from "../assets/demos/clinic1.png";

import wix from "../assets/demos/wix.png";

import retail1 from "../assets/demos/retail1.png";

import commerce from "../assets/demos/commerce.png";

import { useState } from "react";

import Gallery from "./Gallery";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 600, min: 15 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
};

const responsiveImage = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 600, min: 15 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
};

let useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    borderRadius: "0px",
    border: "1px solid #fff",
    padding: "1rem",
    display: "flex",
    flexDirection: "Column",
    gap: "1.5 rem",
  },
  buttons: {
    position: "absolute",
    bottom: 0,
    right: "5%",
    display: "flex",
    gap: ".5rem",
  },
  projectName: {
    fontSize: "32px !important",
    color: "#185b33",
    fontWeight: "bold",
    textDecoration: "underline",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  imageIcon: {
    border: "2px solid #019e36",
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    obectFit: "fill",
  },
}));

const Portfolio = () => {
  let classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className={classes.buttons} style={{}}>
        <IconButton
          aria-label="previous"
          size="small"
          disabled={currentSlide === 0 ? true : false}
          onClick={() => previous()}
        >
          <ArrowBackRounded font="inherit" />
        </IconButton>
        <IconButton size="small" onClick={() => next()} aria-label="next">
          <ArrowForwardRounded font="inherit" />
        </IconButton>
      </div>
    );
  };

  let [gallery, setGallery] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setGallery("");
  };

  let props = { open, handleClose, gallery };
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "3rem",
          marginTop: matches ? "3rem" : 0,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
            {"<h2>"}
          </Typography>

          <Typography variant={matches ? "h3" : "h2"}>
            Portfolio
            <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h2>"}</sub>
          </Typography>
        </Box>

        <Carousel
          component={Grid}
          container
          responsive={responsive}
          autoPlay={false}
          infinite={true}
          removeArrowOnDeviceType={["mobile", "tablet"]}
          keyBoardControl={true}
          showDots={true}
          partialVisible={false}
          customButtonGroup={matches && <ButtonGroup />}
        >
          <Grid item md={12}>
            <Box elevation={8}>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={clinic1} className={classes.imageIcon} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component={Link}
                    className={classes.projectName}
                    onClick={() => {
                      setGallery("clinic");
                      setOpen(true);
                    }}
                  >
                    Clinic/Pharmacy POS
                  </Typography>
                  <Typography>
                    Oversees the day-to-day operations and administration of a
                    healthcare facility, ensuring its smooth and efficient
                    functioning. Responsibilities typically include maintaining
                    medical records, overseeing billing , and implementing
                    quality control measures to optimize patient care.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item md={12}>
            <Box elevation={8}>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={retail1} className={classes.imageIcon} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component={Link}
                    className={classes.projectName}
                    onClick={() => {
                      setGallery("retail");
                      setOpen(true);
                    }}
                  >
                    Gold Retail POS
                  </Typography>
                  <Typography>
                    A specialized system designed for a business in the buying
                    and selling of gold and precious metals. Streamlines the
                    entire transaction process, allowing for efficient inventory
                    management, accurate pricing based on real-time market rates
                    and secure customer transactions.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item md={12}>
            <Box elevation={8}>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={commerce} className={classes.imageIcon} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography component={Link} className={classes.projectName}>
                    E-Commerce App
                  </Typography>
                  <Typography>
                    Digital platform that enables users to conveniently browse,
                    search for, and purchase a wide range of products or
                    services online. OfferS a seamless shopping experience,
                    allowing customers to explore products, read reviews,
                    compare prices, and make purchases from the comfort of their
                    mobile devices or computers.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item md={12}>
            <Box elevation={8}>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={wix} className={classes.imageIcon} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component={Link}
                    className={classes.projectName}
                    onClick={() => {
                      setGallery("wix");
                      setOpen(true);
                    }}
                  >
                    Blog Website
                  </Typography>
                  <Typography>
                    A visually appealing and user-friendly online platform
                    created using Wix's website builder tools, designed to
                    showcase an individual's or a business's creative work,
                    projects, or services. It typically features a customizable
                    layout and stunning templates.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Carousel>
      </Box>

      <Gallery {...props} />
    </>
  );
};

export default Portfolio;
