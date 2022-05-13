import Router from "./Router";
import GlobalStyle from "./GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeToggleButton from "ThemeToggleButton";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeToggleButton />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
