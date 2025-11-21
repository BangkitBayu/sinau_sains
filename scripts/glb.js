let glbChart;

function resetUI() {
  if (glbChart) glbChart.destroy();

  document.getElementById("calculate").innerHTML = "";
  const input = document.querySelectorAll("input");

  input.forEach((i) => (i.value = ""));
}
document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
  const s = document.getElementById("distance").value;
  const t = document.getElementById("time").value;

  if (glbChart) glbChart.destroy();
  const Glb = parseFloat(s) / parseFloat(t);

  const latex = `\\[ V = \\frac{${s}}{${t}} = ${Glb.toFixed(2)} m/s\\]`;

  const calculate = document.getElementById("calculate");
  calculate.innerHTML = latex;

  MathJax.typesetPromise();

  const ctx = document.getElementById("glbChart").getContext("2d");

  glbChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Kecepatan (m/s)"],
      datasets: [
        {
          label: "V",
          data: [Glb.toFixed(2)],
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
