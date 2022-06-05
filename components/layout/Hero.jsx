import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const Hero = ({
  id,
  content,
  variants,
}) => (
  <motion.section variants={variants} id={id} className="flex justify-center w-screen">
    <div className="max-w-screen-md w-full px-4 prose-h1:text-6xl mt-60 prose-strong:text-sky-500">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  </motion.section>
);

export default Hero;
