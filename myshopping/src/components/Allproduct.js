import { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Allproduct = (props) => {
  const product = props.ProductList;
  const [quantity, setQuantity] = useState(0);
  const updateState =  async (e,type) => {
    setQuantity(quantity,e,type)
    const newState = await product.map(obj => {
      if (obj.id === e && type==="minus") {
        let value =  obj["quantity"]
        if(quantity> 0){
            return {...obj, value:quantity-1};
        }
        // return obj.quantity = 2
      }
      return obj;
    });
  }
 
  useEffect(() => { 
   updateState()
    console.log("product,,,,,,,,,,,,,,,",product)
   },[]);
 
  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol>
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                          Items : {product.length}
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {/* Total Items :{parseInt(product.length) * parseInt(product.quantity?product.quantity:0)} */}
                          </MDBTypography>
                        </div>
                        {product.map((product) => {
                          return (
                            <div>
                              <hr className="my-4" />
                              <MDBRow className=" d-flex justify-content-between align-items-center">
                                <MDBCol className="md-2 lg-2 xl-2">
                                  <MDBCardImage
                                    src={product.thumbnail}
                                    fluid
                                    className="rounded-3"
                                    alt=""
                                  />
                                </MDBCol>
                                <MDBCol className="md-3 lg-3 xl-3">
                                  <MDBTypography
                                    tag="h6"
                                    className="text-muted"
                                  >
                                    Title: {product.title}
                                  </MDBTypography>
                                  <MDBTypography
                                    tag="h6"
                                    className="text-success mb-0"
                                  >
                                    Des: {product.description}
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="2"
                                  lg="2"
                                  xl="2"
                                  className=" d-flex  align-items-center"
                                >
                                  {quantity > 0 && (
                                    <MDBBtn
                                      style={{ color: "link" }}
                                      className="px-2"
                                      onClick={(e) =>updateState(product.id,"minus")
                                      }
                                    >
                                      <MDBIcon fas icon="minus" />
                                    </MDBBtn>
                                  )}
                                  {quantity != 0 ? (
                                    <MDBInput
                                      type="number"
                                      min="0"
                                      defaultValue={quantity}
                                      value={quantity}
                                      onChange={(e)=>updateState(product.id,"addToCart")}
                                      size="sm"
                                    />
                                  ) : (
                                    <MDBBtn  onClick={() =>
                                        setQuantity(1)
                                      } className="me-1" color="primary">
                                      Add to Cart
                                    </MDBBtn>
                                  )}
                                  {quantity > 0 && (
                                    <MDBBtn
                                      onClick={() =>
                                        setQuantity(quantity ? quantity + 1 : 1)
                                      }
                                      style={{ color: "link" }}
                                      className="px-2"
                                    >
                                      <MDBIcon onClick={(e)=>updateState(product.id)} fas icon="plus" />
                                    </MDBBtn>
                                  )}
                                </MDBCol>
                                <MDBCol
                                  md="2"
                                  lg="2"
                                  xl="2"
                                  className="text-end"
                                >
                                  <MDBTypography tag="h6" className="mb-0">
                                    € {(product.price)* (quantity?quantity:product.price)} 
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="1"
                                  lg="1"
                                  xl="1"
                                  className="text-end"
                                >
                                  {/* <button className="text-muted"> */}
                                  <MDBIcon fas icon="times" />
                                  {/* </button> */}
                                </MDBCol>
                              </MDBRow>
                            </div>
                          );
                        })}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};
export default Allproduct;
