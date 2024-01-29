import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./page/About.page";
import NavbarComponent from "./components/Navbar.component";
import StorePage from "./page/Store.page";
import BookDetailPage from "./page/BookDetail.page";
import HomePage from "./page/Home.page";
import FooterComponent from "./components/Footer.component";
import ErrorPage from "./page/Error.page";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/detail/:slug" element={<BookDetailPage />} />
        <Route path="/detail/:slug" element={<BookDetailPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
