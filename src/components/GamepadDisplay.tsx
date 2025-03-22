import React from 'react';
import GamepadDataDisplay from './GamepadDataDisplay';
import DrivingComponent from './DrivingComponent';
import CameraComponent from './CameraComponent';

const GamepadDisplay: React.FC = () => {
  return (
    <div>
      <GamepadDataDisplay />
      <DrivingComponent />
      <CameraComponent />
    </div>
  );
};

export default GamepadDisplay;
