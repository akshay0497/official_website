import { useAppSelector } from "../../hooks/useAppSelector";
import ProcessLayout from "../../layout/ProcessLayout";

const Requirement_analysis = () => {
  let Requirement_analysis = useAppSelector((state :any) => state.posts.requirementAnalysis);

  return (
    <ProcessLayout Data={Requirement_analysis} />

  );
};

export default Requirement_analysis;