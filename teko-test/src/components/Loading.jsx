import { Spinner, Container } from "react-bootstrap";

const Loading = () => {
	return (
		<Container className="loading-wrapper">
			<Spinner animation="border" variant="primary" />
			<Spinner animation="border" variant="secondary" />
			<Spinner animation="border" variant="success" />
			<Spinner animation="border" variant="danger" />
			<Spinner animation="border" variant="warning" />
			<Spinner animation="border" variant="info" />
		</Container>
	);
};

export default Loading;
