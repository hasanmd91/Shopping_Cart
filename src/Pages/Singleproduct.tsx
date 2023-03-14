import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";
import storeItems from "../Data/items.json";
import { useParams, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ProductSingle {
  id: number | null;
  price: number | null;
  name: string;
  imgUrl: string;
  title: string;
}

const Singleproduct: React.FC = () => {
  const [loading, setisLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductSingle>({
    id: null,
    price: null,
    name: "",
    imgUrl: "",
    title: "",
  });

  const { increaseCartquantity } = useShoppingCart();

  const navigate = useNavigate();
  const params = useParams<{ singleproduct?: string }>();
  const itemId = params.singleproduct
    ? Number(params.singleproduct)
    : undefined;

  const memoizedItems = useMemo(() => storeItems, []);

  useEffect(() => {
    const findItem = async () => {
      const item = memoizedItems?.find((items) => items.id === itemId);
      setProduct(
        item || { id: null, price: null, name: "", imgUrl: "", title: "" }
      );
      setisLoading(false);
    };

    findItem();
  }, [itemId, memoizedItems]);

  if (loading)
    return (
      <Col className="text-center m-5">
        <Spinner
          animation="border"
          role="status"
          className="center"
          variant="info"
        >
          <span className="visually-hidden"> Loading...</span>
        </Spinner>
      </Col>
    );

  return (
    <Container>
      <Row className="m-5">
        <Col>
          <Image
            thumbnail
            src={product.imgUrl}
            style={{ maxHeight: "600px", maxWidth: "400px" }}
          />
        </Col>
        <Col>
          <h2 className="display-5 ">{product.name} </h2>
          <h5 className="display-7 text-muted">{product.title} </h5>
          <h5 className="display-7 text-muted">Price: {product.price}$ </h5>
          <p className="text-justify">
            Harry Potter is a series of seven fantasy novels written by British
            author J. K. Rowling. The novels chronicle the lives of a young
            wizard, Harry Potter, and his friends Hermione Granger and Ron
            Weasley, all of whom are students at Hogwarts School of Witchcraft
            and Wizardry. The main story arc concerns Harry's conflict with Lord
            Voldemort, a dark wizard who intends to become immortal, overthrow
            the wizard governing body known as the Ministry of Magic and
            subjugate all wizards and Muggles. The series was originally
            published in English by Bloomsbury in the United Kingdom and
            Scholastic Press in the United States. All versions around the world
            are printed by Grafica Veneta in Italy. A series of many genres,
            including fantasy, drama, coming-of-age fiction, and the British
            school story (which includes elements of mystery, thriller,
            adventure, horror, and romance), the world of Harry Potter explores
            numerous themes and includes many cultural meanings and references.
            According to Rowling, the main theme is death. Other major themes in
            the series include prejudice, corruption, and madness.
          </p>

          <div className="d-flex gap-3">
            <Button onClick={() => navigate(-1)}> Go Back </Button>
            <Button
              onClick={() =>
                product.id !== null && increaseCartquantity(product.id)
              }
            >
              Add To Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Singleproduct;
