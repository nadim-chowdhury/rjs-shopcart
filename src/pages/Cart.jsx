import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <BreadCrumb title="Cart" />

      <div className="cart">
        <div className="container-xxl">
          <div className="row">
            {products.length === 0 && (
              <h3 className="text-center bg-danger text-white py-5 mt-2 rounded-4">
                Currently you don't have any product in your cart
              </h3>
            )}

            {products.map((p) => (
              <div key={p.id} className="cart-items shadow p-4 rounded">
                <div className="d-flex align-items-center">
                  <img src={p.image} alt={p.title} className="cart-items-img" />
                  <h4 className="m-4">{p.title}</h4>
                </div>

                <div className="d-flex align-items-center">
                  <h5 className="m-4">${p.price}</h5>
                  <button
                    onClick={() => dispatch(remove(p.id))}
                    className="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
