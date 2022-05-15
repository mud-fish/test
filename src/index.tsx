import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
