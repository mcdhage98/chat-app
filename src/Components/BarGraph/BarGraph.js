import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import "./BarGraph.css";

export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

export default function BarGraph() {
  const [userData, setUserData] = useState({
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "Activity",
        data: [50, 90, 40, 50, 66, 38, 50],
        backgroundColor: [
          "#c8d8fe",
          "#0f4cff",
          "#c8d8fe",
          "#c8d8fe",
          "#c8d8fe",
          "#c8d8fe",
          "#c8d8fe",
        ],
        borderWidth: 0,
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  });

  const options = {
	maintainAspectRatio:false,
    scales: {
      x: {
        display: false,
        gridLines: {
          display: false,
        },
      },
      y: {
        display: false,
        gridLines: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
	<>
      <div className="barGraphHeader">
		<p className="barGraphLegend1">Current Week</p>
		<p className="barGraphLegend2"> Activity</p>
	  </div>

	<div className="chartWrapper">
	<Bar data={userData} options={options}></Bar>
	</div>
     
	  <div className="xAxis">
		<p>MON</p>
		<p className="active">TUE</p>
		<p>WED</p>
		<p>THU</p>
		<p>FRI</p>
		<p>SAT</p>
		<p>SUN</p>
	  </div>
    </>
  );
}
