import Navbar from "./Navbar";
import Dashboard from "./Dashboard.jsx";
import style from "./MainContent.module.css"

function MainContent() {
  return (
    <main>
      <div className={style.oddyMainContent}>
        <Navbar />
        <Dashboard />
      </div>
    </main>
  );
}

export default MainContent;
