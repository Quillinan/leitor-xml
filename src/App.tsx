import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResetStyle from "./styles/ResetStyle";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
