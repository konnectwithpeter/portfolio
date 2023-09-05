import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    ImageList,
    ImageListItem
} from "@mui/material";

import clinic1 from "../assets/demos/clinic1.png";
import clinic2 from "../assets/demos/clinic2.png";
import clinic3 from "../assets/demos/clinic3.png";
import clinic4 from "../assets/demos/clinic4.png";

import wix from "../assets/demos/wix.png";

import retail1 from "../assets/demos/retail1.png";
import retail2 from "../assets/demos/retail2.png";
import retail3 from "../assets/demos/retail3.png";

import commerce from "../assets/demos/commerce.png";

const Gallery = ({ open, handleClose, gallery }) => {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <DialogContent>
        {gallery === "clinic" ? (
          <ImageList variant="masonry" cols={1} gap={8}>
            <ImageListItem>
              <img src={clinic1} alt="clinic1" />
            </ImageListItem>
            <ImageListItem>
              <img src={clinic2} alt="clinic1" />
            </ImageListItem>
            <ImageListItem>
              <img src={clinic3} alt="clinic1" />
            </ImageListItem>
            <ImageListItem>
              <img src={clinic4} alt="clinic1" />
            </ImageListItem>
          </ImageList>
        ) : gallery === "retail" ? (
          <ImageList variant="masonry" cols={1} gap={8}>
            <ImageListItem>
              <img src={retail1} alt="retail1" />
            </ImageListItem>
            <ImageListItem>
              <img src={retail2} alt="retail1" />
            </ImageListItem>
            <ImageListItem>
              <img src={retail3} alt="retail1" />
            </ImageListItem>
          </ImageList>
        ) : gallery === "commerce" ? (
          <ImageList variant="masonry" cols={1}>
            <ImageListItem>
              <img src={commerce} alt="commerce" />
            </ImageListItem>
          </ImageList>
        ) : (
          <ImageList variant="masonry" cols={1}>
            <ImageListItem>
              <img src={wix} alt="wix" />
            </ImageListItem>
          </ImageList>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Gallery;
