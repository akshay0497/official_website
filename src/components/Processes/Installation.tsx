import { useAppSelector } from "../../hooks/useAppSelector";
import ProcessLayout from "../../layout/ProcessLayout";

const Installation = () => {
  
  let Installation =  useAppSelector((state : any) => state.posts.installation);

  return (   
    <ProcessLayout Data={Installation} />
  );
};

export default Installation;