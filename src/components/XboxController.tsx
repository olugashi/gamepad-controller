import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

interface XboxControllerProps {
  onConnect: () => void;
  onDisconnect: () => void;
}

const XboxController: React.FC<XboxControllerProps> = ({ onConnect, onDisconnect }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Xbox Controller Simulator
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={onConnect} style={{ margin: '10px' }}>
              Connect
            </Button>
            <Button variant="contained" color="secondary" onClick={onDisconnect} style={{ margin: '10px' }}>
              Disconnect
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Buttons</Typography>
            <Grid container spacing={1} justifyContent="center">
              <Grid item><Button variant="outlined">A</Button></Grid>
              <Grid item><Button variant="outlined">B</Button></Grid>
              <Grid item><Button variant="outlined">X</Button></Grid>
              <Grid item><Button variant="outlined">Y</Button></Grid>
              <Grid item><Button variant="outlined">LB</Button></Grid>
              <Grid item><Button variant="outlined">RB</Button></Grid>
              <Grid item><Button variant="outlined">LT</Button></Grid>
              <Grid item><Button variant="outlined">RT</Button></Grid>
              <Grid item><Button variant="outlined">Start</Button></Grid>
              <Grid item><Button variant="outlined">Back</Button></Grid>
              <Grid item><Button variant="outlined">LS</Button></Grid>
              <Grid item><Button variant="outlined">RS</Button></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Axes</Typography>
            <Grid container spacing={1} justifyContent="center">
              <Grid item><Button variant="outlined">Left Stick</Button></Grid>
              <Grid item><Button variant="outlined">Right Stick</Button></Grid>
              <Grid item><Button variant="outlined">D-Pad</Button></Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default XboxController;
