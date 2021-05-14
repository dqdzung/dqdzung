import { Pagination } from "react-bootstrap";
import { useState, useEffect } from "react";

const MyPagination = (props) => {
	const [data, setData] = useState(props.data);

	useEffect(() => {
		setData(props.data);
	}, [props]);

	const { page, next_page, pre_page, total_pages } = data;

	let items = [];

	let forward =
		next_page + 1 < total_pages && next_page != null
			? next_page + 1
			: total_pages;
	let backward = pre_page - 1 > 0 ? pre_page - 1 : 1;

	for (let number = backward; number <= forward; number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === page}
				onClick={() => {
					props.onClick(number);
				}}
			>
				{number}
			</Pagination.Item>
		);
	}

	const handleClick = (page) => {
		props.onClick(page);
	};

	return (
		<Pagination>
			{pre_page && (
				<>
					<Pagination.First onClick={() => handleClick(1)} />
					<Pagination.Prev onClick={() => handleClick(pre_page)} />
				</>
			)}
			{items}
			{next_page && (
				<>
					<Pagination.Next onClick={() => handleClick(next_page)} />
					<Pagination.Last onClick={() => handleClick(total_pages)} />
				</>
			)}
		</Pagination>
	);
};

export default MyPagination;
