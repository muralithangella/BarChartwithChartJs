import "./styles.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "july",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const options = {
  labels,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Expense Tracker",
    },
  },
};
const data = {
  labels,
  datasets: [
    {
      label: "Expense 2022",
      data: [
        10000, 20000, 30000, 12000, 21000, 1000, 2000, 3000, 40300, 2300, 1200,
        9800,
      ],
      backgroundColor: "pink",
    },
    {
      label: "Expense 2023",
      data: [
        3400, 23000, 32000, 1200, 2000, 3000, 40000, 5000, 10020, 2100, 8700,
        4300,
      ],
      backgroundColor: "Gray",
    },
  ],
};

export default function App() {
  return (
    <div className="App">
      <h1>BarChart</h1>
      <Bar options={options} data={data} />
    </div>
  );
}
