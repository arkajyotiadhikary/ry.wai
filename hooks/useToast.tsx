import Toast, { ToastProps } from "@/components/Toast";
import { useState } from "react";

const useToast = () => {
      // setting up the current toast - so that we can close it later
      const [toast, setToast] = useState<ToastProps | null>(null);

      // function to trigger the toast with the given props
      const triggerToast = (toast: ToastProps) => {
            setToast(toast);
            setTimeout(() => setToast(null), toast.duration || 3000);
      };

      // returning the current toast and the function to trigger the toast
      const showToast = toast ? <Toast {...toast} onClose={() => setToast(null)} /> : null;
      return { showToast, triggerToast };
};

export default useToast;
