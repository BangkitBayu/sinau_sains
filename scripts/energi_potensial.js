let epChart; // menampung instance chart

function resetUI() {
  if (epChart) epChart.destroy();
  const calculate = document.getElementById("calculate");
  calculate.textContent = "";

  const input = document.querySelectorAll("input");

  input.forEach((i) => (i.value = ""));
}

document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
  const m = parseFloat(document.getElementById("weight").value);
  const g = parseFloat(document.getElementById("gravity").value);
  const h = parseFloat(document.getElementById("height").value);

  const Ep = m * g * h;

  const latex = `\\[ Ep = ${m} \\times ${g} \\times ${h} = ${Ep} J\\]`;
  if (epChart) epChart.destroy();

  const calculate = document.getElementById("calculate");

  calculate.innerHTML = latex;

  MathJax.typesetPromise();

  const ctx = document.getElementById("epChart").getContext("2d");

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
