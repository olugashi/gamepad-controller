import React from 'react';

interface JoystickData {
  axes: number[];
}

const DrivingComponent: React.FC<{ joystickData: JoystickData }> = ({ joystickData }) => {
  const steer = joystickData.axes[0] || 0;
  const gas = joystickData.axes[1] || 0;
  const brake = joystickData.axes[2] || 0;

  return (
    <div>
      <h2>Driving Controls</h2>
      <div>Steer: {steer.toFixed(2)}</div>
      <div>Gas: {gas.toFixed(2)}</div>
      <div>Brake: {brake.toFixed(2)}</div>
    </div>
  );
};

export default DrivingComponent;
