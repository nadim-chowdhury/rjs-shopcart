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
        {products.map((p) => (
          <div key={p.id} className="cart-items shadow p-4 rounded">
            <img src={p.image} alt={p.title} className="cart-items-img" />

            <h4 className="m-4">{p.title}</h4>
            <h5 className="m-4">${p.price}</h5>

            <button onClick={() => dispatch(remove(p.id))} className="button">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
