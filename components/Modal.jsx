import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ReactFocusLock from "react-focus-lock";
import { RiCloseFill } from "react-icons/ri";

const Modal = ({
  children,
  open,
  onClose,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  const handleClose = (event) => {
    if (modalRef.current.contains(event.target)) return;

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
      <motion.div
        onClick={handleClose}
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ opacity: 1, pointerEvents: "auto" }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        className="z-40 pointer-events-none fixed inset-0 w-screen h-screen bg-opacity-75 bg-slate-900 flex justify-center items-center"
      >
        <ReactFocusLock>
          <div className="relative" ref={modalRef}>
            <button
              name="close"
              className="hidden sm:block z-20 p-2 bg-sky-500 text-slate-100 dark:text-slate-900 rounded absolute right-8 top-8"
              onClick={onClose}
            >
              <RiCloseFill />
            </button>
            {children}
          </div>
        </ReactFocusLock>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
