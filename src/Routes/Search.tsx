import { getSearch } from "api";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { makeImagePath } from "utils";
import Modal from "./Home/Modal";
import Slider from "./Home/Slider";

import * as S from "./Home/style";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword") || "";
  const { data, isLoading } = useQuery(["search"], getSearch(keyword));

  return (
    <S.Wrapper>
      {isLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : data ? (
        <>
          <S.Banner
            bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <S.Title>{data?.results[0].title}</S.Title>
          </S.Banner>
          <Slider
            offset={6}
            fetcher={getSearch(keyword)}
            queryKey="search"
            genre="movies"
          />
        </>
      ) : null}
      <AnimatePresence>
        <Modal data={data} />
      </AnimatePresence>
    </S.Wrapper>
  );
};

export default Search;
