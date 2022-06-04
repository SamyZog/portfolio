import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideImage = (direction) => {
    setCurrentIndex((current) => {
      const newIndex = current - direction;

      if (newIndex < 0) return 0;

      if (newIndex > images.length - 1) return images.length - 1;

      return newIndex;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slideImage(-1),
    onSwipedRight: () => slideImage(1),
  });

  return (
    <div {...handlers} className="overflow-hidden relative rounded">
      <motion.div
        drag="x"
        dragSnapToOrigin
        className="flex justify-start items-center shrink-0"
        style={{ width: `calc(${images.length} * 100%)` }}
        animate={{ x: `calc(${-currentIndex} * ${100 / images.length}%)` }}
        transition={{ type: "tween" }}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            width={image.width}
            height={image.height}
            alt={image.alt}
            src={image.url}
            quality={100}
            loading="eager"
          />
        ))}
      </motion.div>
      {images.length > 1 && (
        <>
          <button
            name="next image"
            onClick={() => slideImage(-1)}
            className="hidden only-hover:block p-1 text-sky-500 text-2xl absolute top-1/2 right-0 transform -translate-y-1/2"
          >
            <RiArrowRightSLine />
          </button>
          <button
            name="previous image"
            onClick={() => slideImage(1)}
            className="hidden only-hover:block p-1 text-sky-500 text-2xl absolute top-1/2 left-0 transform -translate-y-1/2"
          >
            <RiArrowLeftSLine />
          </button>
        </>
      )}
      {images.length > 1 && (
      <div className="bottom-2 md:bottom-4 absolute left-1/2 -translate-x-1/2 flex justify-center space-x-4">
          {images.map((image, index) => <motion.div animate={{ opacity: currentIndex === index ? 1 : 0.25 }} key={image.id} className="h-2 w-2 bg-sky-500 rounded-full" />)}
      </div>
      )}
    </div>
  );
};

export default ImageSlider;
