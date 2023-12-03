import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./container/Layout/Layout";
import YourFormComponent from "./components/Form/Form";
import TableComponent from "./components/Form/FormTable";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<YourFormComponent />} />
          <Route path="/table" element={<TableComponent />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
