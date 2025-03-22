import React from 'react';

interface JoystickData {
  axes: number[];
  buttons: boolean[];
}

const GamepadDataDisplay: React.FC<{ joystickData: JoystickData }> = ({ joystickData }) => {
  return (
    <div>
      <h2>Gamepad Data</h2>
      <div>
        <h3>Axes</h3>
        <pre>{JSON.stringify(joystickData.axes, null, 2)}</pre>
      </div>
      <div>
        <h3>Buttons</h3>
        <pre>{JSON.stringify(joystickData.buttons, null, 2)}</pre>
      </div>
    </div>
  );
};

export default GamepadDataDisplay;
