import {
  getMovies,
  IGetMoviesResult,
  getTopRatedMovies,
  getUpcomingMovies,
} from "api";
import { useQuery } from "react-query";
import { AnimatePresence } from "framer-motion";

import * as S from "./style";

import { makeImagePath } from "utils";
import Modal from "./Modal";
import Slider from "./Slider";

const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  return (
    <S.Wrapper>
      {isLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <>
          <S.Banner
            bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <S.Title>{data?.results[0].title}</S.Title>
            <S.Overview>{data?.results[0].overview}</S.Overview>
          </S.Banner>
          <Slider
            offset={6}
            fetcher={getMovies}
            queryKey="nowPlaying"
            genre="movies"
          />

          <Slider
            offset={6}
            fetcher={getTopRatedMovies}
            queryKey="topRatedMovies"
            genre="movies"
          />

          <Slider
            offset={6}
            fetcher={getUpcomingMovies}
            queryKey="upcomingMovies"
            genre="movies"
          />

          <AnimatePresence>
            <Modal data={data} />
          </AnimatePresence>
        </>
      )}
    </S.Wrapper>
  );
};

export default Home;
