/* eslint-disable @typescript-eslint/no-explicit-any */

import { Store } from "react-notifications-component";

import Swal from "sweetalert2";

export const NotifyAlerts = (type: any, title:string, content: string) => {
  // 'default', 'success', 'info', 'warning', danger
  Store.addNotification({
    message: content,
    type: type,
    title: title,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],

    dismiss: {
      duration: 5000,
      onScreen: true,
      pauseOnHover: true,
    },
  });
};


export const closeModal = () => {
  Swal.close();
};

export const LoadingModal = () => {
  Swal.fire({
    width: 300,

    allowOutsideClick: false,
    showConfirmButton: false,
    html: `<div class='flex items-center flex-row'> 
    <img src='/images/icons/loader.svg' />
    please wait... 
    </div>`,
  });
};
