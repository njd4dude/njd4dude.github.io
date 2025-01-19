import { useEffect, useState } from "react";
import ReactPlayerTest from "../components/ReactPlayerTest";
import CloseIcon from "@mui/icons-material/Close";
import { useWindowSize } from "react-use";
import LanguageIcon from "@mui/icons-material/Language";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import isTouchDevice from "../constants";

const ProjectCard = ({ project }) => {
  const [demoViewer, setDemoViewer] = useState(false);
  const { width, height } = useWindowSize();
  const iphone = width < 1000;

  return (
    <div className="mb-4 relative">
      <div
        className={`z-10 relative w-full md:w-1/3 mx-auto bg-[#d0d0d0] bg-opacity-50 rounded-xl transition shadow-lg ${
          !isTouchDevice &&
          "hover:shadow-2xl hover:shadow-yellow-300 hover:scale-105"
        } p-6`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="object-contain w-full h-56 rounded-2xl"
        />
        <div className="text-center">
          <h3 className="text-3xl font-bold font-mina mb-6 text-black mt-6">
            {project.title}
          </h3>
          <div className="flex justify-center z-10">
            {project.demo && (
              <button
                onClick={() => setDemoViewer((prev) => !prev)}
                className="bg-black hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded mr-4 flex items-center"
              >
                <PlayCircleOutlineIcon className="mr-1" />
                <p className="text-sm md:text-base">Demo</p>
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded mr-4 flex items-center"
              >
                <GitHubIcon className="mr-1" />
                <p className="text-sm md:text-base">GitHub</p>
              </a>
            )}
            {project.live_website && (
              <a
                href={project.live_website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <LanguageIcon className="mr-1" />
                <p className="text-sm md:text-base">View Project</p>
              </a>
            )}
          </div>
        </div>
      </div>
      {project.demo && (
        <div
          className={`ease-in-out duration-500 relative w-full flex justify-center items-center ${
            iphone ? (demoViewer ? "h-52" : "h-0") : "h-auto"
          }`}
        >
          {iphone ? (
            <ReactPlayerTest url={project.demo} />
          ) : (
            <ReactPlayerTest
              url={project.demo}
              demoViewer={demoViewer}
              setDemoViewer={setDemoViewer}
              closable={true}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
