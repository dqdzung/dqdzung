import { useState } from "react";
import { useQuery } from "react-query";

import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import { AddShoppingCart } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";

import { Wrapper, StyledButton } from "./App.styles";

export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
	return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as CartItemType[]);
	const { data, isLoading, error } = useQuery<CartItemType[]>(
		"products",
		getProducts
	);
	console.log(data);

	const getTotalItems = (items: CartItemType[]) => {
		return items.reduce(
			(accumulator: number, item) => accumulator + item.amount,
			0
		);
	};

	const handleAddCart = (clickedItem: CartItemType) => {
		setCartItems((prev) => {
			const isItemInCart = prev.find((item) => item.id === clickedItem.id);

			if (isItemInCart) {
				return prev.map((item) =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}

			return [...prev, { ...clickedItem, amount: 1 }];
		});
	};

	const handleRemoveFromCart = (id: number) => {
		setCartItems((prev) =>
			prev.reduce((accumulator, item) => {
				if (item.id === id) {
					if (item.amount === 1) return accumulator;
					return [...accumulator, { ...item, amount: item.amount - 1 }];
				} else {
					return [...accumulator, item];
				}
			}, [] as CartItemType[])
		);
	};

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;

	return (
		<div className="App">
			<Wrapper>
				<Drawer
					anchor="right"
					open={cartOpen}
					onClose={() => setCartOpen(false)}
				>
					<Cart
						cartItems={cartItems}
						addToCart={handleAddCart}
						removeFromCart={handleRemoveFromCart}
					/>
				</Drawer>
				<StyledButton onClick={() => setCartOpen(true)}>
					<Badge badgeContent={getTotalItems(cartItems)} color="error">
						<AddShoppingCart />
					</Badge>
				</StyledButton>
				<Grid container spacing={3}>
					{data?.map((item) => (
						<Grid item key={item.id} xs={12} sm={4}>
							<Item item={item} handleAddCart={handleAddCart} />
						</Grid>
					))}
				</Grid>
			</Wrapper>
		</div>
	);
};

export default App;