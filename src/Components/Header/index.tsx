/* style */
import * as S from "./style";

/* components */
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <S.Nav>
      <S.Col>
        <Logo />
        <S.Items>
          <S.Item>Home</S.Item>
          <S.Item>Tv Shows</S.Item>
        </S.Items>
      </S.Col>
      <S.Col>
        <Search />
      </S.Col>
    </S.Nav>
  );
};

export default Header;
