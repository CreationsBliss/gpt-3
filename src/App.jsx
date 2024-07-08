import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Brand from "./components/Brand/Brand";
import WhatGPT3 from "./components/WhatGPT3/WhatGPT3";
import Features from "./components/Features/Features";
import Possibility from "./components/Possibility/Possibility";
import CTA from "./components/CTA/CTA";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="gradient__bg">        
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
