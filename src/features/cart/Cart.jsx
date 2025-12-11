import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-3 py-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-8 text-xl font-semibold">Your cart, %NAME%</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b border-b-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-3">
        <Button type="primary">
          <Link to="/order/new">Order pizzas</Link>
        </Button>
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
