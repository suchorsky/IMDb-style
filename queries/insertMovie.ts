import { gql } from "@apollo/client";

export const INSERT_MOVIE = gql`
  mutation InsertMovie(
    $episodeID: Number!
    $director: String!
    $releaseDate: String!
    $title: String!
  ) {
    insertMovie(
      episodeID: $episodeID
      director: $director
      releaseDate: $releaseDate
      title: $title
    ) {
      episodeID
      director
      releaseDate
      title
    }
  }
`;
