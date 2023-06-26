import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/product";
import { useEffect } from "react";
import Header from "./Header/header";
import AllProductLists from "./allproducts";

// productList function based component 
const ProductList = () => {
  // use dispatch as fetching product thru generating fetchProducts action
  const dispatch = useDispatch(fetchProducts);

  //set the value of products from state object
  const product = useSelector((state) => state.product.productlist.products);
  
  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchProducts());
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <AllProductLists product={product} />
    </>
  );
};

export default ProductList;
