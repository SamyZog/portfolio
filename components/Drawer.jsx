/* eslint-disable jsx-a11y/anchor-is-valid */
import { socialData } from "constants/index.mjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ReactFocusLock from "react-focus-lock";
import { RiCloseFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";
import Logo from "./Logo";

const animations = {
  initial: { x: "-100%" },
  drawer: (custom) => ({ x: custom ? 0 : "-100%", transition: { type: "tween" } }),
  overlay: (custom) => ({ opacity: custom ? 1 : 0, transition: { duration: 0.1 } }),
};

const Drawer = ({
  open,
  onClose,
  navLinks,
  signature,
  socialLinks,
}) => {
  const drawerRef = useRef();

  const handlers = useSwipeable({
    onSwipedLeft: () => onClose(),
  });

  const shareUrl = async () => {
    try {
      navigator.share({ url: "https://www.samzog.dev" });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  };

  useEffect(() => {
    drawerRef.current.style.minHeight = `${window.innerHeight}px`;

    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  return (
    <ReactFocusLock>
      <motion.div
        {...handlers}
        custom={open}
        animate={animations.drawer}
        initial={animations.initial}
        className="z-50 sm:hidden fixed bg-slate-200 dark:bg-slate-800"
      >
        <div
          ref={drawerRef}
          className="flex flex-col min-h-screen w-screen"
        >
          <div className="p-4 flex justify-between items-center">
            <Link href="/">
              <a>
                <Logo size={35} />
              </a>
            </Link>
            <button
              name="close drawer"
              className="p-2 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded"
              onClick={onClose}
            >
              <RiCloseFill />
            </button>
          </div>
          <hr className="m-0 mx-4 h-0.5" />
          <div className="p-4">
            <nav className="space-y-6 flex flex-col text-lg items-start">
              {navLinks?.map((link) => (
                <a
                  className="no-underline capitalize"
                  key={link.id}
                  href={link.href}
                  target={`_${link.target}`}
                  onClick={onClose}
                >
                  {link.label}
                </a>
              ))}
              <motion.button
                onClick={shareUrl}
                variants={animations.container}
                className="capitalize font-medium dark:text-slate-100 text-slate-900"
              >
                share
              </motion.button>
            </nav>
          </div>
          <div className="flex flex-col p-4 flex-1 h-full justify-end space-y-5">
            <div className="flex justify-center items-center p-0 space-x-5">
              {socialLinks?.map((link) => {
                const Icon = socialData[link.platform];

                return (
                  <a
                    className="no-underline text-slate-500 dark:text-slate-400 font-semibold"
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    title={link.platform}
                  >
                    <Icon size={25} title={link.platform} />
                  </a>
                );
              })}
            </div>
            <p className="w-full text-center text-sky-500 font-medium m-0">{signature}</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        custom={open}
        animate={animations.overlay}
        className="z-40 block sm:hidden pointer-events-none duration-300 fixed inset-0 w-screen h-screen bg-opacity-75 bg-slate-900"
      />
    </ReactFocusLock>
  );
};

export default Drawer;
