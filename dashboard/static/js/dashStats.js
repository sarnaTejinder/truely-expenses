const renderChart = (data, labels, type,lineCol = "#d3d3d3") => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Expense",
                    data: data,
                    backgroundColor: "rgba(177,156,217, 0.6)",

                    borderColor:
                        "rgba(177,156,217, 1)",
                    
                    borderWidth: 1,
                },
            ],
        },
        options: {
            title: {
                display: true,
                text: "Expenses per Date",
            },
            scales: {
                xAxes: [{gridLines: { color: lineCol }}],
                yAxes: [{gridLines: { color: lineCol }}]
            }
        },
    });
};

const getChartData = (url, type) => {
    fetch(url)
        .then((res) => res.json())
        .then((results) => {
            const expenses_data = results.expense_date_data;
            const [labels, data] = [
                Object.keys(expenses_data),
                Object.values(expenses_data),
            ];

            renderChart(data, labels, type);
        });
};

document.onload = getChartData("/expense_date_summary", "line");
Chart.defaults.global.defaultFontColor = "#000";
