import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query {
    allFilms {
      films {
        created
        episodeID
        director
        edited
        id
        producers
        releaseDate
        title
      }
    }
  }
`;
