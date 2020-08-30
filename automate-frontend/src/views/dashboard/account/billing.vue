<template>
  <div class="app dashboard-home">
    <div class="flex">
      <home-header></home-header>
      <div class="content">
        <div class="top-bar">
          <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="/home" class>Dashboard</a>
            <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a href="/account" class="breadcrumb--active">Account</a>
           <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a href="/account/billing" class="breadcrumb--active">Billing</a>
          </div>
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-6">
            <!-- BEGIN: General Report -->

            <div class="col-span-12 mt-3">
              <div class="intro-y flex items-center h-10">
                <h2 class="text-lg font-medium truncate mr-5">Billing History</h2>
                <a href class="ml-auto flex text-theme-1">
                  <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon>Reload Data
                </a>
              </div>

              <!-- BEGIN: Subscriptions -->

              <div v-if="subscriptions.length > 0" class="col-span-12 mt-6">
                <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                  <table class="table table-report sm:mt-2">
                    <thead>
                      <tr>
                        <th class="whitespace-no-wrap">Monthly Subscriptions</th>
                        <th v-if="user.user_type >= 9" class="text-center whitespace-no-wrap">Name</th>
                        <th class="text-center whitespace-no-wrap">Last Charge</th>
                        <th class="text-center whitespace-no-wrap">Next Charge</th>
                        <th class="text-center whitespace-no-wrap">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="subscription in subscriptions"
                        :key="subscription._id"
                        class="intro-x"
                      >
                        <td>
                          <a v-bind:href="'/subscription/' + subscription._id">{{subscription._id}}</a>
                        </td>
                        <td
                          v-if="user.user_type >= 9"
                        >{{subscription.user.user_fname}} {{subscription.user.user_lname}}</td>
                        <td>
                          <div
                            class="flex items-center justify-center"
                          >{{subscription.subscription_last_charge}}</div>
                        </td>
                        <td>
                          <div
                            class="flex items-center justify-center"
                          >{{subscription.subscription_next_charge}}</div>
                        </td>
                        <td class="table-report__action w-56">
                          <div class="flex justify-center items-center">
                            <a v-bind:href="'/subscription/' + subscription._id">
                              <button
                                class="button button--sm text-white button-primary mr-2"
                              >Manage</button>
                            </a>
                            <div :class="'cancel-subscription-button-' + subscription._id">
                              <button
                                class="button button--sm text-white button-danger mr-2"
                                onclick="return cancel_subscription_areyousure('<%=subscription._id%>')"
                              >Delete</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- BEGIN: Transactins -->
              <div class="col-span-12 mt-6">
                <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                  <table v-if="transactions.length > 0" class="table table-report sm:mt-2">
                    <thead>
                      <tr>
                        <th class="whitespace-no-wrap">Transactions</th>
                        <th class="text-center whitespace-no-wrap">ID</th>
                        <th class="text-center whitespace-no-wrap">Cost</th>
                        <th class="text-center whitespace-no-wrap">Ordered</th>
                        <th class="text-center whitespace-no-wrap">Status</th>
                        <th class="text-center whitespace-no-wrap">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="transaction in transactions"
                        :key="transaction._id"
                        class="intro-x"
                      >
                        <td>
                          <a
                            v-bind:href="'/account/billing/transaction/' + transaction._id"
                          >{{transaction._id}}</a>
                        </td>
                        <td>
                          <div
                            class="flex items-center justify-center"
                          >{{transaction.transaction_id}}</div>
                        </td>
                        <td>
                          <div
                            class="flex items-center justify-center"
                          >{{transaction.transaction_spend}}</div>
                        </td>
                        <td>
                          <div
                            class="flex items-center justify-center"
                          >{{transaction.transaction_ago_created}}</div>
                        </td>
                        <td>
                          <div class="flex items-center justify-center">
                            <span
                              v-if="transaction.transaction_status === 'Pending' || transaction.transaction_status === 'Processing' || transaction.transaction_status === 'processing'"
                              style="color: orange"
                            >{{transaction.transaction_status}}</span>
                            <span
                              v-else-if="transaction.transaction_status === 'On hold'"
                              style="color: darkorange"
                            >Queued</span>
                            <span
                              v-else-if="transaction.transaction_status === 'In Progress'"
                              style="color: green"
                            >{{transaction.transaction_status}}</span>
                            <span
                              v-else-if="transaction.transaction_status === 'Complete' || transaction.transaction_status === 'Completed'"
                              style="color: darkgreen"
                            >{{transaction.transaction_status}}</span>
                            <span
                              v-else-if="transaction.transaction_status === 'Canceled' || transaction.transaction_status === 'Refunded'"
                              style="color: darkred"
                            >{{transaction.transaction_status}}</span>
                            <span v-else style="color: black">{{transaction.transaction_status}}</span>
                          </div>
                        </td>
                        <td class="table-report__action w-56">
                          <div class="flex justify-center items-center">
                            <a
                              class="flex items-center mr-3"
                              v-bind:href="'/account/billing/transaction/' + transaction._id"
                            >
                              <search-icon size="1.5x" class="w-5 h-5 mr-1 color-primary"></search-icon>View
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- BEGIN: Important Notes -->
                  <div
                    v-if="transactions.length === 0"
                    class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3"
                  >
                    <div class="mt-5 intro-x">
                      <div class="box">
                        <div class="p-5">
                          <!--<div class="text-gray-500 mt-1">20 Hours ago</div>-->
                          <div class="text-gray-600 text-justify mt-1">
                            <p>
                              We could not find any transactions in your account. You can purchase
                              <a
                                href="https://automate.mn/link-building/#pricing"
                                target="_blank"
                              >links</a> or
                              <a
                                href="https://automate.mn/content/#pricing"
                                target="_blank"
                              >content</a> and we will automatically link them to your account.
                              <br />
                              <br />If you have made a purchase and it is not showing
                              <a
                                href="mailto:support@automate.mn"
                                target="_blank"
                              >contact us</a> and we will investigate.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import {
  ChevronRightIcon,
  RefreshCcwIcon,
  SearchIcon,
} from "vue-feather-icons";
import { GETBILLINGDATA } from "../../../store/actionType";
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    RefreshCcwIcon,
    SearchIcon,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      transactions: [],
      subscriptions: [],
    };
  },
  mounted() {
    const sendingData = {
      user: this.user,
    };
    this.$store.dispatch(GETBILLINGDATA, sendingData).then((res) => {
      if (res.status === 200) {
        console.log("here response", res.data);
        this.transactions = res.data.transactions;
        this.subscriptions = res.data.subscriptions;
      }
    });
  },
};
</script>

<style>
.dashboard-home {
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: Roboto;
  font-size: 0.875rem;
  --text-opacity: 1;
}
</style>