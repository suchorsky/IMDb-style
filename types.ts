export interface Movie {
  created: string;
  episodeID: number;
  director: string;
  edited: string;
  id: string;
  producers: string[];
  releaseDate: string;
  title: string;
}

export interface MovieFormData {
  episodeID: number;
  director: string;
  releaseDate: string;
  title: string;
}
