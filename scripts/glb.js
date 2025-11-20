let glbChart;

document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
  const d = parseFloat(document.getElementById("distance").value);
  const t = parseFloat(document.getElementById("time").value);

  const Glb = d / t;

  const ctx = document.getElementById("glbChart").getContext("2d");

  if (glbChart) glbChart.destroy();

  glbChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Kecepatan (m/s)"],
      datasets: [
        {
          label: "V",
          data: [Glb],
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        x: {
          title: { display: true, text: "waktu (s)" },
          beginAtZero: true,
        },
      },
    },
  });
}
