import Report from "./Report.jsx";
import style from "./Dashboard.module.css";

import { useBackend } from "../../context/BackendContext.jsx";

function Dashboard() {
  const { orders } = useBackend();

  const totInvoice = orders.length;
  const totAmt = orders.reduce((accumulator, currentvalue) => {
    return currentvalue.amount + accumulator;
  }, 0);

  const report = [
    {
      title: "Total Revenue",
      amount: totAmt,
      icon: "icon-home",
    },
    {
      title: "Invoices",
      amount: totInvoice,
      icon: "icon-home",
    },
    {
      title: "Products",
      amount: 5,
      icon: "icon-home",
    },
  ];
  return (
    <div className={style.oddyDashboard}>
      {report.map((item, index) => {
        return (
          <Report
            key={index}
            border={index < report.length - 1 ? true : false}
            details={item}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
