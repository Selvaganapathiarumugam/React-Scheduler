import React from "react";
import { Typography } from "@mui/material";
import Scheduler from "./Components/Scheduler";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
function App() {
  return (
    <>
        <Paper>
          <Container>
            <Typography
              center
              variant="h5"
              sx={{ color: "green", marginLeft: "15em" }}
            >
              Scheduler In React Data From Remote API
            </Typography>
            <Scheduler />
          </Container>
        </Paper>
    </>
  );
}

export default App;
