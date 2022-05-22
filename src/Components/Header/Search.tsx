import { motion, useAnimation } from "framer-motion";
import * as S from "./style";

interface Props {
  onClick: () => void;
  searchOpen: boolean;
  inputAnimation: any;
}

const Search = ({ onClick, searchOpen, inputAnimation }: Props) => {
  return (
    <S.Search>
      <motion.svg
        onClick={onClick}
        animate={{ x: searchOpen ? -200 : 10 }}
        transition={{ type: "keyframes" }}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </motion.svg>
      <S.Input
        initial={{ scaleX: 0 }}
        animate={inputAnimation}
        placeholder="Search for movie or tv show..."
      />
    </S.Search>
  );
};

export default Search;
