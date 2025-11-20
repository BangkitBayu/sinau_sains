let glbChart;

function resetUI() {
  if (glbChart) glbChart.destroy();
  calculate.textContent = "";

  const input = document.querySelectorAll("input");
  const span = document.querySelectorAll("span")

  input.forEach((i) => (i.value = "100"));
  span.forEach((s) => (s.textContent = "100"));
}
document.getElementById("year").textContent = new Date().getFullYear();

const s = document.getElementById("distance")
const t = document.getElementById("time")

s.addEventListener("input" , () => {
  document.getElementById("distance-value").textContent = s.value;
})

t.addEventListener("input" , () => {
  document.getElementById("time-value").textContent = t.value;
})

function generateChart() {
  const s = parseFloat(document.getElementById("distance").value);
  const t = parseFloat(document.getElementById("time").value);
 if (glbChart) glbChart.destroy();

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
