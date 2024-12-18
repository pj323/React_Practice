import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'red' }}>
      <Toolbar>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1, // Pushes the title to the left
            fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
            fontWeight: 'bold', // Bold text
          }}
        >
          Kubernetes Dashboard - SF
        </Typography>

        {/* Home Button */}
        <Button
          component={Link}
          to="/"
          color="inherit"
          startIcon={<HomeIcon />}
          sx={{
            fontWeight: 'bold',
            textTransform: 'none', // Prevents uppercase text transformation
          }}
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
