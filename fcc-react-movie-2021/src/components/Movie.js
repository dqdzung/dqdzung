import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_Size } from "../config";

import { useMovieFetch } from "../hooks/useMovieFetch";

import Grid from "./Grid";
import Spinner from "./Spinner";
import NoImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";

const Movie = () => {
	const { movieId } = useParams();

	const { state: movie, loading, error } = useMovieFetch(movieId);

	if (loading) return <Spinner />;
	if (error) return <div>Something Went Wrong...</div>;

	return (
		<>
			<BreadCrumb movieTitle={movie.title} />
			<MovieInfo movie={movie} />
		</>
	);
};

export default Movie;
