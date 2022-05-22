import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useMatch } from "react-router-dom";

/* style */
import * as S from "./style";

/* components */
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");

  const toggleSearch = () => setSearchOpen((p) => !p);

  return (
    <S.Nav>
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
        <Search onClick={toggleSearch} searchOpen={searchOpen} />
      </S.Col>
    </S.Nav>
  );
};

export default Header;
