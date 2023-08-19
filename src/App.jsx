

import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from 'react-router-dom';

import Menu from "./components/Header/Nav";
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div>
      <Menu />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
