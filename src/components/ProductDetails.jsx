import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice";

const ProductDetails = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(item);

  const fetchData = () => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center product-details p-4">
          <img src={item.image} alt="img" />

          <div>
            <h3 className="my-4">{item.title}</h3>
            <h5 className="my-4" style={{ color: "#888" }}>
              {item.category}
            </h5>
            <h4 className="my-4">${item.price}</h4>
            <p className="my-4">{item.description}</p>

            <div className="special-product-content">
              <button
                onClick={() => dispatch(add(item))}
                className="button my-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
