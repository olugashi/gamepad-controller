import React, { useState, useEffect } from 'react';
import eventBus from '../eventBus/eventBus';
import { DrivingData } from '../models/DrivingModel';

const DrivingComponent: React.FC = () => {
  const [drivingData, setDrivingData] = useState<DrivingData>({ steer: 0, gas: 0, brake: 0 });
  const [isReceivingData, setIsReceivingData] = useState(false);

  useEffect(() => {
    const handleDrivingData = async (data: DrivingData) => {
      setDrivingData(data);
      sendDataToServer(data);
    };

    if (isReceivingData) {
      eventBus.on('drivingData', handleDrivingData);
    } else {
      eventBus.off('drivingData', handleDrivingData);
    }

    return () => {
      eventBus.off('drivingData', handleDrivingData);
    };
  }, [isReceivingData]);

  const sendDataToServer = (data: DrivingData) => {
    console.log('Driving data:', data);
  };

  return (
    <div>
      <h2>Driving Controls</h2>
      <button onClick={() => setIsReceivingData(!isReceivingData)}>
        {isReceivingData ? 'Disable' : 'Enable'} Receiving Data
      </button>
      <div>Steer: {drivingData.steer.toFixed(2)}</div>
      <div>Gas: {drivingData.gas.toFixed(2)}</div>
      <div>Brake: {drivingData.brake.toFixed(2)}</div>
    </div>
  );
};

export default DrivingComponent;
