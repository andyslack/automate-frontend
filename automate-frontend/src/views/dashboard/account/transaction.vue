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
            <div class="intro-y box px-5 pt-1 pb-1 mt-5">
                <div class="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start">
                    <a data-toggle="tab" data-target="#tasks" href="javascript:;" class="py-4 sm:mr-8 <%if(activeTab === 'tasks'){%>active<%}%>"
            >Tasks</a>
            <a
              data-toggle="tab"
              data-target="#invoice"
              href="javascript:;"
              class="py-4 sm:mr-8 <%if(activeTab === 'invoice'){%>active<%}%>"
            >Invoice</a>
          </div>
        </div>

        <div class="intro-y tab-content mt-5">
          <!-- START: Tasks Pane -->
          <div class="tab-content__pane <%if(activeTab === 'tasks'){%>active<%}%>" id="tasks">
            <home-table v-if="dashboardData != null" :dashboardData="dashboardData"></home-table>
          </div>
          <!-- END: Tasks Pane -->

          <!-- START: Invoice Pane -->
          <div class="tab-content__pane <%if(activeTab === 'invoice'){%>active<%}%>" id="invoice">
            <!-- BEGIN: Invoice -->
            <div class="intro-y box overflow-hidden mt-5">
              <div class="border-b border-gray-200 text-center sm:text-left">
                <div class="flex flex-col lg:flex-row px-5 sm:px-20 pt-10 pb-10 sm:pb-20">
                  <div class>
                    <div class="text-theme-1 font-semibold text-3xl">INVOICE</div>
                    <div class="mt-2">
                      Receipt
                      <span class="font-medium">#</span>
                    </div>
                    <div class="mt-1"></div>
                  </div>
                  <div class="lg:text-right mt-10 lg:mt-0 lg:ml-auto">
                    <div class="flex mt-5">
                      <a
                        class="button button-primary inline-block text-white"
                        href="https://automate.mn/wp-admin/post.php?post=<%=transaction.transaction_id%>&action=edit" target="_blank">View WooCommerce Order</a>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row px-5 sm:px-20 pt-10 pb-10 sm:pb-20">
            <div class>
                <div class="text-base text-gray-600">Client Details</div>
                <div class="text-lg font-medium text-theme-1 mt-2"></div>
                <div class="text-lg font-medium text-theme-1 mt-2"></div>
                <div class="mt-1"></div>
                <div class="mt-1"></div>
                <div class="mt-1"></div>
                <div class="mt-1"></div>
            </div>
            <div class="lg:text-right mt-10 lg:mt-0 lg:ml-auto">
                <div class="text-base text-gray-600">Payment to</div>
                <div class="text-lg font-medium text-theme-1 mt-2">MoreNiche Limited</div>
                <div class="mt-1">Digital House, Clarendon Park</div>
                <div class="mt-1">Nottingham, Nottinghamshire</div>
                <div class="mt-1">NG5 1AH, GB</div>
            </div>
        </div>
    </div>
    <div class="px-5 sm:px-16 py-10 sm:py-20">
        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th class="border-b-2 whitespace-no-wrap">DESCRIPTION</th>
                        <th class="border-b-2 text-right whitespace-no-wrap">QTY</th>
                        <th class="border-b-2 text-right whitespace-no-wrap">PRICE</th>
                        <th class="border-b-2 text-right whitespace-no-wrap">SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border-b">
                            <div class="font-medium whitespace-no-wrap"></div>
                            <div class="text-gray-600 text-xs whitespace-no-wrap"></div>
                        </td>
                        <td class="text-right border-b w-32"></td>
                        <td class="text-right border-b w-32">$</td>
                        <td class="text-right border-b w-32 font-medium">$</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <div class="font-medium whitespace-no-wrap">Total</div>
                        </td>
                        <td class="text-right w-32"></td>
                        <td class="text-right w-32"></td>
                        <td class="text-right w-32 font-medium">$</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
        <div class="text-center sm:text-left mt-10 sm:mt-0">
            <div class="text-5xl text-theme-1 font-medium mt-2">PAID</div>
            <div class="mt-1 tetx-xs">
                Coupon
                <span class="font-bold uppercase"></span> applied, saving
                $.
            </div>
        </div>
        <div class="text-center sm:text-right sm:ml-auto">
            <div class="text-base text-gray-600">Total Amount (USD)</div>
            <div class="text-xl text-theme-1 font-medium mt-2">$</div>
            <div class="mt-1 tetx-xs">Taxes included</div>
        </div>
    </div>

    <div class="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
        <div class="text-center sm:text-left mt-10 sm:mt-0">
            <div class="text-base text-gray-600">Customer Note:</div>
            <div class="mt-1 tetx-xs"></div>
        </div>
    </div>
</div>
<!-- END: Invoice -->
</div>
<!-- END: Invoice Pane -->
</div>
</div>
</div>
</div>
</template>

<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import homeTable from "../home-component/tasks/homeTable";
import {
    GETTRANSACTIONDATA
} from "../../../store/actionType";
import {
    ChevronRightIcon
} from "vue-feather-icons";
export default {
    components: {
        homeHeader,
        homeSearch,
        homeAccount,
        homeTable,
        ChevronRightIcon,
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user")),
            activeTab: "tasks",
            dashboardData: null
        }
    },
    mounted() {
        const sendingData = {
            user: this.user,
            transaction_id: this.$route.params.transaction_id,
            activeTab: this.activeTab,
        }
        this.$store.dispatch(GETTRANSACTIONDATA, sendingData)
            .then(res => {
                if (res.status === 200) {
                    console.log("here is the getTransaction data", res.data);
                    this.dashboardData = {
                        tasks: res.data.tasks
                    }
                }
            })
    }
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
