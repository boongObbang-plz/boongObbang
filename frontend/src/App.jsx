import LoginPage from "@pages/LoginPage";
import Layout from "@components/layout";
import MainPage from "@pages/MainPage";
import NotMyMainPage from "@pages/NotMyMainPage";
import ErrorPage from "@pages/ErrorPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SettingPage from "@pages/SettingPage";
import KakaoRedirect from "@components/LoginPage/KakaoRedirect";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LoginPage />} index />
            <Route path="/login/oauth2/code/kakao" element={<KakaoRedirect />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/main/:uuid" element={<NotMyMainPage />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
