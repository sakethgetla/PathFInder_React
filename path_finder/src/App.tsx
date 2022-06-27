import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, IconButton } from '@mui/material';
import PathFinder from './games/PathFind/PathFind'

function App() {
  return (

    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Saketh Getla
            </Typography>
            <Button color="inherit"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://sakethgetla.github.io"
              }} >
            games</Button>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <PathFinder />

    </>
  );
}

export default App;
