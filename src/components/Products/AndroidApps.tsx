import { useAppSelector } from "../../hooks/useAppSelector";
import ProductsLayout from "../../layout/ProductsLayout"

const AndroidApps = () => {
    let androidApp =  useAppSelector((state : any) => state.posts.androidapps);

  return (
    <ProductsLayout Data={androidApp} />
  )
}

export default AndroidApps