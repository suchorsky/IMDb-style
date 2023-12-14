import React from "react";
import { Poller_One } from "next/font/google";
import { Film } from "@/types";
import styles from "./movie-card.module.scss";

const pollerOne = Poller_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

interface MovieCardProps {
  movie: Film;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className={styles.container}>
      <h3 className={pollerOne.className}>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
};

export default MovieCard;
