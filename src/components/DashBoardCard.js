import "./DashBoardCard.css";

function DashboardCard(props) {
  return (
    <div className="col-lg-4 mt-3 col-sm-6 offset-sm-0 offset-lg-0 col-10 offset-1">
      <div className="card-dash-container">
        <p>{props.name}</p>
        <h2>{props.count}</h2>
      </div>
    </div>
  );
}

export default DashboardCard;
