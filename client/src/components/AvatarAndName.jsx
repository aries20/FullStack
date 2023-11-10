import React from "react";
import { Box, Avatar, Typography, useTheme, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import avatarImage from "../assets/1.jpg";

const AvatarAndName = ({ username, name }) => {
  const theme = useTheme();
  const mediumMain = theme.palette.neutral.mediumMain;
  const dark = theme.palette.neutral.dark;
  return (
    <Box sx={{ display: "flex" }}>
      <Avatar
        src={avatarImage}
        sx={{
          // bgcolor: theme.palette.neutral.mediumMain,
          marginRight: 1.5,
        }}
      />
      <Link
        sx={{ textDecoration: "none" }}
        component={"button"}
        to={`/profile/${username}`}
        style={{ textDecoration: "none" }}
        // onClick={() => {
        //   console.log("Clicked on Link");
        // }}
      >
        <Stack alignItems={"start"}>
          <Typography
            color={dark}
            sx={{ paddingTop: 0.5 }}
            lineHeight={0.8}
            variant="h6"
          >
            {name}
          </Typography>
          <Typography color={mediumMain} variant="body1">
            {username}
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default AvatarAndName;
