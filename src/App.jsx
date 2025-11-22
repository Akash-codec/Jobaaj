import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
