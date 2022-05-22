import { IGetMoviesResult } from "api";
import { useMatch, useNavigate } from "react-router-dom";
import { makeImagePath } from "utils";

import * as S from "./style";

interface Props {
  data?: IGetMoviesResult;
}

const Modal = ({ data }: Props) => {
  const navigate = useNavigate();
  const onOverlayClick = () => {
    navigate(-1);
  };

  const bigMovieMatch = useMatch("/movies/:movieId");
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === bigMovieMatch.params.movieId
    );
  console.log("[clickedMovie]", clickedMovie);

  return (
    <>
      {bigMovieMatch ? (
        <>
          <S.Overlay
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onOverlayClick}
          />
          <S.BigMovie layoutId={bigMovieMatch.params.movieId}>
            {clickedMovie && (
              <>
                <S.BigCover
                  style={{
                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                      clickedMovie.backdrop_path
                    )})`,
                  }}
                />
                <S.BigTitle>{clickedMovie.title}</S.BigTitle>
                <S.BigOverview>{clickedMovie.overview}</S.BigOverview>
              </>
            )}
          </S.BigMovie>
        </>
      ) : null}
    </>
  );
};

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default Modal;
