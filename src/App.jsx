import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import BlogsPage from "./Pages/Blogs";
import SingleBlogPage from "./Pages/SingleBlog";
import ScrollToTop from "./Components/ScrollToTop";

  function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/blogs" element={<BlogsPage/>}/>
      <Route path="/blog/:id" element={<SingleBlogPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;