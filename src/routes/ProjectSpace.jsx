import { getFirestore, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import app from "../firebaseConfig";
import "./ProjectSpace.css";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);
const q = query(collection(db, "projects"));

const ProjectSpace = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
    };

    getProjects();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <div className="flex flex-col my-20">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectSpace;
