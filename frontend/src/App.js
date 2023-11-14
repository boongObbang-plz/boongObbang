import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
import MainPage from "pages/MainPage";
import Layout from "components/layout";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LoginPage />} index />
            <Route path="/mainpage" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;