import { useEffect, useRef, useState } from "react";

const useScrollTrigger = ({
  threshold,
  disableHysteresis,
} = {
  threshold: 0,
  disableHysteresis: false,
}) => {
  const [scrolled, setScrolled] = useState(false);

  const currentY = useRef(0);

  useEffect(() => {
    const getOffsetFromTop = () => window.pageYOffset || document.documentElement.scrollTop;

    setScrolled(getOffsetFromTop() > threshold);

    const handleScroll = () => {
      if (threshold > 0) currentY.current = threshold;

      const topOffset = window.pageYOffset || document.documentElement.scrollTop;

      if (topOffset > currentY.current) {
        setScrolled(true);
      } else {
        setScrolled(disableHysteresis);
      // upscroll code
      }
      currentY.current = topOffset <= 0 ? 0 : topOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableHysteresis, threshold]);

  return scrolled;
};

export default useScrollTrigger;
