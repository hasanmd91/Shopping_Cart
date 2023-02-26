import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import CartItems from "./CartItems";
import { formatCurrency } from "./../utilities/formatCurrency";
import storeItems from "../Data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShoppingCart = ({ isOpen, setIsOpen }: ShoppingCartProps) => {
  const { cartClose, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={cartClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total :{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <Button onClick={() => setIsOpen(false)}> Place Order </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
