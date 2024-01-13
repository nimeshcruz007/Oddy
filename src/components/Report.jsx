import style from "./Report.module.css";

function Report({ details, border }) {
  return (
    <div className={`${style.reportModule} ${border ? style.border : ""}`}>
      <i className={details.icon}></i>
      <span>
        <h5>{details.title}</h5>
        <h2>
          {details.amount < 10 ? "0,0" : details.amount < 100 ? "0," : ""}
          {details.amount}
        </h2>
      </span>
    </div>
  );
}

export default Report;
