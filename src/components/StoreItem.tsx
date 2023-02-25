import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "./../context/ShoppingCartContext";

interface StoreItemsProps {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  const {
    getItemQuantity,
    increaseCartquantity,
    decreaseCartquantity,
    reamoveFromCart,
  } = useShoppingCart();

  const qunatity: number = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className=" d-felx felx-column">
        <Card.Title className="d-flex  justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {qunatity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartquantity(id)}>
              {" "}
              +Add to cart{" "}
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => increaseCartquantity(id)}> + </Button>
                <div>
                  {" "}
                  <span className="fs-3"> {qunatity}</span> in cart
                </div>
                <Button onClick={() => decreaseCartquantity(id)}> - </Button>
              </div>
              <Button variant="danger" onClick={() => reamoveFromCart(id)}>
                Remove{" "}
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
