import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
