import { Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import LandingText from "./components/LandingText";
import Portfolio from "./components/Portfolio";
import TitleBar from "./components/TitleBar";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimate();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <Paper
      elevation={4}
      sx={
        matches
          ? {
              margin: 0,
              padding: "1rem",
              backgroundColor: "#020404",
              color: "#f5f5f5",
            }
          : {
              margin: 0,
              padding: "5rem",
              backgroundColor: "#020404",
              color: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }
      }
    >
      <TitleBar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        id="home"
      >
        <LandingText />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        id="about"
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        id="portfolio"
      >
        <Portfolio />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        id="contact"
      >
        <Contact />
      </motion.div>
    </Paper>
  );
}

export default App;
