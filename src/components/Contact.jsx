import { SendRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Link,
  Modal,
  TextField,
  Typography,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5rem",
          marginTop: matches ? "3rem" : 0,
          padding: matches ? "1rem" : 0,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
            {"<h2>"}
          </Typography>

          <Typography variant={matches ? "h3" : "h2"}>
            Connect
            <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h2>"}</sub>
          </Typography>
        </Box>
        <Box
          sx={
            matches
              ? {
                  width: "100%",
                  // border: "1px solid red",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "3rem",
                }
              : {
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }
          }
        >
          <Box
            sx={
              matches
                ? {
                    display: "flex",
                    justifyContent: "space-between",
                  }
                : { width: "50%" }
            }
          >
            <Box>
              <Box
                sx={
                  matches
                    ? {
                        display: "flex",
                        justifyContent: "center",
                      }
                    : {}
                }
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "50%",
                    padding: matches ? "1rem" : "2rem",
                    textTransform: "none !important",
                  }}
                  onClick={() =>
                    (window.location = "mailto:konnectwithpeter@gmail.com")
                  }
                >
                  <div>
                    <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                      {"<>"}
                    </Typography>
                    <Typography variant="h5">E-Mail</Typography>
                    <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                      {"</>"}
                    </Typography>
                  </div>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                component={Link}
                sx={{
                  borderRadius: "50%",
                  padding: matches ? "1rem" : "2rem",
                  textTransform: "none !important",
                }}
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://wa.link/x1gny4"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"<>"}
                  </Typography>
                  <Typography variant="h5">WatsAp</Typography>
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"</>"}
                  </Typography>
                </div>
              </Button>
            </Box>
          </Box>
          <Box
            sx={
              matches
                ? {
                    display: "flex",
                    justifyContent: "space-between",
                  }
                : { width: "40%" }
            }
          >
            <Box>
              <Box
                sx={
                  matches
                    ? {
                        display: "flex",
                        justifyContent: "center",
                      }
                    : {}
                }
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "50%",
                    padding: matches ? "1rem" : "2rem",
                    textTransform: "none !important",
                  }}
                  onClick={handleOpen}
                >
                  <div>
                    <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                      {"<>"}
                    </Typography>
                    <Typography variant="h5">E-Mail</Typography>
                    <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                      {"</>"}
                    </Typography>
                  </div>
                </Button>
              </Box>
            </Box>
            <Box
              sx={
                matches
                  ? {
                      display: "flex",
                      justifyContent: "center",
                    }
                  : { display: "flex", justifyContent: "flex-end" }
              }
            >
              <Button
                component={Link}
                sx={{
                  borderRadius: "50%",
                  padding: matches ? "1rem" : "2rem",
                  textTransform: "none !important",
                }}
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://github.com/konnectwithpeter?tab=repositories"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"<>"}
                  </Typography>
                  <Typography variant="h5">Github</Typography>
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"</>"}
                  </Typography>
                </div>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={
            matches
              ? {textAlign:"center"}
              : {
                  display: "flex",
                  justifyContent: "space-around",
                  color: "#a3a2a4",
                }
          }
        >
          <Typography sx={{color: "#019e36"}}>konnectwithpeter@gmail.com</Typography>
          {!matches && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "#a3a2a4" }}
            />
          )}
          <Typography sx={{color: "#019e36"}}>+254705624743</Typography>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Send an E-mail
          </Typography>
          <Typography>
           This Feature is not working at the moment.
          </Typography>
          <TextField fullWidth label="Message" multiline rows={4} autoFocus />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" endIcon={<SendRounded />} disabled>
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
