import React from "react";
import "./App.css";
import "./index.css";
import { CTA, Brand, Navbar } from "./components";
import {
  Blog,
  Footer,
  Possibility,
  Features,
  WhatGPT3,
  Header,
  ScrollToTop,
} from "./containers";
function App() {
  return (
    <div className="App ">
      <div className="gradient__bg ">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
