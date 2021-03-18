import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Title as="h3">${product.price}</Card.Title>
      </Card.Body>
    </Card>
  );
};

// To give default color value
Rating.defaultProps = {
  color: "#f8e825",
};

// The first proptype is supposed to be in small letter !PropTypes
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Product;
