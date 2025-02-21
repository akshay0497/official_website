import { useAppSelector } from "../../hooks/useAppSelector";
import ProcessLayout from "../../layout/ProcessLayout";

const Project_Design = () => {
  const Project_Design = useAppSelector((state :any) => state.posts.projectDesign);

  return (
    <ProcessLayout Data={Project_Design} />
  );
};

export default Project_Design;