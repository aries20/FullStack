import WidgetWrapper from "components/WidgetWrapper";
import React from "react";
import { Stack, Divider, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const AISuggestionsWidget = ({ userInfo }) => {
  const navigate = useNavigate();
  return (
    <WidgetWrapper>
      <Stack
        divider={<Divider orientation="horizontal" />}
        direction="column"
        spacing={1}
      >
        <Typography alignSelf="center" variant="h6">
          Atlas Suggestions
        </Typography>
        <Typography alignSelf="center" variant="body1">
          Atlas is an AI program that you can use to create personalized workout
          goals and suggestions. Complete your profile to use this feature.
        </Typography>

        <Button
          onClick={() => {
            navigate(`/profile/${userInfo?.username}`);
          }}
        >
          Complete Profile
        </Button>
      </Stack>
    </WidgetWrapper>
  );
};

export default AISuggestionsWidget;
