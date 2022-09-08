import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar } from "./";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Sidebar />
    </Stack>
  );
};

export default Feed;
