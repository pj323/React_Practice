import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, Box } from '@mui/material';
import { ExpandLess, ExpandMore, Layers, Science, Settings, Storage } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [openCluster, setOpenCluster] = useState<string | null>(null);

  const toggleCluster = (cluster: string) => {
    setOpenCluster(openCluster === cluster ? null : cluster);
  };

  const clusters = [
    {
      name: 'EDCO',
      options: [
        { name: 'Test', icon: <Science /> },
        { name: 'Prep', icon: <Settings /> },
        { name: 'Prod', icon: <Storage /> },
      ],
    },
    {
      name: 'EDCR',
      options: [
        { name: 'Test', icon: <Science /> },
        { name: 'Prep', icon: <Settings /> },
        { name: 'Prod', icon: <Storage /> },
      ],
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 300,
          boxSizing: 'border-box',
          backgroundColor: 'red', // Sidebar background color
          color: 'white', // Sidebar text color
          padding: '1rem',
        },
      }}
    >
      {/* Title Section */}
      <Box sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: 'white' }}>
          Kubernetes Dashboard State Farm
        </Typography>
      </Box>

      {/* Sidebar Navigation */}
      <List>
        {clusters.map((cluster) => (
          <div key={cluster.name}>
            {/* Cluster Name */}
            <ListItemButton
              onClick={() => toggleCluster(cluster.name)}
              sx={{
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Hover effect
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{<Layers />}</ListItemIcon>
              <ListItemText
                primary={cluster.name}
                primaryTypographyProps={{ fontWeight: 'bold' }}
              />
              {openCluster === cluster.name ? (
                <ExpandLess sx={{ color: 'white' }} />
              ) : (
                <ExpandMore sx={{ color: 'white' }} />
              )}
            </ListItemButton>

            {/* Sub-options for the cluster */}
            <Collapse in={openCluster === cluster.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {cluster.options.map((option) => (
                  <ListItemButton
                    key={option.name}
                    component={Link}
                    to={`/${cluster.name.toLowerCase()}/${option.name.toLowerCase()}`}
                    sx={{
                      pl: 4,
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                    }}
                  >
                    <ListItemIcon sx={{ color: 'white' }}>{option.icon}</ListItemIcon>
                    <ListItemText
                      primary={option.name}
                      primaryTypographyProps={{ style: { color: 'white' } }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
