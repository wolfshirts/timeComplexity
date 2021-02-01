

let evalTheCode = function() {
  //Object structure is, first key 0
  //contains an object, which starts at 0,
  //and contains the first test case, and so on.
/*

*/


  console.log('clicked run');
  $('#output').empty();
  let $codeArea = $("#code_area");
  let codeToBeTested = $codeArea.val();
  try {
    let t0 = performance.now();
    eval(codeToBeTested);
    let t1= performance.now();
    let outcome = Math.floor(t1-t0);//parseFloat(t1 - t0).toFixed(2);
    window.runs += 1;
    window.chart.data.labels.push(`Execution ${window.runs}`);
    window.chart.data.datasets[0]['data'].push(outcome);
    window.chart.update();
    $('#output').append(`<p>Took ${outcome} milliseconds.</p>`);
  } catch(e) {
    $('#output').append(`<p class="error">${e}</p>`)
  }
};

$(document).ready(()=>{
  console.log('doc ready');
  let $run = $('#run_button').on('click', evalTheCode);
  let ctx = document.getElementById('myChart').getContext('2d');

  window.chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [''],
        datasets: [{
            label: 'Execution Times',
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0, 255, 0)',
            data: []
        }]
    },

    // Configuration options go here
    options: {}
  });
  window.runs = 0;
});