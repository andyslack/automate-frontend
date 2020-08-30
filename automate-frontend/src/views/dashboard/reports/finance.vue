<template>
  <div class="app dashboard-home">
    <div class="flex">
      <home-header></home-header>
      <div class="content">
        <!-- BEGIN: Top Bar -->
        <div class="top-bar">
          <!-- BEGIN: Breadcrumb -->
          <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="/home" class>Dashboard</a>
            <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a href="/reports" class="breadcrumb--active">Reports</a>
            <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a href="/reports/finance" class="breadcrumb--active">Finance</a>
          </div>
          <!-- END: Breadcrumb -->
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <!-- END: Top Bar -->
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Finance Reports
            </h2>
            <a href="" class="ml-auto flex text-theme-1">
             <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon>
             Reload Page 
             </a>
        </div>
        <!-- BEGIN: Tabs -->
        <div class="intro-y box px-5 pt-1 pb-1 mt-5">

            <div class="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start">
                <a data-toggle="tab" style="cursor: pointer;" @click="toggleTab('profitability')" :class="{'active': activeTab === 'profitability'}" class="py-4 sm:mr-8">Profitability</a>
                <a data-toggle="tab" style="cursor: pointer;" @click="toggleTab('byTransaction')" :class="{'active': activeTab === 'byTransaction'}" class="py-4 sm:mr-8">By Transaction</a>
            </div>

        </div>

        <div class="intro-y tab-content mt-5">

            <!-- START: Profitability Pane -->
            <div v-if="activeTab === 'profitability'" :class="{'active': activeTab === 'profitability'}" class="tab-content__pane" id="profitability">
                <div class="grid grid-cols-12 gap-6">

                    <div class="intro-y box col-span-12">
                        <div class="p-5">
                          <profitability></profitability>
                        </div>
                    </div>

                </div>
            </div>
            <!-- END: Profitability Pane -->

            <!-- START: Profitability Pane -->
            <div v-if="activeTab === 'byTransaction'" :class="{'active': activeTab === 'byTransaction'}" class="tab-content__pane" id="byTransaction">
              <byTransaction :transactions="transactions"></byTransaction>
            </div>
            <!-- END: Profitability Pane -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import profitability from "./finace/profitability";
import byTransaction from "./finace/byTransaction";
import {
  ChevronRightIcon,
  RefreshCcwIcon
} from "vue-feather-icons";
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    RefreshCcwIcon,
    profitability,
    byTransaction
  },
  data() {
    return {
      activeTab: "profitability",
      profitability: {},
      transactions: [], 
    }
  },
  mounted() {
  },
  methods: {
    toggleTab(activeTab) {
      this.activeTab = activeTab;
    }
  }
}
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