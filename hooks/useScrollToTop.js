const useScrollToTop = ({ top = 0, left = 0, behavior = "smooth" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top, left, behavior });
  };

  return scrollToTop;
};

export default useScrollToTop;
