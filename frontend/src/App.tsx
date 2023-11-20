import "bootstrap/dist/css/bootstrap.min.css";
import { Nav_bar } from "./Nav_bar.tsx";
import  Footer  from "./footer/Footer.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav_bar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
