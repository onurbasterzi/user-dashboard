import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export function alertDialog(title) {
    confirmAlert({
      title: title,
      overlayClassName: "no-overlay",
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui-alert'>
            <h1>{title}</h1>
            <button className='btn btn-white center' onClick={onClose}>OK</button>
          </div>
        );
      }
    });
  }