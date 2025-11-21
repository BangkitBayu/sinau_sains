// let glbChart;

// function resetUI() {

//   if (glbChart) glbChart.destroy();

//   document.getElementById("calculate").innerHTML = "";
//   const input = document.querySelectorAll("input");
//   const span = document.querySelectorAll("span");

//   input.forEach((i) => (i.value = "100"));
//   span.forEach((s) => (s.textContent = "100"));
// }
// document.getElementById("year").textContent = new Date().getFullYear();

// const speedSlider = document.getElementById("distance");
// const timeSlider = document.getElementById("time");

// speedSlider.addEventListener("input", () => {
//   document.getElementById("distance-value").textContent = speedSlider.value;
// });

// speedSlider.addEventListener("change", () => {
//   document.getElementById("distance-value").textContent = speedSlider.value;
// });

// timeSlider.addEventListener("input", () => {
//   document.getElementById("time-value").textContent = timeSlider.value;
// });

// timeSlider.addEventListener("change", () => {
//   document.getElementById("time-value").textContent = timeSlider.value;
// });

// function generateChart() {
//   const s = document.getElementById("distance").value;
//   const t = document.getElementById("time").value;

//   if (glbChart) glbChart.destroy();
//   const Glb = parseFloat(s) / parseFloat(t);

//   const latex = `\\[ V = \\frac{${s}}{${t}} = ${Glb.toFixed(2)} m/s\\]`;

//   const calculate = document.getElementById("calculate");
//   calculate.innerHTML = latex;

//   MathJax.typesetPromise();

//   const ctx = document.getElementById("glbChart").getContext("2d");

//   glbChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: ["Kecepatan (m/s)"],
//       datasets: [
//         {
//           label: "V",
//           data: [Glb],
//         },
//       ],
//     },
//     options: {
//       indexAxis: "y",
//       scales: {
//         x: {
//           title: { display: true, text: "waktu (s)" },
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }

let glbChart;

function resetUI() {
  if (glbChart) glbChart.destroy();

  document.getElementById("calculate").innerHTML = "";

  const inputs = document.querySelectorAll("input[type='range']");
  const spans = document.querySelectorAll("span[data-value]");

  inputs.forEach((i) => {
    i.value = i.min || 0;
  });

  spans.forEach((s) => {
    s.textContent = s.dataset.default || 0;
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const speedSlider = document.getElementById("distance");
const timeSlider = document.getElementById("time");

speedSlider.addEventListener("input", () => {
  document.getElementById("distance-value").textContent = speedSlider.value;
});
timeSlider.addEventListener("input", () => {
  document.getElementById("time-value").textContent = timeSlider.value;
});

function generateChart() {
  const s = parseFloat(document.getElementById("distance").value);
  const t = parseFloat(document.getElementById("time").value);

  if (glbChart) glbChart.destroy();

  const Glb = s / t;

  const latex = `\\[ V = \\frac{${s}}{${t}} = ${Glb.toFixed(
    2
  )}\ \text{m/s} \\]`;

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
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          title: { display: true, text: "m/s" },
        },
      },
    },
  });
}
