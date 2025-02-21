import { useAppSelector } from "../../hooks/useAppSelector";
import ClientLayout from "../../layout/ClientLayout";

const OurClients = () => {
    let ourclient =  useAppSelector((state : any) => state.posts.ourclient);

  return (
    <ClientLayout Data={ourclient} />
  )
}

export default OurClients