import { useEffect, useState } from "react";
import ReactPlayerTest from "../components/ReactPlayerTest";
import CloseIcon from "@mui/icons-material/Close";
import { useWindowSize } from "react-use";
import LanguageIcon from "@mui/icons-material/Language";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }) => {
  const [demoViewer, setDemoViewer] = useState(false);
  const { width, height } = useWindowSize();
  const iphone = width < 1000;

  return (
    <div className="mb-4 lg:mx-20 relative w-96 md:w-96 ">
      <div className="z-10 relative w-full h-full bg-white border-2 rounded-xl transition shadow-md md:hover:shadow-2xl md:hover:scale-105 p-6 ">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="object-cover h-80 w-full rounded-2xl"
        />
        <div className="text-center ">
          <h3 className="text-xl font-bold font-mina mb-2 text-black mt-6">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex justify-center z-10 bg-bla">
            <button
              onClick={() => setDemoViewer((prev) => !prev)}
              className="bg-[#7f7f7f] hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded mr-4 flex"
            >
              <PlayCircleOutlineIcon className="mr-1" />
              <p>Demo</p>
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7f7f7f] hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded mr-4 flex"
              >
                <GitHubIcon className="mr-1" />
                <p>GitHub</p>
              </a>
            )}
            {project.live_website && (
              <a
                href={project.live_website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7f7f7f] hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded flex"
              >
                <LanguageIcon className="mr-1" />
                <p>Website</p>
              </a>
            )}
          </div>
        </div>
      </div>
      {iphone ? (
        <div
          className={` ease-in-out duration-500 relative w-full   flex justify-center items-center  ${
            demoViewer ? "h-52" : "h-0"
          }`}
        >
          <ReactPlayerTest url={project.demo} />
        </div>
      ) : (
        <ReactPlayerTest
          url={project.demo}
          demoViewer={demoViewer}
          setDemoViewer={setDemoViewer}
          closable={true}
        />
      )}
    </div>
  );
};

export default ProjectCard;
