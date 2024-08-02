import React from "react";
import Header from "./Header";
import "./index.css";
import Overview from "./Overview";
import ApplyingResume from "./ApplyingResume";
import Footer from "./Footer";
import Body from "./Body";

function App() {
  return (
    <div className="">
      <Header />
      <Overview />
      <Body/>
      <ApplyingResume />
      <Footer />    
    </div>
  );
}

export default App;
