import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, Alert } from '@mui/material';
import { PieChart, BarChart, HelpOutline, Send, Chat, RocketLaunch } from '@mui/icons-material';
import Charts from './Charts';

const Home: React.FC = () => {
  const [instanceName, setInstanceName] = useState('');
  const [response, setResponse] = useState('');

  const handlePing = () => {
    if (instanceName.trim()) {
      setResponse(`Pong: Instance "${instanceName}" responded successfully.`);
    } else {
      setResponse('Please enter a valid instance name.');
    }
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      {/* Welcome Banner */}
      <Box sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold">
          Welcome to Kubernetes Dashboard - Redis
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage and monitor your Kubernetes clusters efficiently - Team Turing
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
              startIcon={<Chat />}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              FAQ Section
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<RocketLaunch />}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              RocketChat Team Redis
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<HelpOutline />}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              Team Oncall
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Ping an Instance Feature */}
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: 1,
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Ping an Instance
        </Typography>
        <TextField
          label="Instance Name"
          variant="outlined"
          fullWidth
          value={instanceName}
          onChange={(e) => setInstanceName(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePing}
          startIcon={<Send />}
        >
          Ping
        </Button>

        {/* Display Ping Response */}
        {response && (
          <Alert severity="success" sx={{ marginTop: '1rem' }}>
            {response}
          </Alert>
        )}
      </Box>

      {/* Charts Section */}
      <Box>
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: '1rem' }}>
          Cluster Resource Utilization
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* First Chart */}
            <Charts chartType="pie" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Second Chart */}
            <Charts chartType="bar" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
