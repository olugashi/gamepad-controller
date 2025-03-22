import React, { useState, useEffect } from 'react';
import eventBus from '../eventBus/eventBus';
import { DrivingData } from '../models/DrivingModel';

const DrivingComponent: React.FC = () => {
  const [drivingData, setDrivingData] = useState<DrivingData>({ steer: 0, gas: 0, brake: 0 });

  useEffect(() => {
    const handleDrivingData = (data: DrivingData) => {
      setDrivingData(data);
      sendDataToServer(data);
    };

    eventBus.on('drivingData', handleDrivingData);

    return () => {
      eventBus.off('drivingData', handleDrivingData);
    };
  }, []);

  const sendDataToServer = (data: DrivingData) => {
    console.log('Driving data:', data);
  };

  return (
    <div>
      <h2>Driving Controls</h2>
      <div>Steer: {drivingData.steer.toFixed(2)}</div>
      <div>Gas: {drivingData.gas.toFixed(2)}</div>
      <div>Brake: {drivingData.brake.toFixed(2)}</div>
    </div>
  );
};

export default DrivingComponent;
