import { Card } from "react-bootstrap";

interface StoreItemsProps {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  console.log(imgUrl);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className=" d-felx felx-column">
        <Card.Title className="d-flex  justify-content-space-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
