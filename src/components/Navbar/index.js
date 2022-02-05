import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from "react";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Manager
          </Typography>
          <Button color="inherit">new product<AddCircleOutlineIcon /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}