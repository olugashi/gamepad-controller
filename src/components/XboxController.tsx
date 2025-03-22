import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid, Box } from '@mui/material';

interface XboxControllerProps {
  onConnect: () => void;
  onDisconnect: () => void;
}

const XboxController: React.FC<XboxControllerProps> = ({ onConnect, onDisconnect }) => {
  const [leftStickPosition, setLeftStickPosition] = useState({ x: 0, y: 0 });
  const [rightStickPosition, setRightStickPosition] = useState({ x: 0, y: 0 });
  const [isLeftStickActive, setIsLeftStickActive] = useState(false);
  const [isRightStickActive, setIsRightStickActive] = useState(false);

  const handleMouseMove = (event: React.MouseEvent, setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>, isActive: boolean) => {
    if (!isActive) return;
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          Xbox Controller Simulator
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={onConnect} style={{ margin: '10px' }}>
              Connect
            </Button>
            <Button variant="contained" color="secondary" onClick={onDisconnect} style={{ margin: '10px' }}>
              Disconnect
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{ margin: '5px' }}>LB</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>RB</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{ margin: '5px' }}>LT</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>RT</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{ margin: '5px' }}>Y</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{ margin: '5px' }}>X</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>A</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>B</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{ margin: '5px' }}>Start</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>Back</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{ margin: '5px' }}>LS</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>RS</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{ margin: '5px' }}>Left Stick</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>Right Stick</Button>
                <Button variant="outlined" style={{ margin: '5px' }}>D-Pad</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  style={{ margin: '10px' }}
                  onMouseMove={(event) => handleMouseMove(event, setLeftStickPosition, isLeftStickActive)}
                  onMouseDown={() => setIsLeftStickActive(true)}
                  onMouseUp={() => setIsLeftStickActive(false)}
                >
                  <Typography variant="h6" align="center">Left Joystick</Typography>
                  <Box width={100} height={100} borderRadius="50%" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
                    <Box
                      width={20}
                      height={20}
                      borderRadius="50%"
                      bgcolor="black"
                      style={{ transform: `translate(${leftStickPosition.x}px, ${leftStickPosition.y}px)` }}
                    ></Box>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  style={{ margin: '10px' }}
                  onMouseMove={(event) => handleMouseMove(event, setRightStickPosition, isRightStickActive)}
                  onMouseDown={() => setIsRightStickActive(true)}
                  onMouseUp={() => setIsRightStickActive(false)}
                >
                  <Typography variant="h6" align="center">Right Joystick</Typography>
                  <Box width={100} height={100} borderRadius="50%" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
                    <Box
                      width={20}
                      height={20}
                      borderRadius="50%"
                      bgcolor="black"
                      style={{ transform: `translate(${rightStickPosition.x}px, ${rightStickPosition.y}px)` }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default XboxController;
