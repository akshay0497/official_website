import { useAppSelector } from "../../hooks/useAppSelector";
import ProcessLayout from "../../layout/ProcessLayout";

const Project_Proposal = () => {
  let Project_Proposal = useAppSelector((state : any) => state.posts.projectProposal);

  return (
    <ProcessLayout Data={Project_Proposal} />

  );
};

export default Project_Proposal;