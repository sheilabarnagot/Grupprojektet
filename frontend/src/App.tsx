import "bootstrap/dist/css/bootstrap.min.css";
import { Nav_bar } from "./Nav_bar.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav_bar />
      <Outlet />
    </>
  );
}

export default App;
