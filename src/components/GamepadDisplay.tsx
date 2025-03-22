import React, { useState, useEffect } from 'react';
import eventBus from '../eventBus/eventBus';
import GamepadDataDisplay from './GamepadDataDisplay';
import DrivingComponent from './DrivingComponent';
import CameraComponent from './CameraComponent';

interface JoystickData {
  axes: number[];
  buttons: boolean[];
}

const GamepadDisplay: React.FC = () => {
  const [joystickData, setJoystickData] = useState<JoystickData>({ axes: [], buttons: [] });

  useEffect(() => {
    const handleJoystickData = (data: JoystickData) => {
      setJoystickData(data);
    };

    eventBus.on('joystickData', handleJoystickData);

    return () => {
      eventBus.off('joystickData', handleJoystickData);
    };
  }, []);

  return (
    <div>
      <GamepadDataDisplay joystickData={joystickData} />
      <DrivingComponent joystickData={joystickData} />
      <CameraComponent joystickData={joystickData} />
    </div>
  );
};

export default GamepadDisplay;
