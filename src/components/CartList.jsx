import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CartListRequest, RemoveCartRequest } from '../apiRequest/ApiRequest';


const CartList = () => {
    let [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);
  const [refresh,setRefresh]=useState(false)
    useEffect(() => {
      (async () => {
        setLoader(true);
        let response = await CartListRequest();
        setLoader(false);
        setProducts(response);
      })();
    }, [refresh]);
  
    const removeCart = async (id) => {
        console.log(id)
      setLoader(true);
    //   const token=GetToken()
    //   console.log(token)
      let msg = await RemoveCartRequest(id);
    
      setLoader(false);
      if (msg === "success") {
     
        toast.success("request success.");
        setRefresh(id)
        console.log('rendered')
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
                      <h6>{element.product.title}</h6>
                      <img
                        src={element.product.image}
                        className="mr-2"
                        width="200px"
                        alt=""
                      />
                      <p>{element.product.price}</p>
                      <button onClick={() => removeCart(element.product.id)}>
                        remove
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

export default CartList;