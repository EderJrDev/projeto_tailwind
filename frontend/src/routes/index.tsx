import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardPage } from "pages";
import { WriteNowPage } from "pages/WriteNowPage";


export function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<DashboardPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/escrever-agora" element={<WriteNowPage />}></Route>
         </Routes>
      </BrowserRouter>
   )
}