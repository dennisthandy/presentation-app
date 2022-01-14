import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import './App.css';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
