import ImageSlider from "components/ImageSlider";
import { technologies } from "constants/index.mjs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import Modal from "../Modal";

const Portfolio = ({
  id,
  projects,
  variants,
}) => {
  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const handleDialogOpen = (index) => {
    setOpen(true);
    setProjectIndex(index);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <motion.section id={id} variants={variants} className="flex justify-center w-screen my-40">
      <div className="max-w-screen-lg w-full px-4 prose-h1:text-xl prose-h1:capitalize prose-p:text-sm prose-hr:my-4 prose-h2:text-base ">
        <h1>{`#${id}`}</h1>
        <hr />
        <div className="grid auto-rows-fr grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 prose-p:m-0 prose-hr:my-0">
          {projects.map(({
            id: key,
            demoUrl,
            description,
            sourceUrl,
            tech,
            title,
            images,
          }, index) => {
            const imageUrl = images?.[0]?.url;

            return (
              <div
                key={key}
                className="project-card bg-slate-200 dark:bg-slate-800 rounded-lg"
              >
                <div className="p-4 flex justify-between items-center truncate">
                  <h2 className="m-0 truncate">{title}</h2>
                  <div className="flex items-center space-x-2">
                    {demoUrl && (
                    <a href={demoUrl} target="_blank" rel="noreferrer" title="Demo">
                      <IoOpenOutline size={20} title="Demo" />
                    </a>
                    )}
                    {sourceUrl && (
                    <a href={sourceUrl} target="_blank" rel="noreferrer" title="Source">
                      <SiGithub size={20} title="Github" />
                    </a>
                    )}
                  </div>
                </div>
                <hr />
                {imageUrl ? (
                  <button
                    name={`open image preview for project: ${title}`}
                    className="block relative"
                    onClick={() => handleDialogOpen(index)}
                  >
                    <Image
                      src={imageUrl}
                      width={images[0].width}
                      height={images[0].height}
                      alt={images[0].alt}
                      role="button"
                      layout="responsive"
                      quality={25}
                      loading="eager"
                    />
                  </button>
                ) : <div />}
                <div className="p-4">
                  <p>{description}</p>
                </div>
                <div className="flex flex-wrap text-xs px-4 text-sky-500 lowercase font-mono pb-4">
                  {tech.sort().map((t) => (
                    <span key={t} className="mr-2 my-1">
                      {technologies[t].label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal open={open} onClose={handleDialogClose}>
        <div className="p-2 md:p-4 max-w-screen-xl relative bg-slate-300 dark:bg-slate-700 rounded">
          <ImageSlider images={projects[projectIndex].images} />
        </div>
      </Modal>
    </motion.section>
  );
};

export default Portfolio;
