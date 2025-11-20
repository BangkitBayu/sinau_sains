let epChart; // menampung instance chart

document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
  const m = parseFloat(document.getElementById("weight").value);
  const g = parseFloat(document.getElementById("gravity").value);
  const h = parseFloat(document.getElementById("height").value);

  const Ep = m * g * h;

  const ctx = document.getElementById("epChart").getContext("2d");

  // jika chart sudah ada, hapus dulu supaya tidak double
  if (epChart) epChart.destroy();

  epChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Energi Potensial (Joule)"],
      datasets: [
        {
          label: "Ep",
          data: [Ep],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}


