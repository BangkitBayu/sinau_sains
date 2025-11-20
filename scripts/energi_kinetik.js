let ekChart;

document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
  const weight = parseFloat(document.getElementById("weight").value);
  const speed = parseFloat(document.getElementById("speed").value);

  const Ek = 0.5 * weight * speed ** 2;

  const ctx = document.getElementById("ekChart").getContext("2d");

  if (ekChart) ekChart.destroy();

  ekChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Massa (kg)"],
      datasets: [
        {
          label: "Energi Kinetik (J)",
          data: [Ek],
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "y",
      scales: {
        x: {
          title: { display: true, text: "Kecepatan (m/s)" },
          beginAtZero: true,
        },
      },
    },
  });
}
