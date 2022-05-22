import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useAnimation, useViewportScroll } from "framer-motion";

/* style */
import * as S from "./style";

/* components */
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((p) => !p);
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);

  return (
    <S.Nav variants={navVariants} initial={"top"} animate={navAnimation}>
      <S.Col>
        <Logo />
        <S.Items>
          <S.Item>
            <Link to="/">
              Home
              {homeMatch ? <S.Circle layoutId="nav-circle" /> : null}
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/tv">
              Tv Shows
              {tvMatch ? <S.Circle layoutId="nav-circle" /> : null}
            </Link>
          </S.Item>
        </S.Items>
      </S.Col>
      <S.Col>
        <Search
          onClick={toggleSearch}
          searchOpen={searchOpen}
          inputAnimation={inputAnimation}
        />
      </S.Col>
    </S.Nav>
  );
};

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

export default Header;
