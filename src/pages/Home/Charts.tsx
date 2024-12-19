import React from 'react';
import { Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, BarChart, XAxis, YAxis, CartesianGrid, Bar, Legend } from 'recharts';

const resourceData = [
  { name: 'CPU', value: 40 },
  { name: 'Memory', value: 30 },
  { name: 'Storage', value: 30 },
];

const clusterStatusData = [
  { name: 'EDCO - Test', nodes: 5, pods: 20 },
  { name: 'EDCO - Prod', nodes: 10, pods: 50 },
  { name: 'EDCR - Test', nodes: 8, pods: 35 },
  { name: 'EDCR - Prod', nodes: 12, pods: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Charts: React.FC<{ chartType: 'pie' | 'bar' }> = ({ chartType }) => {
  if (chartType === 'pie') {
    return (
      <Box>
        <PieChart width={400} height={300}>
          <Pie
            data={resourceData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {resourceData.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Box>
    );
  }

  if (chartType === 'bar') {
    return (
      <Box>
        <BarChart width={400} height={300} data={clusterStatusData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="nodes" fill="#8884d8" name="Nodes" />
          <Bar dataKey="pods" fill="#82ca9d" name="Pods" />
        </BarChart>
      </Box>
    );
  }

  return null;
};

export default Charts;
