import React from "react";
import "../css/app.css";
import { Container,Stack,Box, Button,Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/MaterialTheme/styled";



function App() {
  return (
    <Container sx={{background: "orange"}}>
  <Stack flexDirection={"column"}>
    <Box sx={{my: 4}}>
      <Typography variant="h4"component={"h4"}>
        Create React App on Typescript  with Redux
      </Typography>
    </Box>
    <RippleBadge badgeContent={4}>
      <Button variant="contained"> Contained</Button>
    </RippleBadge>

  </Stack>
  </Container>
  );
}

export default App;





