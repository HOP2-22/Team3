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
      const res = await axios.get(
        "https://blog-website-team3.onrender.com/post"
      );
      setData(res.data.data);
    } catch (error) {}
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
        sx={{
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "350px",
                  maxWidth: "363px",
                  borderRadius: "15px",
                }}
              >
                <Link
                  to={`/products/${item?._id}`}
                  className="w-full h-[147px]"
                >
                  <img
                    src={item?.image}
                    alt="postimage"
                    className="h-[147px] w-full object-cover"
                  />
                </Link>
                <p
                  style={{
                    padding: "0px 20px",
                    color: "black",
                    fontSize: "xx-large",
                  }}
                >
                  {item?.title}
                </p>
                <p style={{ color: "black", fontSize: "large" }}>
                  {item?.text.slice(0, 80)}
                </p>
                <div className="bottom">
                  <img
                    style={{
                      width: "44.51px",
                      height: "45px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={item?.user.profileImage}
                    alt=""
                  />
                  <div className="bottomText">
                    <p style={{ fontSize: "large" }}>
                      {item?.user.firstName} {item?.user.lastName} |{" "}
                      {item?.publishDate.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
