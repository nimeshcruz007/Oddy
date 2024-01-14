import Report from "./Report.jsx";
import style from "./Dashboard.module.css";

const DATA = [
  {
    title: "Total Revenue",
    amount: 200,
    icon: "icon-home",
  },
  {
    title: "Invoices",
    amount: 10,
    icon: "icon-home",
  },
  {
    title: "Products",
    amount: 5,
    icon: "icon-home",
  },
];
function Dashboard() {
  return (
    <div className={style.oddyDashboard}>
      {DATA.map((item, index) => {
        return (
          <Report
            key={index}
            border={index < DATA.length - 1 ? true : false}
            details={item}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
