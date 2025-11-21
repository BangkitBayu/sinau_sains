let ekChart;

function resetUI() {
  if (ekChart) ekChart.destroy();
  const calculate = document.getElementById("calculate");
  calculate.textContent = "";

  const input = document.querySelectorAll("input");

  input.forEach((i) => (i.value = ""));
}

document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
  if (ekChart) ekChart.destroy();

  const weight = parseFloat(document.getElementById("weight").value);
  const speed = parseFloat(document.getElementById("speed").value);

  const Ek = 0.5 * weight * speed ** 2;

  const latex = `\\[ Ep = \\frac{1}{2} \\times ${weight} \\times ${speed}^2 = ${Ek} J\\]`;

  const calculate = document.getElementById("calculate");
  calculate.textContent = latex;

  MathJax.typesetPromise();
  const ctx = document.getElementById("ekChart").getContext("2d");

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
