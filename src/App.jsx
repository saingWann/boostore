import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./page/About.page";
import NavbarComponent from "./components/Navbar.component";
import StorePage from "./page/Store.page";
import BookDetailPage from "./page/BookDetail.page";
import HomePage from "./page/Home.page";
import FooterComponent from "./components/Footer.component";
import ErrorPage from "./page/Error.page";
import BookDataContext from "./context/BookData.context";

const App = () => {
  return (
    <BookDataContext>
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
    </BookDataContext>
  );
};

export default App;
