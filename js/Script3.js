
const ctx = document.getElementById('myChart');


new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  
  options: {
    scales: {
        y: {
        beginAtZero: true,
        ticks:{
            display:false
        },
        grid: {
            display: false,
            drawTicks: false
        }
      }

    }
  }
});
new Chart(ctx,config);


  function revealMessage(){
    document.getElementById("hiddenMessage").style.display = 'block';
}

fetch('http//:localhost:8080/bank_data')
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))










