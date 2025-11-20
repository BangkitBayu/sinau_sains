let glbChart;

function resetUI() {
  if (glbChart) glbChart.destroy();
  calculate.textContent = "";

  const input = document.querySelectorAll("input");

  input.forEach((i) => (i.value = ""));
}
document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
  const s = parseFloat(document.getElementById("distance").value);
  const t = parseFloat(document.getElementById("time").value);
  const calculate = document.getElementById("calculate");
  const Glb = s / t;

  const latex = `\\[ V = \\frac{${s}}{${t}} = ${Glb} m/s\\]`;

  calculate.textContent = latex;

  MathJax.typesetPromise();

  const ctx = document.getElementById("glbChart").getContext("2d");

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
