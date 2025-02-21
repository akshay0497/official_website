import { useAppSelector } from "../../hooks/useAppSelector";
import ProductsLayout from "../../layout/ProductsLayout"

const Ecommerce = () => {
    let ecom =  useAppSelector((state : any) => state.posts.ecommerce);

  return (
    <ProductsLayout Data={ecom} />
  )
}

export default Ecommerce ;