import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface StoreItemsProps {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
  title: string;
}

const StoreItem = ({ id, name, price, imgUrl, title }: StoreItemsProps) => {
  const {
    getItemQuantity,
    increaseCartquantity,
    decreaseCartquantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity: number = getItemQuantity(id);
  return (
    <Card>
      <Link to={`/store/${id}`}>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="250px"
          style={{
            objectFit: "contain",
            padding: "5px",
            margin: "auto",
          }}
        ></Card.Img>
      </Link>
      <Card.Body className=" d-felx felx-column">
        <Card.Title className="d-flex  justify-content-between align-items-baseline mb-2">
          <span className="fs-5">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text>
          <span className="ms-2 text-muted">{title}</span>
        </Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
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
                  <span className="fs-3"> {quantity}</span> in cart
                </div>
                <Button onClick={() => decreaseCartquantity(id)}> - </Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(id)}>
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
