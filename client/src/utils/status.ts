import { toast } from "react-toastify";

export default function status(
  type: "error" | "loading" | "info" | "success" | "warning",
  message: string,
): void {
  switch (type) {
    case "error":
      toast.error(message);
      break;
    case "loading":
      toast.loading(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
  }
}
