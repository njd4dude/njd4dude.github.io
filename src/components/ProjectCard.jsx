import React from "react";
//left off here making images fit the project card
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl p-6 my-8 mx-12 ">
      <img
        src={project.thumbnail}
        alt={project.name}
        className="object-cover w-96 h-80 "
      />
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-center">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
