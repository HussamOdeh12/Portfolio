import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successNotify = () => {
  toast.info("Message was sent", {
    position: "bottom-left",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
