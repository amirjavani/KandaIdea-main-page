import React from "react";
import Header from "./Header";
import "./index.css";
import Overview from "./Overview";
import ApplyingResume from "./ApplyingResume";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Overview />
      <ApplyingResume />
      <Footer />    
    </div>
  );
}

export default App;
