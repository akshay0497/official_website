import { useAppSelector } from "../../hooks/useAppSelector";
import ProcessLayout from "../../layout/ProcessLayout";

const Project_Development = () => {
  
  let Project_Development = useAppSelector((state : any) => state.posts.projectDevelopment);

  return (
    <ProcessLayout Data={Project_Development} />
  );
};

export default Project_Development;