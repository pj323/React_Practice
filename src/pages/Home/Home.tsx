import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { PieChart, BarChart, ErrorOutline, HelpOutline } from '@mui/icons-material';

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      {/* Welcome Banner */}
      <Box sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold">
          Welcome to Kubernetes Dashboard - SF
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage and monitor your Kubernetes clusters efficiently.
        </Typography>
      </Box>

      {/* Cluster Overview */}
      <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                EDCO Cluster
              </Typography>
              <Typography variant="body1">State: Active</Typography>
              <Typography variant="body2" color="textSecondary">
                Nodes: 15 | Pods: 120
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                EDCR Cluster
              </Typography>
              <Typography variant="body1">State: Active</Typography>
              <Typography variant="body2" color="textSecondary">
                Nodes: 20 | Pods: 150
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Links */}
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: '1rem' }}>
          Quick Links
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<PieChart />}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              View EDCO Test Environment
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<BarChart />}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              View EDCR Prod Environment
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<HelpOutline />}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              Help Center
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Recent Alerts */}
      <Box>
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: '1rem' }}>
          Recent Alerts
        </Typography>
        <Card sx={{ padding: '1rem', backgroundColor: '#ffe5e5' }}>
          <Typography variant="body1" color="error">
            <ErrorOutline sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
            High CPU usage detected in EDCR Prod cluster.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
