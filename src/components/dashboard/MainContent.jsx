import Navbar from "./Navbar";
import Dashboard from "./Dashboard.jsx";
import style from "./MainContent.module.css";
import { BackendDataProvider } from "../../context/BackendContext.jsx";

function MainContent() {
  return (
    <main>
      <div className={style.oddyMainContent}>
        <BackendDataProvider>
          <Navbar />
          <Dashboard />
        </BackendDataProvider>
      </div>
    </main>
  );
}

export default MainContent;
