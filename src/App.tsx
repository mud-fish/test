import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/* Routes */
import Home from "Routes/Home";
import Search from "Routes/Search";
import Tv from "Routes/Tv";

/* Components */
import Header from "Components/Header";

/* FC */
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Home />} />
          <Route path="/tv/*" element={<Tv />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

/* Style */

export default App;
