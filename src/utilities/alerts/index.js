import Swal from "sweetalert2";
import { Colors } from "themes/themes";

export const AlertFeedback = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  background: Colors.background.green,
  color: Colors.word.grey,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});