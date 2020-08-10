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
            <a href="/email" class="breadcrumb--active">Email</a>
          </div>
          <!-- END: Breadcrumb -->
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <!-- END: Top Bar -->
        <div class="intro-y flex items-center mt-8">
          <h2 class="text-lg font-medium mr-auto">Automate Your Email Marketing</h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
          <!-- BEGIN: FAQ Menu -->
          <a
            href="/email/docs"
            class="intro-y col-span-12 lg:col-span-4 box py-10 border-2 border-theme-1"
          >
            <code-icon class="w-12 h-12 text-theme-1 mx-auto"></code-icon>
            <div class="font-medium text-center text-base mt-3">Integrate</div>
            <div
              class="text-gray-600 mt-2 w-3/4 text-center mx-auto"
            >Connect your website to Automate via our API or WordPress form tutorials</div>
          </a>
          <a href="/email/logs" class="intro-y col-span-12 lg:col-span-4 box py-10">
            <database-icon class="w-12 h-12 text-theme-1 mx-auto"></database-icon>
            <div class="font-medium text-center text-base mt-3">Logging</div>
            <div
              class="text-gray-600 mt-2 w-3/4 text-center mx-auto"
            >Ensure new contacts are flowing into the system. See new contacts as they signup.</div>
          </a>
          <a href="/email/stats" class="intro-y col-span-12 lg:col-span-4 box py-10">
            <trending-up-icon class="w-12 h-12 text-theme-1 mx-auto"></trending-up-icon>
            <div class="font-medium text-center text-base mt-3">Stats</div>
            <div
              class="text-gray-600 mt-2 w-3/4 text-center mx-auto"
            >See signup numbers, sales data and much more.</div>
          </a>
          <!-- END: FAQ Menu -->
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
  CodeIcon,
  DatabaseIcon,
  TrendingUpIcon,
} from "vue-feather-icons";
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    CodeIcon,
    DatabaseIcon,
    TrendingUpIcon,
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