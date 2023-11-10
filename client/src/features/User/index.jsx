import { Container, Box, Typography } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import React from "react";

const ProfilePage = () => {
  const pathname = window.location.pathname;
  const parts = pathname.split("/");
  const username = parts[parts.length - 1];

  return (
    <Container maxWidth="md">
      <WidgetWrapper sx={{ marginTop: 5 }}>
        <Box>
          <Typography>This is Profile Page of {username}</Typography>
        </Box>
      </WidgetWrapper>
    </Container>
  );
};

export default ProfilePage;
