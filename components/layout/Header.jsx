/* eslint-disable jsx-a11y/anchor-is-valid */
import Drawer from "components/Drawer";
import Logo from "components/Logo";
import ThemeSwitcher from "components/ThemeSwitcher";
import { motion } from "framer-motion";
import useScrollTrigger from "hooks/useScrollTrigger";
import Link from "next/link";
import { useState } from "react";
import { AiOutlinePause } from "react-icons/ai";

const animations = {
  header: (custom) => ({ y: custom ? "-100%" : 0 }),
  container: {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
  },
};

const Header = ({
  navLinks,
  signature,
  socialLinks,
  alert,
}) => {
  const trigger = useScrollTrigger();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <motion.header
        className="z-20 w-screen fixed top-0 left-0 border-b border-sky-500 border-opacity-25 bg-slate-100 dark:bg-slate-900"
        custom={trigger}
        animate={animations.header}
        transition={{ type: "tween" }}
      >
        {alert?.content && <p className="p-2 bg-black text-white m-0 text-center">{alert.content}</p>}
        <div className="flex items-center justify-center">
          <motion.div
            variants={animations.container}
            animate="animate"
            initial="initial"
            className="p-4 max-w-screen-md w-full flex justify-between items-center"
          >
            <motion.button
              variants={animations.container}
              onClick={handleDrawerOpen}
              className="block xs:hidden text-slate-900 dark:text-slate-100 rounded"
            >
              <AiOutlinePause size={30} className="rotate-90" />
            </motion.button>
            <nav className="hidden xs:flex space-x-6 md:space-x-8 items-center">
              <Link href="/" passHref>
                <motion.a variants={animations.container}>
                  <Logo size={35} />
                </motion.a>
              </Link>
              {navLinks?.map((link) => (
                <motion.a
                  variants={animations.container}
                  className="no-underline capitalize text-sm font-semibold"
                  key={link.id}
                  href={link.href}
                  target={`_${link.target}`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <ThemeSwitcher variants={animations.container} />
          </motion.div>
        </div>
      </motion.header>
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        navLinks={navLinks}
        signature={signature}
        socialLinks={socialLinks}
      />
    </>
  );
};

export default Header;
