import { showMessage } from 'react-native-flash-message';

type PopType = 'error' | 'info' | 'success';


function ShowAlertMessage(message: string, type: string, duration: number = 3000): void {
  console.log(type, 'type')
    const backgroundColor =
     type === 'error' ? 'red' : type === 'success' ? 'green' : 'blue';

  showMessage({
    message,
    type,
    backgroundColor,
    duration,
  });
}

const popTypes: Record<PopType, PopType> = {
  error: 'error',
  info: 'info',
  success: 'success',
};

export { ShowAlertMessage, popTypes };
