import { getMovies, IGetMoviesResult } from "api";
import { useQuery } from "react-query";
import { AnimatePresence } from "framer-motion";

import * as S from "./style";

import { makeImagePath } from "utils";
import { useState } from "react";

const offset = 6;

const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (data) {
      if (leaving) {
        return;
      }
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      toggleLeaving();
      setIndex((p) => (p === maxIndex ? 0 : p + 1));
    }
  };
  const toggleLeaving = () => {
    setLeaving((p) => !p);
  };

  return (
    <S.Wrapper>
      {isLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <>
          <S.Banner
            onClick={increaseIndex}
            bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <S.Title>{data?.results[0].title}</S.Title>
            <S.Overview>{data?.results[0].overview}</S.Overview>
          </S.Banner>
          <S.Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <S.Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
                transition={{ type: "tween", duration: 0.5 }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <S.Box
                      variants={boxVariants}
                      transition={{ type: "tween" }}
                      initial="normal"
                      whileHover="hover"
                      key={movie.id}
                      bgphoto={makeImagePath(movie.backdrop_path || "", "w500")}
                    >
                      <S.Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </S.Info>
                    </S.Box>
                  ))}
              </S.Row>
            </AnimatePresence>
          </S.Slider>
        </>
      )}
    </S.Wrapper>
  );
};

const rowVariants = {
  hidden: {
    x: globalThis.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -globalThis.outerWidth - 10,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
    y: 0,
  },
  hover: {
    y: -100,
    scale: 1.3,
    transition: {
      delay: 0.4,
      duration: 0.3,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      type: "tween",
    },
  },
};

export default Home;
