<script>
  import {
    Line
  } from 'vue-chartjs'

  export default {
    extends: Line,
    data() {
      return {
        chartData: {
          labels: ["2021-12-10 1.50 PM", "2021-12-10 8.54 AM", "2021-12-10 8.59 AM", "2021-12-16 10.31 AM"],
          datasets: [{
            label: 'Line Chart',
            fill: false,
            borderColor: 'black',
            backgroundColor: 'white',
            borderWidth: 1,
            data: [220, 220, 210, 90]
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true,
            labels: {
              fontColor: "black",
              fontSize: 14
            },
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>