import { Chart, ChartItem } from "chart.js";
import { activitiesNote } from "./data";

const activitiesBox = document.querySelector(".Activities_note");

export const display_Chart_Line = async () => {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById("visitors") as ChartItem, {
    type: "line",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "visitor ",
          data: data.map((row) => row.count),
          borderWidth: 1,
        },
        {
          label: "Repos ",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderWidth: 1,
        },
      ],
    },
  });
};
export const display_Chart_Device = async () => {
  new Chart(document.getElementById("Devices") as ChartItem, {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
  });
};

export const displays_activities_note = () => {
  activitiesNote.map((notes: any) => {
    activitiesBox!.innerHTML += `<div class="note flex w-[10rem]  flex-col items-center bg-[#1D4ED8] text-white  py-1 ">
                    <p class="text-sm"> Total visitor</p>                               
                    <p class="font-bold text-2xl"> 300 </p>
                    <p class="text-sm">last Month</p>

                </div>`;
  });
};
