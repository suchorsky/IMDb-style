import React from "react";
import createApolloClient from "@/apollo-client";
import MovieCard from "@/components/movie-card/movie-card";
import { GET_ALL_MOVIES } from "@/queries/getAllMovies";
import { Movie } from "@/types";
import PageLayout from "@/components/page-layout/page-layout";
import styles from "@/styles/List.module.scss";

interface ListProps {
  movies: Movie[];
}

export default function List({ movies }: ListProps) {
  return (
    <PageLayout>
      <div className={styles.container}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_ALL_MOVIES });

  return {
    props: {
      movies: data.allFilms.films,
    },
  };
}
