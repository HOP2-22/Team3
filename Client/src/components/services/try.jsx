import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaCard from "./ExampleCard";
import "../../css/try.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="container" xs={6}>
          <Item className="HowItWorks">
            <Typography>How It Works</Typography>
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
        <Grid xs={6}>
          <Item className="ExampleCard">
            <Typography>This is an example post in our site</Typography>
            <MediaCard />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className="Schedule">
            <Typography className="ScheduleText">
              Scheduling that actually works
            </Typography>
            <hr></hr>
            <Typography className="TextSche">
              {" "}
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className="SimpleTask">
            <Typography className="SimpleTaskText">
              Simple task management
            </Typography>
            <hr></hr>
            <Typography className="TextSim">
              {" "}
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item className="TeamWork"><Typography></Typography></Item>
        </Grid>
        <Grid xs={6}>
          <Item>6</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
