import styled from "styled-components";
import Button from "./Button";
import { getRandom } from "./randomNum";
import { useContext, useEffect, useState } from "react";
import fillerImg from "../imgs/Pennants-Various-Sizes.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import Skeleton from "react-loading-skeleton";
import { outOfStock } from "../data/outOfStock";

const ProductCard = ({ val, currentRate }) => {
  const navigate = useNavigate();
  const [insideText, setInsideText] = useState();
  const { action } = useContext(CartContext);
  const [randomNum] = useState(getRandom(100, 1500));
  const [url, setUrl] = useState();
  const [show, setShow] = useState(false);
  const [notInStock, setNotInStock] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
    action.receiveNewCartItem({
      cart: { product: val, quantity: 1 },
    });
  };

  useEffect(() => {
    if (val.permalink.split("/").length > 7) {
      setUrl(
        `/products/${val.permalink.split("/")[4]}/${
          val.permalink.split("/")[5]
        }/${val.slug}`
      );
    } else {
      setUrl(`/products/${val.permalink.split("/")[4]}/${val.slug}`);
    }

    if (val.type === "variable") {
      setInsideText("select options");
    } else {
      setInsideText("Add to cart");
    }
  }, [val]);

  useEffect(() => {
    if (val.stock_status !== "instock") {
      setNotInStock(true);
      setInsideText("Out of Stock");
    }
  }, [val]);

  return (
    <Wrapper>
      <ImgContainer>
        {!notInStock ? (
          <NavItem
            to={url}
            state={{
              id: `${val.id}`,
              slug: `${val.slug}`,
              currencyCode: `${currentRate.currencyCode}`,
              currentRate: `${currentRate.rate}`,
              product: `${JSON.stringify(val)}`,
            }}
            onClick={(e) => {
              localStorage.setItem(`${val.slug}`, JSON.stringify(val));
            }}
            onMouseDown={(e) => {
              localStorage.setItem(`${val.slug}`, JSON.stringify(val));
            }}
          >
            {val.images.length ? (
              <Img src={val.images[0].src} />
            ) : (
              <>
                <Img src={fillerImg} />
              </>
            )}
          </NavItem>
        ) : val.images.length ? (
          <Img src={val.images[0].src} />
        ) : (
          <>
            <Img src={fillerImg} />
          </>
        )}
      </ImgContainer>
      <Container>
        <P>{val.name}</P>
      </Container>
      <Container>
        {val.price ? (
          <P>
            <strong>
              {currentRate.currencyCode} $
              {(val.price * currentRate.rate).toFixed(2)}
            </strong>
          </P>
        ) : (
          <P>
            <strong>
              {currentRate.currencyCode} $
              {(randomNum * currentRate.rate).toFixed(2)}
            </strong>
          </P>
        )}
      </Container>
      <Container style={{ justifyContent: show ? "space-between" : "" }}>
        {url ? (
          <Button
            buttonUrl={url}
            buttonText={insideText}
            buttonSlug={val.slug}
            currentRate={currentRate}
            id={val.id}
            product={val}
            notInStock={notInStock}
          />
        ) : (
          <>
            <StyledButton
              disabled={notInStock}
              onClick={handleClick}
              style={{
                padding: show && "5px 10px",
              }}
            >
              {insideText}
            </StyledButton>
            <StyledButton
              disabled={notInStock}
              style={
                !show
                  ? { display: "none" }
                  : { height: "60px", padding: "5px 10px" }
              }
              onClick={(e) => {
                e.preventDefault();
                navigate("/cart");
              }}
            >
              View Cart
            </StyledButton>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
`;

const Img = styled.img`
  width: 250px;
  max-width: 100%;
  height: 250px;
  max-height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

const P = styled.p`
  text-align: center;
  width: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 18%;
  height: 30%;
  margin: 3%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 24px;
  }
  @media screen and (max-width: 1024px) {
    width: 40%;
  }
`;
export default ProductCard;
