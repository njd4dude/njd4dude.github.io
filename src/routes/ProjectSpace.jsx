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

  return (
    <div className=" py-10 w-full lg:w-8/12 rounded-2xl flex flex-col items-center justify-center 2xl:flex-row  bg-gray-200 mt-24 mb-24 mx-auto  ">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectSpace;
