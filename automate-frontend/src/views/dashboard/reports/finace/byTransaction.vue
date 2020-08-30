<template>
  <div class="grid grid-cols-12 gap-6">
    <div v-for="transaction in transactions" :key="transaction._id" class="intro-y col-span-12 md:col-span-6">
        <div class="box">
            <div class="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200">
                <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                    <div class="font-medium"> <a v-bind:href="'/account/billing/transaction/' + transaction._id">{{transaction.transaction_id}}</a></div>
                    <div class="text-gray-600 text-xs">{{transaction._id}}</div>
                </div>
                <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 pl-1 pr-1 lg:mt-0 color-info">
                  ${{transaction.transaction_spend}}
                </div>
                <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 pl-1 pr-1 lg:mt-0 color-danger">
                  ${{transaction.transaction_cost}}
                </div>
                <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 pl-1 pr-1 lg:mt-0 color-primary">
                  ${{transaction.transaction_spend-transaction.transaction_cost}}
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { GETACTIVETABDATA } from "../../../../store/actionType";
export default {
  name: "byTransaction",
  data() {
    return {
      transactions: [],
    }
  },
  mounted() {
    this.getTransactions();
  },
  methods: {
    getTransactions() {
      const sendingData = {
        activeTab: "profitability",
      };
      this.$store.dispatch(GETACTIVETABDATA, sendingData).then((res) => {
        if (res.status === 200) {
          this.transactions = res.data["transactions"];
          console.log("here response", this.transactions)
        }
      }); 
    }
  }
}
</script>

<style>

</style>