import React from 'react';

interface JoystickDataProps {
  axes: number[];
}

const JoystickData: React.FC<JoystickDataProps> = ({ axes }) => {
  return (
    <div>
      <h3>Joystick Data</h3>
      <ul>
        {axes.map((axis, index) => (
          <li key={index}>Axis {index}: {axis}</li>
        ))}
      </ul>
    </div>
  );
};

export default JoystickData;
