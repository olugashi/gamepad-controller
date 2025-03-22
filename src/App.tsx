import React, { useEffect, useRef } from 'react';
import useJoystick from './hooks/useJoystick';
import GamepadDisplay from './components/GamepadDisplay';
import { registerGamepadEvents } from './services/JoystickService';

const App: React.FC = () => {
  const joystickData = useJoystick(); // Initialize the joystick hook to start listening for gamepad events

  useEffect(() => {
    const unregisterGamepadEvents = registerGamepadEvents();

    return () => {
      unregisterGamepadEvents();
    };
  }, []);

  const intervalRef = useRef<number | null>(null);

  const simulateGamepadConnection = () => {
    const updateMockGamepad = () => {
      const mockGamepad = {
        axes: Array.from({ length: 10 }, () => Math.random() * 2 - 1), // 10 axes with random values between -1 and 1
        buttons: [{ pressed: false }, { pressed: true }]
      };

      // Mock navigator.getGamepads
      (navigator as any).getGamepads = () => [mockGamepad];

      // Dispatch gamepadconnected event
      window.dispatchEvent(new Event('gamepadconnected'));
    };

    // Run the simulation 30 times per second
    intervalRef.current = window.setInterval(updateMockGamepad, 1000 / 30);
  };

  const simulateGamepadDisconnection = () => {
    // Mock navigator.getGamepads to return an empty array
    (navigator as any).getGamepads = () => [];

    // Dispatch gamepaddisconnected event
    window.dispatchEvent(new Event('gamepaddisconnected'));

    // Clear the interval if it exists
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F5') {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Clear the interval on component unmount
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Gamepad Controller App</h1>
      <button onClick={simulateGamepadConnection}>Simulate Gamepad Connection</button>
      <button onClick={simulateGamepadDisconnection}>Simulate Gamepad Disconnection</button>
      <GamepadDisplay />
    </div>
  );
};

export default App;