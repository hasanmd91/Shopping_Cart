import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../Data/items.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";

type CartItemsProps = {
  id: number;
  quantity: number;
};

const CartItems = ({ id, quantity }: CartItemsProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className=" d-flex align-items-center"
    >
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 ? (
            <span className="text-muted" style={{ fontSize: " 0.65rem" }}>
              {quantity}x
            </span>
          ) : null}
        </div>
        <div className="text-muted" style={{ fontSize: " 0.65rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div> {formatCurrency(item.price * quantity)} </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItems;
