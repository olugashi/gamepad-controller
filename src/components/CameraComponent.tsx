import React, { useState, useEffect } from 'react';
import eventBus from '../eventBus/eventBus';
import { CameraData } from '../models/CameraModel';
import { registerCameraHandler } from '../services/JoystickService';

const CameraComponent: React.FC = () => {
  const [cameraData, setCameraData] = useState<CameraData>({ cameraX: 0, cameraY: 0, cameraZ: 0 });

  useEffect(() => {
    const handleCameraData = (data: CameraData) => {
      setCameraData(data);
      sendDataToServer(data);
    };

    eventBus.on('cameraData', handleCameraData);

    return () => {
      eventBus.off('cameraData', handleCameraData);
    };
  }, []);

  useEffect(() => {
    const joystickData = { axes: [], buttons: [] }; // Replace with actual joystick data
    registerCameraHandler(joystickData);
  }, []);

  const sendDataToServer = (data: CameraData) => {
    console.log('Camera data:', data);
  };

  return (
    <div>
      <h2>Camera Controls</h2>
      <div>Camera X: {cameraData.cameraX.toFixed(2)}</div>
      <div>Camera Y: {cameraData.cameraY.toFixed(2)}</div>
      <div>Camera Z: {cameraData.cameraZ.toFixed(2)}</div>
    </div>
  );
};

export default CameraComponent;
