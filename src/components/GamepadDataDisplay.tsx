import React, { useState, useEffect } from 'react';
import eventBus from '../eventBus/eventBus';

interface JoystickData {
  axes: number[];
  buttons: boolean[];
}

const GamepadDataDisplay: React.FC = () => {
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
