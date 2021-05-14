import React from "react";
import { Col, Card } from "react-bootstrap";

const Product = (props) => {
	const { data } = props;
	return (
		<Col xs={6} md={4} className="product-wrapper mt-2">
			<Card>
				<div className="img-wrapper">
					<img src={data.imageUrl} alt={data.name} />
				</div>
				<Card.Body>
					<Card.Title>{data.name}</Card.Title>
					<Card.Title className="price">${data.price}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Product;
