<template>
  <div>
    <canvas id="myChart" height="120px"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import { GETACTIVETABDATA } from "../../../../store/actionType";
export default {
  name: "profitability",
  data() {
    return {
      chart: null,
      chartOptions: {},
    };
  },
  mounted() {
    this.getProfitability();
  },
  methods: {
    getProfitability() {
      const sendingData = {
        activeTab: "profitability",
      };
      this.$store.dispatch(GETACTIVETABDATA, sendingData).then((res) => {
        if (res.status === 200) {
          this.profitability = res.data["chart_profitability"];
          const labels = [];
          for (let item of this.profitability.labels) {
            labels.push(item.substring(1, item.length-1))
          }
          this.chatOptions = {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  type: "line",
                  label: "Gross Profit",
                  borderColor: "#23A455",
                  backgroundColor: "#23A455",
                  fill: false,
                  borderWidth: 2,
                  data: this.profitability.gross,
                },
                {
                  type: "line",
                  label: "Revenue",
                  borderColor: "#5bc0de",
                  backgroundColor: "#5bc0de",
                  fill: false,
                  borderWidth: 2,
                  data: this.profitability.revenue,
                },
                {
                  type: "line",
                  label: "Cost",
                  backgroundColor: "#bb2124",
                  borderColor: "#bb2124",
                  fill: false,
                  borderWidth: 2,
                  data: this.profitability.costs,
                },
              ],
            },
            options: {
              responsive: true,
              title: {
                display: true,
                text: "Revenue, Costs and Gross Profit",
              },
              tooltips: {
                mode: "index",
                intersect: true,
              },
            },
          };
          this.createChart();
        }
      });
    },
    createChart() {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, this.chatOptions);
    },
  },
};
</script>

<style>
</style>