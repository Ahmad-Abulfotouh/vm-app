import { BrowserRouter, Routes, Route } from "react-router-dom"
import {AppProvider} from "./context/AppContext";

// pages
import Home from './pages/Home'
import OrderList from './pages/OrderList'
import Wallet from './pages/Wallet'
import Order from './pages/Order'

// components
import TopNav from './components/TopNav'
import LowerNav from './components/LowerNav'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <TopNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </main>
        <LowerNav />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
