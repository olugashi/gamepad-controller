import React from 'react';

interface JoystickData {
  axes: number[];
}

const CameraComponent: React.FC<{ joystickData: JoystickData }> = ({ joystickData }) => {
  const cameraX = joystickData.axes[3] || 0;
  const cameraY = joystickData.axes[4] || 0;
  const cameraZ = joystickData.axes[5] || 0;

  return (
    <div>
      <h2>Camera Controls</h2>
      <div>Camera X: {cameraX.toFixed(2)}</div>
      <div>Camera Y: {cameraY.toFixed(2)}</div>
      <div>Camera Z: {cameraZ.toFixed(2)}</div>
    </div>
  );
};

export default CameraComponent;
