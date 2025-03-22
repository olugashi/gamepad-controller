import { useState, useEffect } from 'react';
import eventBus from '../eventBus/eventBus';

interface JoystickData {
  axes: number[];
  buttons: boolean[];
}

const useJoystick = () => {
  const [joystickData, setJoystickData] = useState<JoystickData>({ axes: [], buttons: [] });

  useEffect(() => {
    const handleGamepadConnected = () => {
      eventBus.emit('gamepadconnected');
      const updateJoystickData = () => {
        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[0];
        if (gamepad) {
          const data = {
            axes: Array.from(gamepad.axes),
            buttons: gamepad.buttons.map(button => button.pressed)
          };
          setJoystickData({
            axes: [...data.axes],
            buttons: [...data.buttons]
          });
          eventBus.emit('joystickData', data);
        }
        requestAnimationFrame(updateJoystickData);
      };
      updateJoystickData();
    };

    const handleGamepadDisconnected = () => {
      setJoystickData({ axes: [], buttons: [] });
      eventBus.emit('joystickData', { axes: [], buttons: [] });
      eventBus.emit('gamepaddisconnected');
    };

    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    };
  }, []);

  return joystickData;
};

export default useJoystick;