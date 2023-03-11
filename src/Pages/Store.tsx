import { Row, Col } from "react-bootstrap";
import storeItems from "../Data/items.json";
import StoreItem from "../components/ItemCard";

const Store = () => {
  return (
    <>
      <h1> Store </h1>
      <Row md={2} xs={1} lg={4} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
