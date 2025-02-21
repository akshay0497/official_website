import { useAppSelector } from "../../hooks/useAppSelector";
import ProductsLayout from "../../layout/ProductsLayout"

const FileTrackingSystem = () => {
    let filetracking =  useAppSelector((state : any) => state.posts.filetracking);

  return (
    <ProductsLayout Data={filetracking} />
  )
}

export default FileTrackingSystem
