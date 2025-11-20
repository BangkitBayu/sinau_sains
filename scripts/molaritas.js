let MolaChart;

document.getElementById("year").textContent = new Date().getFullYear();

function generateChart() {
    const n = parseFloat(document.getElementById("mol").value);
    const v = parseFloat(document.getElementById("volume").value);

    const molaritas = n / v;

    const ctx = document.getElementById("MolaChart").getContext("2d");

    if (MolaChart) MolaChart.destroy();

    MolaChart = new Chart(ctx,{
        type : "bar",
        data : {
            labels : ["Mol Zat (Mol)"],
            datasets : [{
                label : "Molaritas (M)",
                data : [molaritas],
            }]
        },
        options: {
            responsive : true,
            scales : {
                y: {
                  title: { display: true, text: 'Volume Larutan (V)' },
                  beginAtZero: true
                }
            }
        }
    })
}
