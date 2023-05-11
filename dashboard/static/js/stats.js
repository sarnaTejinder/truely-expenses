let renderDough = (data, labels,type) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
            label: "Last 6 months expenses",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Expenses per category",
        },
      },
    });
  };
  
  let renderLine = (data, labels, type) => {
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
        },
    });
};

let getChartData = (url, type ,value) => {

    fetch(url)
        .then((res) => res.json())
        .then((results) => {
          let data
          if(value == 0){
             data = results.expense_category_data;
          }
          else
            data = results.expense_date_data;
      
            const [labels, dataa] = [
                Object.keys(data),
                Object.values(data),
            ];
            if(type == 0)
            renderDough(dataa, labels, "doughnut");
            else
            renderLine(dataa, labels, "line");
        });
};

  document.onload = getChartData("/expense_category_summary",0,0);

  const type = document.querySelector("#chartType")
  const cat = document.querySelector("#catType")
  const arr = ['/expense_category_summary','/expense_date_summary']
  const btn1 = document.querySelector(".renderChart")

  btn1.addEventListener('click',()=>{
    document.getElementById("myChart").remove()
    document.getElementById("chart-container").innerHTML = '<canvas id="myChart" width="400" height="400"></canvas>'
    getChartData(arr[cat.value],type.value,cat.value)
  })
  

  