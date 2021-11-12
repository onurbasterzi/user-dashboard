import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export function confirmDialog(callback) {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do delete user ?',
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