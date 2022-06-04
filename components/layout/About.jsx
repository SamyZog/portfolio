import { technologies } from "constants/index.mjs";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const About = ({
  id,
  content,
  items,
  variants,
}) => (
  <motion.section variants={variants} id={id} className="flex justify-center w-screen my-40">
    <div className="max-w-screen-md w-full px-4 prose-strong:text-sky-500 prose-a:font-medium prose-a:text-sky-500 prose-h1:text-xl prose-h1:capitalize prose-hr:my-4">
      <h1>{`#${id}`}</h1>
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
      <div className="columns-2 sm:columns-3 prose-li:font-semibold prose-li:text-sm">
        {items.sort().map((technology) => (
          <li className="m-0 mb-2" key={technology}>{technologies[technology].label}</li>
        ))}
      </div>
    </div>
  </motion.section>
);

export default About;
