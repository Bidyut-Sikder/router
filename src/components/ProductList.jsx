import React, {useEffect, useState} from "react";
import {AddCartRequest, ProductListRequest} from "../apiRequest/ApiRequest";
import toast, { Toaster } from "react-hot-toast";
import { GetToken } from "../utility/TokenHelper";

const ProductList = () => {
  let [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setLoader(true);
      let response = await ProductListRequest();
      setLoader(false);
      setProducts(response);
    })();
  }, []);

  const AddCart = async (id) => {
    setLoader(true);
    const token=GetToken()
    console.log(token)
    let msg = await AddCartRequest(id,token);
  
    setLoader(false);
    if (msg === "success") {
      toast.success("request success.");
    } else {
      toast.error("falild .");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((element, index) => {
            return (
              <div
                key={index}
                className="col-md-3"
                style={{textAlign: "center"}}
              >
                <div className="card p-2 m-2">
                  <div className="card-body">
                    <h6>{element.title}</h6>
                    <img
                      src={element.image}
                      className="mr-2"
                      width="200px"
                      alt=""
                    />
                    <p>{element.price}</p>
                    <button onClick={() => AddCart(element.id)}>
                      add cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Toaster />
      </div>
      {loader&&<h1>Loading </h1>}
    </>
  );
};

export default ProductList;
