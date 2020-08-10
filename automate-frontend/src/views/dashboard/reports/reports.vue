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
          </div>
          <!-- END: Breadcrumb -->
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <!-- END: Top Bar -->
        <div class="intro-y flex items-center mt-8">
          <h2 class="text-lg font-medium mr-auto">Reporting</h2>
        </div>
        <!-- BEGIN: FAQ Menu -->
        <div class="grid grid-cols-12 gap-6 mt-5">
          <a
            href="/reports/finance"
            class="intro-y col-span-12 lg:col-span-4 box py-10 border-2 border-theme-1"
          >
            <dollar-sign-icon class="w-12 h-12 text-theme-1 mx-auto"></dollar-sign-icon>
            <div class="font-medium text-center text-base mt-3">Finance</div>
            <div
              class="text-gray-600 mt-2 w-3/4 text-center mx-auto"
            >Reports related to revenue, costs and profitability</div>
          </a>
        </div>
        <!-- END: FAQ Menu -->
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
  DollarSignIcon
} from "vue-feather-icons";
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    DollarSignIcon
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