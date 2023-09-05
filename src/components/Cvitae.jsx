import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  Typography
} from "@mui/material";

const Cvitae = ({ open, handleClose }) => {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h4">Peter Njoroge</Typography>
      </DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <Typography variant="h5" sx={{}}>
              Profile Summary: Web Development Freelancer & Cybersecurity Expert
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <br />
              Experienced web development freelancer and cybersecurity
              specialist with a proven track record of creating dynamic and
              secure online experiences. With 4+ of hands-on experience in the
              digital realm, I combine my expertise in web development with a
              deep understanding of cybersecurity to deliver comprehensive
              solutions that prioritize functionality, user experience, and data
              protection.
              <br />
              Key Skills:
              <br />
              <ul>
                <li>
                  Full-stack web development, utilizing HTML, CSS, JavaScript,
                  and ReactJs.
                </li>
                <li>
                  Expertise in building responsive and visually appealing
                  websites that engage and captivate users.
                </li>
                <li>Proficient in python/Django backend technology.</li>
                <li>
                  Adept at identifying vulnerabilities and implementing robust
                  cybersecurity measures to safeguard sensitive data.
                </li>
                <li>
                  Strong problem-solving abilities, ensuring seamless
                  functionality while maintaining optimal security protocols.
                </li>
              </ul>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h5" sx={{}}>
              Professional Experience
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Full-stack Web Developer
              <br />
              FREELANCER | 2019 - present working on a range of freelance web
              design and development projects.
              <br />
              <ul>
                <li>web design and development projects</li>
                <li>Maintaining and updating web application</li>
              </ul>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Kenya Power and Lighting Company <br />
              Attaché | Sept 2022 – December 2022 <br />
              <br />
              <ul>
                <li>Network maintenance and troubleshooting.</li>
                <li>Teams collaboration.</li>
                <li>Customer support.</li>
              </ul>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h5" sx={{}}>
              Academics
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Kabarak University, Nakuru
              <br /> BACHELORS DEGREE in BUSINESS MANAGEMENT and INFORMATION
              TECHNOLOGY | May 2018 - 2021
              <br /> Relevant Coursework: Web Application Programming, System
              Analysis and Design, Advanced Database Management Systems,
              Structured Programming.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Christian Industrial Training College, Thika
              <br />
              CERTIFICATES IN WEB DESIGN + GRAPHIC DESIGN + COMPUTER HARDWARE |
              Jan 2018 - May 2018 <br />
              Relevant Coursework: Web Design, Graphics Design, Computer
              Hardware
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h5" sx={{}}>
              Passion & Aspiration:
            </Typography>
          </ListItem>

          <ListItem>
            <Typography>
              Driven by a passion for crafting exceptional digital experiences,
              I am committed to staying at the forefront of web development
              trends and cybersecurity advancements. My ultimate goal is to
              create user-centric websites and applications that seamlessly
              integrate cutting-edge security measures, empowering businesses to
              thrive in the digital landscape.
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h5" sx={{}}>
              Industries of Interest:
            </Typography>
          </ListItem>

          <ListItem>
            <Typography>
              I am particularly intrigued by opportunities to contribute my
              expertise to industries such as system development,
              telecommunication and Information Technology (IT) and Managed
              Security Services, where the synergy of web development and
              cybersecurity is paramount. As a web development freelancer and
              cybersecurity expert, I am dedicated to combining innovation,
              creativity, and security to exceed client expectations and
              contribute to a safer digital world.
            </Typography>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Cvitae;
