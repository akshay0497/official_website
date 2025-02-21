import { useAppSelector } from "../../hooks/useAppSelector";
import ProductsLayout from "../../layout/ProductsLayout"

const CompanyProfile = () => {
    let companyProfile =  useAppSelector((state : any) => state.posts.companyprofile);

  return (
    <ProductsLayout Data={companyProfile} />
  )
}

export default CompanyProfile