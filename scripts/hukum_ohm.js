let ohmChart;

const selected = document.getElementById("rumus-dicari");
const arusContainer = document.getElementById("arus-container");
const besarTeganganContainer = document.getElementById(
  "besar-tegangan-container"
);
const hambatanContainer = document.getElementById("hambatan-container");
const tampilkanGrafikButton = document.getElementById("tampilkan-grafik");

selected.addEventListener("change", () => {
  const value = selected.value;
  console.log(value);
  if (value === "I") {
    besarTeganganContainer.classList.remove("d-none");
    hambatanContainer.classList.remove("d-none");
    arusContainer.classList.add("d-none");
  } else if (value === "V") {
    arusContainer.classList.remove("d-none");
    besarTeganganContainer.classList.add("d-none");
    hambatanContainer.classList.remove("d-none");
  } else if (value === "R") {
    besarTeganganContainer.classList.remove("d-none");
    hambatanContainer.classList.add("d-none");
    arusContainer.classList.remove("d-none");
  } else {
    besarTeganganContainer.classList.add("d-none");
    hambatanContainer.classList.add("d-none");
    arusContainer.classList.add("d-none");
  }
});

function createOpt(title, xLabel, yLabel) {
  return {
    title: title,
    xLabel: xLabel,
    yLabel: yLabel,
  };
}

function hitung() {
  const value = selected.value;
  if (value === "I") {
    let V = parseFloat(document.getElementById("v").value);
    let R = parseFloat(document.getElementById("r").value);
    let result = V / R;

    let title = "Arus (I)";
    let xLabel = "Hambatan Ohm";
    let yLabel = "Tegangan (V)";
    generateChart(result, createOpt(title, xLabel, yLabel));
  } else if (value === "V") {
    let I = parseFloat(document.getElementById("i").value);
    let R = parseFloat(document.getElementById("r").value);
    let result = I * R;

     let title = "Tegangan (V)";
    let xLabel = "Arus (I)";
    let yLabel = "Hambatan Ohm";
    generateChart(result, createOpt(title, xLabel, yLabel));
  } else if (value === "R") {
    let I = parseFloat(document.getElementById("i").value);
    let V = parseFloat(document.getElementById("v").value);
    let result = V / I;
    let title = "Hambatan Ohm";
    let xLabel = "Arus (I)";
    let yLabel = "Tegangan (V)";
    generateChart(result, createOpt(title, xLabel, yLabel));
  }
}

function generateChart(value, opt) {
  const ctx = document.getElementById("ohmChart").getContext("2d");
  if (ohmChart) ohmChart.destroy();

  ohmChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [opt.title],
      datasets: [
        {
          label: opt.title,
          data: [value],
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: true,
          text: opt.xLabel,
          beginAtZero: true,
        },
        y: {
          display: true,
          text: opt.yLabel,
          beginAtZero: true,
        },
      },
    },
  });
}

tampilkanGrafikButton.addEventListener("click", () => {
  hitung();
});
