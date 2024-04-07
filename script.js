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
        data: [1000, , 900, 1100, 2000, 5000]
      },
      {
        label: "Revenue",
        borderColor: "red",
        backgroundColor: "rgba(233, 238, 253, 0.5)",
        data: [2M, 1.8M, 2.2M, 4M, 10M]

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
