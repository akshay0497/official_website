import { useAppSelector } from "../../hooks/useAppSelector";
import ProcessLayout from "../../layout/ProcessLayout";

const Acceptance_testing = () => {

  let Acceptance_testing =  useAppSelector((state : any) => state.posts.acceptanceTesting);

  return (
    <ProcessLayout Data={Acceptance_testing} />
  );
};

export default Acceptance_testing;