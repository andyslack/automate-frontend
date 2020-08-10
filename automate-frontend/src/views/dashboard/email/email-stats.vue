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
            <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a href="/email/stats" class="breadcrumb--active">Stats</a>
          </div>
          <!-- END: Breadcrumb -->
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <!-- END: Top Bar -->

        <!-- BEGIN: Title -->
        <div class="col-span-12 mt-3 mb-3">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Email Marketing Stats</h2>
            <a href class="ml-auto flex text-theme-1">
             <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon>Reload Data
            </a>
          </div>
        </div>
        <!-- END: Title -->

        <!-- BEGIN: Subscriber Stats -->
        <div class="col-span-12">
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <a href="#">
                        <div class="report-box zoom-in">
                            <div class="box p-5">
                                <div class="flex">
                                    <list-icon class="report-box__icon color-info"></list-icon>
                                    <div class="ml-auto">
                                        <div class="report-box__indicator background-info tooltip cursor-pointer" title="New Leads (7 Days)"> &nbsp; {{subscriber_stats_7_days.cold}} &nbsp;&nbsp; </div>
                                    </div>
                                </div>
                                <div class="text-3xl font-bold leading-8 mt-6">{{subscriber_stats.cold}}</div>
                                <div class="text-base text-gray-600 mt-1">Cold Leads</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <a href="#">
                        <div class="report-box zoom-in">
                            <div class="box p-5">
                                <div class="flex">
                                    <clock-icon class="report-box__icon color-danger"></clock-icon>
                                    <div class="ml-auto">
                                        <div class="report-box__indicator background-danger tooltip cursor-pointer" title="Last 7 Days"> &nbsp;{{subscriber_stats_7_days.pending}}&nbsp;&nbsp;</div>
                                    </div>
                                </div>
                                <div class="text-3xl font-bold leading-8 mt-6"> {{subscriber_stats.pending}} </div>
                                <div class="text-base text-gray-600 mt-1">Pending Leads</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <a href="#">
                        <div class="report-box zoom-in">
                            <div class="box p-5">
                                <div class="flex">
                                    <inbox-icon class="report-box__icon color-warning"></inbox-icon>
                                    <div class="ml-auto">
                                        <div class="report-box__indicator background-warning tooltip cursor-pointer" title="Last 7 Days"> &nbsp;{{subscriber_stats_7_days.unconfirmed}}&nbsp;&nbsp;</div>
                                    </div>
                                </div>
                                <div class="text-3xl font-bold leading-8 mt-6">{{subscriber_stats.unconfirmed}}</div>
                                <div class="text-base text-gray-600 mt-1">Unconfirmed Emails</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <a href="#">
                        <div class="report-box zoom-in">
                            <div class="box p-5">
                                <div class="flex">
                                    <database-icon class="report-box__icon color-primary"></database-icon>
                                    <div class="ml-auto">
                                        <div class="report-box__indicator background-primary tooltip cursor-pointer" title="Last 7 Days"> &nbsp;{{subscriber_stats_7_days.confirmed}}&nbsp;&nbsp;</div>
                                    </div>
                                </div>
                                <div class="text-3xl font-bold leading-8 mt-6">{{subscriber_stats.confirmed}}</div>
                                <div class="text-base text-gray-600 mt-1">Confirmed Emails</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- END: Subscriber Stats -->
      </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import { GETEMAILSTATS } from "../../../store/actionType";
import {
  RefreshCcwIcon,
  ChevronRightIcon,
  ListIcon,
  ClockIcon,
  InboxIcon,
  DatabaseIcon
} from 'vue-feather-icons'
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    RefreshCcwIcon,
    ListIcon,
    ClockIcon,
    InboxIcon,
    DatabaseIcon
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      subscriber_stats: {},
      subscriber_stats_7_days: {}
    }
  },
  mounted() {
    this.getEmailStats();
  },
  methods: {
    getEmailStats() {
      this.$store.dispatch(GETEMAILSTATS, this.user)
        .then(res => {
          if (res.status === 200) {
            console.log("here get email stats response", res.data);
            this.subscriber_stats = res.data.subscriber_stats;
            this.subscriber_stats_7_days = res.data.subscriber_stats_7_days;
          }
        });
    }
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