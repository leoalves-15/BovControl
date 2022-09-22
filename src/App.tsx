import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Task from "./pages/Task";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
        <GlobalStyle />
      </>
    </BrowserRouter>
  );
}

export default App;
