import { useAppSelector } from "../../hooks/useAppSelector";
import ProductsLayout from "../../layout/ProductsLayout"

const LibraryAutomationSystem = () => {
    let libraryautomationsystem =  useAppSelector((state : any) => state.posts.libraryautomationsystem);

  return (
    <ProductsLayout Data={libraryautomationsystem} />
  )
}

export default LibraryAutomationSystem
