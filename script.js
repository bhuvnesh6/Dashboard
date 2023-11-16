Chart.defaults.global.defaultFontFamily = "Poppins";
let ctx = document.querySelector("#revenueChart");
ctx.height = 53;

let revChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Sept 1",
      "Sept 3",
      "Sept 6",
      "Sept 9",
      "Sept 12",
      "Sept 15",
      "Sept 18",
      "Sept 21",
      "Sept 24",
      "Sept 27",
      "Sept 30"
    ],
    datasets: [
      {
        label: "Reads",
        borderColor: "blue",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [0, 10, 50, 25, 60, 250, 50, 10, 500, 90, 1800]
      },
      {
        label: "Reads time",
        borderColor: "red",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [10, 60, 25, 100, 70, 250, 30, 550, 20, 60, 2000]

      }
    ]
  },
  options: {
    responsive: true,
    tooltips: {
      intersect: false,
      node: "index"
    }
  }
});
