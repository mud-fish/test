import {
  getPopularTvs,
  IGetMoviesResult,
  getOnTheAirTvs,
  getTopRatedTvs,
} from "api";
import { useQuery } from "react-query";
import { AnimatePresence } from "framer-motion";

import * as S from "../Home/style";
import { makeImagePath } from "utils";
import Modal from "../Home/Modal";
import Slider from "../Home/Slider";

const Tv = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["tv", "nowPlaying"],
    getPopularTvs
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
            fetcher={getPopularTvs}
            queryKey="popularTvs"
            genre="tv"
          />

          <Slider
            offset={6}
            fetcher={getTopRatedTvs}
            queryKey="topRatedTvs"
            genre="tv"
          />

          <Slider
            offset={6}
            fetcher={getOnTheAirTvs}
            queryKey="onTheAirTvs"
            genre="tv"
          />

          <AnimatePresence>
            <Modal data={data} />
          </AnimatePresence>
        </>
      )}
    </S.Wrapper>
  );
};

export default Tv;
