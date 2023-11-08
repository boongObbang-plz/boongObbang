import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "pages/MainPage";
import NotMyMainPage from "pages/NotMyMainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/main" element={<NotMyMainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
