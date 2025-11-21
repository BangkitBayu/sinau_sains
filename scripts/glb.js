let glbChart;

function resetUI() {
  
  if (glbChart) glbChart.destroy();
  
  document.getElementById("calculate").innerHTML = "";
  const input = document.querySelectorAll("input");
  const span = document.querySelectorAll("span");

  input.forEach((i) => (i.value = "100"));
  span.forEach((s) => (s.textContent = "100"));
}
document.getElementById("year").textContent = new Date().getFullYear();

const speedSlider = document.getElementById("distance");
const timeSlider = document.getElementById("time");

speedSlider.addEventListener("input", () => {
  document.getElementById("distance-value").textContent = speedSlider.value;
  console.log(speedSlider.value)
});

timeSlider.addEventListener("input", () => {
  document.getElementById("time-value").textContent = timeSlider.value;
});

function generateChart() {
  const s = parseFloat(document.getElementById("distance").value);
  const t = parseFloat(document.getElementById("time").value);
  
  if (glbChart) glbChart.destroy();
  const Glb = s / t;
  
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
