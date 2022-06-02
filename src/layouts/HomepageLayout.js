import React from "react";
import { Outlet } from "react-router-dom"
import Header from "./../components/Header"
import Footer from "../components/Footer";
import "./styles.scss"

const MainLayout = props => {
  return (
    <div className="full-height">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
