import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { cartClose } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={cartClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default ShoppingCart;
