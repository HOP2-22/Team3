import "../../css/Services.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaCard from "./ExampleCard";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function RowAndColumnSpacing() {
  return (
    <Box className="con" sx={{ width: "100%" }}>
      <Grid className="con2" container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid className="idk" xs={4}>
          <Item className="HowItWorks">
            <Typography className="How">How It Works</Typography>
            <hr></hr>
            <Typography className="texthow">
              You can make a post about your thoughts. People will agree or
              disagree about your thoughts in the comment section. This is also
              your hub for teamwork. Give everyone you work with inside and
              outside your company a more productive way to stay in sync.
              Respond faster with emoji, keep conversations focused in channels,
              and simplify all your communication into one place.
            </Typography>
          </Item>
        </Grid>
        <Grid className="idk" xs={4}>
          <Item className="ExampleCard">
            <Typography className="Post">
              This is an example post in our site
            </Typography>
            <MediaCard />
          </Item>
        </Grid>
        <Grid className="idk" xs={4}>
          <Item className="Schedule">
            <Typography className="ScheduleText">
              Scheduling that actually works
            </Typography>
            <hr></hr>
            <Typography className="TextSche">
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </Typography>
          </Item>
        </Grid>
        <Grid className="idk" xs={4}>
          <Item className="SimpleTask">
            <Typography className="SimpleTaskText">
              Simple task management
            </Typography>
            <hr></hr>
            <Typography className="TextSim">
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </Typography>
          </Item>
        </Grid>
        <Grid className="idk" xs={4}>
          <Item className="TeamWork">
            <Typography className="TeamWorkText">
              Your Hub for teamwork
            </Typography>
            <hr></hr>
            <Typography className="TeamWorkText2">
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </Typography>
          </Item>
        </Grid>
        <Grid className="idk" xs={4}>
          <Item className="YtVideo">
            <Typography className="YtVideoText">
              Youtube video for instructions
            </Typography>
            <img
              className="Img"
              src="https://res.cloudinary.com/dw8hfvbgl/image/upload/v1677486956/Services/Rectangle_bqryua.png"
              alt="w"
            ></img>
            <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Click Here
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
