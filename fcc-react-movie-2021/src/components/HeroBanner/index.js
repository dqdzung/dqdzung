import React from "react";

import { Wrapper, Content, Text } from "../HeroBanner/HeroBanner.styles";

const HeroBanner = ({ image, title, text }) => (
	<Wrapper image={image}>
		<Content>
			<Text>
				<h1>{title}</h1>
				<p>{text}</p>
			</Text>
		</Content>
	</Wrapper>
);

export default HeroBanner;
