import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

interface StoreItemsProps {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  const qunatity: number = 1;
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
          {qunatity === 10 ? (
            <Button className="w-100"> +Add to cart </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button> + </Button>
                <div>
                  {" "}
                  <span className="fs-3"> {qunatity}</span> in cart
                </div>
                <Button> - </Button>
              </div>
              <Button variant="danger">Remove </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
