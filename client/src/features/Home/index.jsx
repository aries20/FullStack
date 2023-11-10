import React from "react";
import { Grid, Box, Container } from "@mui/material";
import UserWidget from "./UserWidget";
import GoalsWidget from "./GoalsWidget";
import AddPostWidget from "./AddPostWidget";
import GymInfoWidget from "./GymInfoWidget";
import ConnectWidget from "./ConnectWidget";
import Posts from "features/Posts/Posts";
import AISuggestionsWidget from "./AISuggestionsWidget";
import { useSelector } from "react-redux";
import { selectUserInfo } from "features/User/userSlice";

const HomePage = () => {
  const userInfo = useSelector(selectUserInfo);
  // eslint-disable-next-line no-unused-vars
  return (
    <Container maxWidth="lg">
      <Grid sx={{ paddingTop: 3 }} container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <UserWidget userInfo={userInfo} />
            <Box
              sx={{
                marginTop: 5,
                overflow: "hidden",
              }}
            >
              <GoalsWidget />
            </Box>
            <Box
              sx={{
                marginTop: 5,
                overflow: "hidden",
              }}
            >
              <AISuggestionsWidget userInfo={userInfo} />
            </Box>
          </Box>
        </Grid>
        <Grid paddingBottom={2} item xs={12} md={6}>
          <AddPostWidget userInfo={userInfo} />
          <Posts />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <Box>
              <GymInfoWidget />
            </Box>
            <Box
              sx={{
                marginTop: 5,
                overflow: "hidden",
              }}
            >
              <ConnectWidget />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
