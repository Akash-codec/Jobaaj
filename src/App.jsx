import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <Navbar/>
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
