import "./App.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketRoom from "./Template/Cinema/Cinema";
import HomeTemplate from "./Template/HomeTemplate/HomeTemplate";
import Ticket from "./Template/Ticket/ticket";
import AdminPage from "./pages/AdminPage/AdminPage";
import LoginPage from "./pages/LoginPage/LoginPage";
export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/home" element={<HomeTemplate />} />
        <Route path="/" element={<TicketRoom />} />
        <Route path="/Template/Ticket/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
