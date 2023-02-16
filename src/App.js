import ActivitiesPage from "./pages/ActivitiesPage"
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities/:id" element={<ActivitiesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
