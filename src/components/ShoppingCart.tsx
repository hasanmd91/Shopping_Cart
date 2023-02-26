import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import CartItems from "./CartItems";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { cartClose, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={cartClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems  key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
