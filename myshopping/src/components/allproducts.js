import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
const AllProductLists = (props) => {
  const [itemCount, setItemCount] = React.useState(1);
  const { product } = props;
  console.log(product, "product check");

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
                            Items : {product && product.length}
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            <Badge color="secondary" badgeContent={itemCount}>
                              <ShoppingCartIcon />{" "}
                            </Badge>
                          </MDBTypography>
                        </div>
                        {product &&
                          product.map((product) => {
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
                                 
                                     <Button
                                        onClick={() => {
                                          setItemCount(itemCount + 1);
                                        }}
                                      >
                                        {" "}
                                        <AddIcon fontSize="small" />
                                      </Button>

                                    <MDBInput
                                      type="number"
                                      min="0"
                                      defaultValue={1}
                                      value={itemCount}
                                      size="sm"
                                    />
                                    {/* <MDBBtn   className="me-1" color="primary">
                                    Add to Cart
                                  </MDBBtn> */}
                                   <Button
                                        onClick={() => {
                                          setItemCount(
                                            Math.max(itemCount - 1, 0)
                                          );
                                        }}
                                      >
                                        {" "}
                                        <RemoveIcon fontSize="small" />
                                      </Button>
                                  </MDBCol>
                                  <MDBCol
                                    md="2"
                                    lg="2"
                                    xl="2"
                                    className="text-end"
                                  >
                                    <MDBTypography tag="h6" className="mb-0">
                                    </MDBTypography>
                                  </MDBCol>
                                  <MDBCol
                                    md="1"
                                    lg="1"
                                    xl="1"
                                    className="text-end"
                                  >
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
export default AllProductLists;
