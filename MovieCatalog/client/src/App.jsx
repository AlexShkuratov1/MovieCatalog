import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from './pages/Home'
import { NotFound } from "./pages/NotFound";
import { Detail } from "./pages/Detail";
import Search from "./pages/Search";
export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};



