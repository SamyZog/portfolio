import { DARK_SCHEME_CLASS, LIGHT_SCHEME_CLASS } from "constants/index.mjs";

import { AnimatePresence, motion } from "framer-motion";
import useColorScheme from "hooks/useColorScheme";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const animations = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
  transition: { duration: 0.1 },
};

const ThemeSwitcher = (props) => {
  const { dark, toggleScheme } = useColorScheme();

  return (
    <motion.button
      name="switch theme"
      onClick={() => toggleScheme()}
      className="p-2 bg-slate-900 overflow-hidden dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded"
      {...props}
    >
      <AnimatePresence exitBeforeEnter>
        {dark ? (
          <motion.div
            key={LIGHT_SCHEME_CLASS}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animations.transition}
          >
            <RiSunFill />
          </motion.div>
        ) : (
          <motion.div
            key={DARK_SCHEME_CLASS}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animations.transition}
          >
            <RiMoonFill />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeSwitcher;
