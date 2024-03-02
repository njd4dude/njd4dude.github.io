import ProjectCard from "../components/ProjectCard";
import "./ProjectSpace.css";

// 2/16 working on making project cards look better(hoverable effect)
export const slides = [
  {
    src: "https://picsum.photos/seed/img1/600/400",
    alt: "Image 1 for carousel",
  },
  {
    src: "https://picsum.photos/seed/img2/600/400",
    alt: "Image 2 for carousel",
  },
  {
    src: "https://picsum.photos/seed/img3/600/400",
    alt: "Image 3 for carousel",
  },
];
export const projects = [
  {
    name: "Project 1",
    description: "Description of Project 1...",
    thumbnail: "/images/SomeoneCoding.webp",
    demoLink: "https://example.com/project1-demo",
    githubLink: "https://github.com/username/project1",
  },
  {
    name: "Project 2",
    description: "Description of Project 2...",
    thumbnail: "/images/CodeCmmt002.svg.png",
    demoLink: "https://example.com/project2-demo",
    githubLink: "https://github.com/username/project2",
  },
  {
    name: "Project 2",
    description: "Description of Project 2...",
    thumbnail: "/images/CodeCmmt002.svg.png",
    demoLink: "https://example.com/project2-demo",
    githubLink: "https://github.com/username/project2",
  },
  {
    name: "Project 2",
    description: "Description of Project 2...",
    thumbnail: "/images/CodeCmmt002.svg.png",
    demoLink: "https://example.com/project2-demo",
    githubLink: "https://github.com/username/project2",
  },
  {
    name: "Project 2",
    description: "Description of Project 2...",
    thumbnail: "/images/CodeCmmt002.svg.png",
    demoLink: "https://example.com/project2-demo",
    githubLink: "https://github.com/username/project2",
  },

  // Add more projects as needed

];

const ProjectSpace = () => {
  return (
    <div className="bg-white projectSpaceContainer md:mx-20 rounded-3xl mt-24 mb-24">
      <div className="py-8 md:grid grid-cols-3 justify-items-center overflow-hidden">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSpace;
