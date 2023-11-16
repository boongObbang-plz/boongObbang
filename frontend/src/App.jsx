import LoginPage from "@pages/LoginPage";
import Layout from "@components/layout";
import MainPage from "@pages/MainPage";
import NotMyMainPage from "@pages/NotMyMainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import PreSettingPage from "@pages/PreSettingPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LoginPage />} index />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/main" element={<NotMyMainPage />} />
            <Route path="/settings" element={<PreSettingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
