import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const Contact = ({
  id,
  content,
  actions,
  variants,
}) => (
  <motion.section variants={variants} id={id} className="flex justify-center w-screen my-40">
    <div className="max-w-screen-md w-full px-4 prose-h1:text-xl prose-h1:capitalize prose-hr:my-4">
      <h1>{`#${id}`}</h1>
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
      <div className="text-center mt-20">
        {actions.map((action) => (
          <a
            className="px-6 py-3 rounded dark:text-slate-900 text-slate-100 no-underline text-xl bg-gradient-to-tr from-cyan-500 to-blue-500 uppercase"
            key={id}
            href={action.href}
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Contact;
