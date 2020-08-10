<template>
  <div class="app dashboard-home">
    <div class="flex">
        <home-header></home-header>
        <div class="content">
            <!-- BEGIN: Top Bar -->
            <div class="top-bar">
                <!-- BEGIN: Breadcrumb -->
                <div class="-intro-x breadcrumb mr-auto hidden sm:flex"> <a href="/home" class="">Dashboard</a> <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon><a href="/search" class="breadcrumb--active">Search</a> </div>
                <!-- END: Breadcrumb -->
                <home-search></home-search>
                <home-account></home-account>
            </div>
            <!-- END: Top Bar -->

            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-6">

                    <!-- BEGIN: Welcome -->
                    <div class="col-span-12 mt-3">
                        <div class="intro-y flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                            Search Results: {{searchString}}
                            </h2>
                            <a href="" class="ml-auto flex text-theme-1"> <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon> Reload Data </a>
                        </div>
                    </div>
                    <!-- END: Welcome -->
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import homeHeader from "./home-component/homeHeader";
import homeSearch from "./home-component/homeSearch";
import homeAccount from "./home-component/homeAccount";
import {
  ChevronRightIcon,
  RefreshCcwIcon
} from 'vue-feather-icons'
export default {
    components: {
        homeHeader,
        homeSearch,
        homeAccount,
        ChevronRightIcon,
        RefreshCcwIcon
    },
    data() {
        return {
            searchString: ""
        };
    },
    mounted() {
      let urlParams = new URLSearchParams(window.location.search);
      this.searchString = urlParams.get('s');
      console.log("here query param", this.searchString)
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