import React, { useEffect, useState } from "react";
import "../../css/Products.css";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [data, setData] = useState([]);

  const posts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/post");
      setData(res.data.data);
      console.log(res.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    posts();
  }, []);

  return (
    <Box className="hh" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{ maxHeight: "440px", maxWidth: "363px" }}>
              <Link to={"/product/:id"}>
                <img src={"postImae"} alt="postimage" />
              </Link>
              <p style={{ padding: "0px 20px" }}>Title</p>
              <p>text.slice(0,50)</p>
              <div className="">
                <img src={"posterimage"} alt="" />
                <div className="">
                  <p>
                    {"user.firstname"} {"user.lastname"} | {"post.createdAt"}
                  </p>
                </div>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
