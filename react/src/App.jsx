import { createContext, useState } from "react";
import "./App.css";
import UseRefComponent from "./component/UseRefComponent";
import ContextProvider from "./component/ContextProvider";
import UserStatus from "./component/UserStatus";
import Home from "./component/Home";
import About from "./component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <UserStatus />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ContextProvider>

      {/* <Home></Home>*/}
    </>
  );
}

export default App;
