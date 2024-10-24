import "./App.css";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketRoom from "./Template/Cinema/Cinema";
import HomeTemplate from "./Template/HomeTemplate/HomeTemplate";
import Ticket from "./Template/Ticket/ticket";
import AdminPage from "./pages/AdminPage/AdminPage";
export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/home" element={<HomeTemplate />} />
        <Route path="/" element={<TicketRoom />} />
        <Route path="/Template/Ticket/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
