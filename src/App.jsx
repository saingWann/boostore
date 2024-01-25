import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookPage from "./page/book.page";
import AboutPage from "./page/About.page";
import NavbarComponent from "./components/Navbar.component";
import StorePage from "./page/Store.page";
import BookDetailPage from "./page/BookDetail.page";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:id" element={<BookDetailPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
