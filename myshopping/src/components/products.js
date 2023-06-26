import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/product";
import { useEffect } from "react";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   // MDBInput,
//   MDBRow,
//   MDBTypography,
// } from "mdb-react-ui-kit";
import Header from "./Header/header";
import AllProductLists from "./allproducts";

const ProductList = () => {
console.log("first")
  const dispatch = useDispatch(fetchProducts);
  const product = useSelector((state) => state.product.productlist.products);
  
  useEffect(() => {
    async function fetchData() {
     await dispatch((fetchProducts()));
    }
 fetchData()
  }, [dispatch]);

console.log("direct",product)
  return (
    <>
      <Header />
 <AllProductLists product={product}/>
    </>
  );
};

export default ProductList;
