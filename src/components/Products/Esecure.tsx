import { useAppSelector } from "../../hooks/useAppSelector";
import ProductsLayout from "../../layout/ProductsLayout"

const Esecure = () => {
    let esecure =  useAppSelector((state : any) => state.posts.esecure);

  return (
    <ProductsLayout Data={esecure} />
  )
}

export default Esecure
