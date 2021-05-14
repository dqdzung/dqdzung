import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useCallback } from "react";
import { Form, FormControl, Container, Row, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Nav from "./components/Nav";
import Product from "./components/Product";
import MyPagination from "./components/Pagination";
import Loading from "./components/Loading";
import debounce from "lodash.debounce";

function App() {
	const [data, setData] = useState([]),
		[renderData, setRenderData] = useState([]),
		[active, setActive] = useState(1),
		[pageData, setPageData] = useState({}),
		[loading, setLoading] = useState(true),
		[term, setTerm] = useState("");

	const paginate = (array, currentPage, pageSize) => {
		const page = currentPage || 1,
			size = pageSize || 6,
			offset = (page - 1) * size,
			results = array.slice(offset).slice(0, size),
			totalPages = Math.ceil(array.length / size);

		return {
			page: page,
			per_page: size,
			pre_page: page - 1 ? page - 1 : null,
			next_page: totalPages > page ? page + 1 : null,
			total: array.length,
			total_pages: totalPages,
			data: results,
		};
	};

	const fetchData = async () => {
		try {
			const res = await axios({
				url: "https://run.mocky.io/v3/7af6f34b-b206-4bed-b447-559fda148ca5",
				method: "GET",
			});
			if (res) {
				setLoading(false);
				setData(res.data);

				const result = paginate(res.data, active);

				setPageData(result);
				setRenderData(result.data);
			}
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const handlePageChange = (number) => {
		setActive(number);
		const result = paginate(data, number);
		setPageData(result);
		setRenderData(result.data);
	};

	const debounceSearch = useCallback(
		debounce((string) => {
			console.log(string);
			setTerm(string);
		}, 500),
		[]
	);

	const handleSearch = (e) => {
		debounceSearch(e.target.value);
	};

	const ProductList = () => {
		let items = [];
		if (!term) {
			items = renderData.map((elem) => {
				return <Product key={elem.id} data={elem}></Product>;
			});
		} else {
			const regex = new RegExp(term, "gi");
			const results = data.filter((item) => item.name.match(regex));
			items = results.map((elem) => {
				return <Product key={elem.id} data={elem}></Product>;
			});
		}
		return items;
	};

	return (
		<div className="App">
			<Nav></Nav>
			<div className="main">
				<Container>
					<div className="search-container">
						<Form className="search-form mt-5 mb-5">
							<FormControl
								type="text"
								placeholder="Search Products"
								className="mr-sm-2"
								onChange={handleSearch}
							/>
							<FontAwesomeIcon className="icon" icon={faSearch} />
						</Form>
					</div>
					<Row>{loading ? <Loading /> : <ProductList />}</Row>
				</Container>
			</div>
			<Container className="d-flex justify-content-center mt-3">
				{!term && (
					<MyPagination
						data={pageData}
						onClick={handlePageChange}
					></MyPagination>
				)}
			</Container>
		</div>
	);
}

export default App;
