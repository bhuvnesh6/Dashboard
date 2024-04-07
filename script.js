Chart.defaults.global.defaultFontFamily = "Poppins";
let ctx = document.querySelector("#revenueChart");
ctx.height = 53;

let revChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "March"
    ],
    datasets: [
      {
        label: "Sales",
        borderColor: "blue",
        backgroundColor: "rgba(235, 247, 245, 0.5)",
        data: [1000, 900, 1100, 2000, 5000]
      },
      {
        label: "Revenue",
        borderColor: "red",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [2000000, 1800000, 2200000, 4000000, 10000000]

      }
    ]
  },
  options: {
    responsive: true,
    tooltips: {
      intersect: false,
      mode: "index"
    }
  }
});
