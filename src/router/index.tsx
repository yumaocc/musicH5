import React from "react";
import { Routes, Route } from "react-router-dom";
import route from "./config";
export default function index() {
  return (
    <Routes>
      {route.map((item) => (
        <Route key={item.path} element={item.element} path={item.path}></Route>
      ))}
    </Routes>
  );
}
