import React, { useState, useEffect } from 'react';
import eventBus from '../eventBus/eventBus';
import { CameraData } from '../models/CameraModel';

const CameraComponent: React.FC = () => {
  const [cameraData, setCameraData] = useState<CameraData>({ cameraX: 0, cameraY: 0, cameraZ: 0 });
  const [isReceivingData, setIsReceivingData] = useState(false);

  useEffect(() => {
    const handleCameraData = async (data: CameraData) => {
      setCameraData(data);
      sendDataToServer(data);
    };

    if (isReceivingData) {
      eventBus.on('cameraData', handleCameraData);
    } else {
      eventBus.off('cameraData', handleCameraData);
    }

    return () => {
      eventBus.off('cameraData', handleCameraData);
    };
  }, [isReceivingData]);

  const sendDataToServer = (data: CameraData) => {
    console.log('Camera data:', data);
  };

  return (
    <div>
      <h2>Camera Controls</h2>
      <button onClick={() => setIsReceivingData(!isReceivingData)}>
        {isReceivingData ? 'Disable' : 'Enable'} Receiving Data
      </button>
      <div>Camera X: {cameraData.cameraX.toFixed(2)}</div>
      <div>Camera Y: {cameraData.cameraY.toFixed(2)}</div>
      <div>Camera Z: {cameraData.cameraZ.toFixed(2)}</div>
    </div>
  );
};

export default CameraComponent;
