import React from "react";
import TopNavBar from "./TopNavbar";
import Rightbar from "./Rightbar";
import Content from "./content";
import Sidebar from "./Sidebar";
import "./Home.css";
function Home() {
  return (
    <div>
      <TopNavBar />
      <div className="main-content">
        <Sidebar />
        <Content />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
