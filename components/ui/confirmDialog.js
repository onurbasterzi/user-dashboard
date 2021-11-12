import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export function confirmDialog(callback,title,message) {
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: 'Yes',
          onClick: () => callback()
        },
        {
          label: 'No',
          onClick: () => console.log('NO')
        }
      ],
      overlayClassName: "no-overlay"
    });
  }