import { useAppSelector } from "../../hooks/useAppSelector";
import ProductsLayout from "../../layout/ProductsLayout"

const CampSysERP = () => {
    let campsys =  useAppSelector((state : any) => state.posts.campsys);

  return (
    <ProductsLayout Data={campsys} />
  )
}

export default CampSysERP
