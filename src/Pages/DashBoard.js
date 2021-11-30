import { useEffect, useState } from "react";
import DashboardCard from "../components/DashBoardCard";

function Dashboard() {
  const [studCount, setStudCount] = useState({
    total: 0,
    firstYearCount: 0,
    secYearCount: 0,
    thirdYearCont: 0,
    fourthYearCount: 0,
    fifthYearCount: 0,
  });
  useEffect(() => getStudentDetails(), []);

  // get student details
  const getStudentDetails = async () => {
    const data = await fetch(
      "https://61a1cc426c3b400017e69da7.mockapi.io/students"
    ).then((res) => res.json());

    let count = [0, 0, 0, 0, 0, 0];

    for (let i in data) {
      count[0] = ++count[0];
      if (data[i].year === 1) {
        count[1] = ++count[1];
      } else if (data[i].year === 2) {
        count[2] = ++count[2];
      } else if (data[i].year === 3) {
        count[3] = ++count[3];
      } else if (data[i].year === 4) {
        count[4] = ++count[4];
      } else if (data[i].year === 5) {
        count[5] = ++count[5];
      }
    }
    setStudCount({
      total: count[0],
      firstYearCount: count[1],
      secYearCount: count[2],
      thirdYearCont: count[3],
      fourthYearCount: count[4],
      fifthYearCount: count[5],
    });
  };
  return (
    <div className="container dash-card">
      <div className="row">
        <DashboardCard name="TOTAL STUDENTS" count={studCount.total} />
        <DashboardCard
          name="STUDENTS IN FIRST YEAR"
          count={studCount.firstYearCount}
        />
        <DashboardCard
          name="STUDENTS IN SECOND YEAR"
          count={studCount.secYearCount}
        />
        <DashboardCard
          name="STUDENTS IN THIRD YEAR"
          count={studCount.thirdYearCont}
        />
        <DashboardCard
          name="STUDENTS IN FOURTH YEAR"
          count={studCount.fourthYearCount}
        />
        <DashboardCard
          name="STUDENTS IN FIFTH YEAR"
          count={studCount.fifthYearCount}
        />
      </div>
    </div>
  );
}

export default Dashboard;
