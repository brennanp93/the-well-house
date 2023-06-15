import { useState } from "react";
import {RouterProvider, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        {/* <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
