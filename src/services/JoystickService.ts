import eventBus from '../eventBus/eventBus';
import { DrivingData } from '../models/DrivingModel';
import { CameraData } from '../models/CameraModel';

export const registerDrivingHandler = (joystickData: { axes: number[]; buttons: boolean[] }) => {
  const drivingData: DrivingData = {
    steer: joystickData.axes[0] || 0,
    gas: joystickData.axes[1] || 0,
    brake: joystickData.axes[2] || 0
  };
  eventBus.emit('drivingData', drivingData);
};

export const registerCameraHandler = (joystickData: { axes: number[]; buttons: boolean[] }) => {
  const cameraData: CameraData = {
    cameraX: joystickData.axes[3] || 0,
    cameraY: joystickData.axes[4] || 0,
    cameraZ: joystickData.axes[5] || 0
  };
  eventBus.emit('cameraData', cameraData);
};

export const registerGamepadEvents = () => {
  const handleGamepadConnected = () => {
    eventBus.emit('gamepadconnected');
  };

  const handleGamepadDisconnected = () => {
    eventBus.emit('drivingData', { steer: 0, gas: 0, brake: 0 });
    eventBus.emit('cameraData', { cameraX: 0, cameraY: 0, cameraZ: 0 });
    eventBus.emit('gamepaddisconnected');
  };

  window.addEventListener('gamepadconnected', handleGamepadConnected);
  window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

  return () => {
    window.removeEventListener('gamepadconnected', handleGamepadConnected);
    window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
  };
};
