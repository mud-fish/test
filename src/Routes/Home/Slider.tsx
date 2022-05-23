import { IGetMoviesResult } from "api";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { makeImagePath } from "utils";
import * as S from "./style";

interface Props {
  queryKey: string;
  fetcher: () => Promise<IGetMoviesResult>;
  offset: number;
  genre: string;
}

const Slider = ({ queryKey, fetcher, offset, genre }: Props) => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", queryKey],
    fetcher
  );

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const navigate = useNavigate();

  const increaseIndex =
    (setter: React.Dispatch<React.SetStateAction<number>>) => () => {
      if (data) {
        if (leaving) {
          return;
        }
        const totalMovies = data.results.length - 1;
        const maxIndex = Math.floor(totalMovies / offset) - 1;
        toggleLeaving();
        setter((p) => (p === maxIndex ? 0 : p + 1));
      }
    };

  const toggleLeaving = () => {
    setLeaving((p) => !p);
  };

  const onBoxClicked = (id: number) => () => {
    navigate(`/${genre}/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
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
                    layoutId={movie.id + ""}
                    onClick={onBoxClicked(movie.id)}
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
            <S.NextButton key="nextButton" onClick={increaseIndex(setIndex)}>
              &gt;
            </S.NextButton>
          </AnimatePresence>
        </S.Slider>
      )}
    </>
  );
};

const rowVariants = {
  hidden: (custom: boolean) => ({
    x: globalThis.outerWidth + 10 * (custom ? 1 : -1),
  }),
  visible: {
    x: 0,
  },
  exit: (custom: boolean) => ({
    x: -globalThis.outerWidth - 10 * (custom ? 1 : -1),
  }),
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

export default Slider;
