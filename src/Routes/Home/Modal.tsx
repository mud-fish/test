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

  const bigMovieMatch = useMatch(`/:genre/:movieId`);

  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === bigMovieMatch.params.movieId
    );

  console.log(clickedMovie);

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
                <S.BigTitle>
                  {clickedMovie.title || clickedMovie.name}
                </S.BigTitle>
                <S.BigOverview>{clickedMovie.overview}</S.BigOverview>
                <S.BigCoverReverse
                  style={{
                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                      clickedMovie.backdrop_path
                    )})`,
                  }}
                />
              </>
            )}
          </S.BigMovie>
        </>
      ) : (
        <h3>정보가 없습니다</h3>
      )}
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
