import { useDispatch, useSelector } from "react-redux";
import { loadproduct } from "../store/product";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Header from "./Header/header";
// import Footer from "./Footer/footer";
import Allproduct from "./Allproduct";

const ProductList = () => {
  const dispatch = useDispatch();
  const ProductLists = useSelector((state) => state.productlist);
  console.log(ProductLists);
  useEffect(() => {
    dispatch(loadproduct());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Allproduct ProductList={ProductLists}/>
      {/* <Footer/> */}
    </>
  );
};

export default ProductList;
