// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import "./index.css";
// import { useState } from "react";
import React from "react";
// import RefreshHandler from "./RefreshHandler";

function App() {

  // const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  

  // const PrivateRoute = ({element}) => {
  //   return isAuthenticated ? element : <Navigate to="/login" />
  // } 


  return (
    <>
    {/* <div>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated } />
    <Routes>
      <Route path='/' element={<Navigate to="/login"/>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<PrivateRoute element={<Home/>} />} />
      {/* <Route path="/home" element={<Home/>} /> */}
    {/* </Routes> */}
  {/* </div>  */} 

  </>   

  );
}

export default App;
