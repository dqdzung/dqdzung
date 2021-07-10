import "./App.css";

function App() {
	return <BookList />;
}

const BookList = () => {
	const books = [
		{
			id: 1,
			title: "I Love You To The Moon And Back",
			author: "Dr. Seuss",
			img: "https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg",
		},
		{
			id: 2,
			title: "The Last Thing He Told Me: A Novel",
			author: "Laura Dave",
			img: "https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg",
		},
		{
			id: 3,
			title: "The Midnight Library: A Novel",
			author: "Matt Haig",
			img: "https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg",
		},
	];

	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
};

const Book = ({ img, title, author }) => {
	const clickHandler = () => {
		alert("Hello World");
	};

	return (
		<article className="book">
			<img src={img} alt="" />
			<h1
				onClick={() => {
					alert(title);
				}}
			>
				{title}
			</h1>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>
				Example
			</button>
		</article>
	);
};

export default App;
