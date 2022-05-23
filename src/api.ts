const API_KEY = "1ca238f7d6367bf988f3841de997ee64";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  name?: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

export function getLatestMovies() {
  return fetch(
    `${BASE_PATH}/movie/latest?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

export function getTopRatedMovies() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

export function getUpcomingMovies() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`
  ).then((response) => response.json());
}

export function getPopularTvs() {
  return fetch(
    `${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}

export function getOnTheAirTvs() {
  return fetch(
    `${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=3`
  ).then((response) => response.json());
}

export function getTopRatedTvs() {
  return fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=3`
  ).then((response) => response.json());
}

export function getSearch(keyword: string = "") {
  return () =>
    fetch(
      `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
    ).then((response) => response.json());
}
