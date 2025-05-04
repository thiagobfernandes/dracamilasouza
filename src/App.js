import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Tratamento } from "./pages/Tratamento/Tratamento";
import { Footer, Navbar } from "./components";
import { Saude } from "./pages/Saude/Saude";
import GenericItemPage from "./pages/GenericPage/Generic";
import { LanguageProvider } from "./context/languageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Router>
          <Navbar /> {/* Agora o Navbar está dentro do LanguageProvider */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tratamentos" element={<Tratamento />} />
            <Route path="/saude" element={<Saude />} />
            <Route path="/item/:id" element={<GenericItemPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
