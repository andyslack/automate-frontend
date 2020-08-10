<template>
  <div class="app dashboard-home">
    <div class="flex">
      <home-header></home-header>
      <div class="content">
        <div class="top-bar">
          <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href class>Dashboard</a>
            <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a href="/home" class="breadcrumb--active">Home</a>
          </div>
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
            <div class="col-span-12 mt-3">
              <div class="intro-y flex items-center h-10">
                <h2
                  class="text-lg font-medium truncate mr-5"
                >Welcome {{user.user_fname ? user.user_fname : "There!"}}</h2>
                <a href class="ml-auto flex text-theme-1">
                <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon>
                  Reload Data
                </a>
              </div>
            </div>
            <div class="col-span-12" v-if="user.user_type >= 9">
              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <a href="#">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="flex">
                          <clipboard-icon class="report-box__icon color-primary"></clipboard-icon>
                          <div class="ml-auto">
                            <div
                              class="report-box__indicator background-primary tooltip cursor-pointer"
                              title="Tasks awaiting user input"
                            > &nbsp; {{stats.pending_tasks}}</div>
                          </div>
                        </div>
                        <div class="text-3xl font-bold leading-8 mt-6">{{stats.open_tasks}}</div>
                        <div class="text-base text-gray-600 mt-1">Open Tasks</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <a href="/account/billing">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="flex">
                          <credit-card-icon class="report-box__icon color-danger"></credit-card-icon>
                          <div class="ml-auto">
                            <div
                              class="report-box__indicator background-danger tooltip cursor-pointer"
                              title="Yesterday's Revenue"
                            >&nbsp; $ {{stats.yesterday_revenue.length > 0 ? stats.yesterday_revenue[0].transaction_spend.toFixed(2) : 0.00}} &nbsp;&nbsp;</div>
                          </div>
                        </div>
                        <div
                          class="text-3xl font-bold leading-8 mt-6"
                        >${{stats.thirty_days_revenue.length > 0 ? stats.thirty_days_revenue[0].transaction_spend.toFixed(2) : 0.00}}</div>
                        <div class="text-base text-gray-600 mt-1">30 Days Revenue</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <a href="/account/billing">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="flex">
                          <repeat-icon class="report-box__icon color-warning"></repeat-icon>
                          <div class="ml-auto">
                            <div
                              class="report-box__indicator background-warning tooltip cursor-pointer"
                              title="New subscriptions this month"
                            >&nbsp; {{stats.thirty_days_subscriptions}}&nbsp;&nbsp;</div>
                          </div>
                        </div>
                        <div class="text-3xl font-bold leading-8 mt-6">{{stats.live_subscriptions}}</div>
                        <div class="text-base text-gray-600 mt-1">Live Subscriptions</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <a href="/account/users">
                    <div class="report-box zoom-in">
                      <div class="box p-5">
                        <div class="flex">
                          <user-icon class="report-box__icon color-info"></user-icon>
                          <div class="ml-auto">
                            <div
                              class="report-box__indicator background-info tooltip cursor-pointer"
                              title="Last 7 days"
                            >&nbsp; {{stats.seven_days_users}} &nbsp;&nbsp;</div>
                          </div>
                        </div>
                        <div class="text-3xl font-bold leading-8 mt-6">{{stats.total_users}}</div>
                        <div class="text-base text-gray-600 mt-1">Total Users</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <home-table v-if="dashboardData != null" :dashboardData="dashboardData"></home-table>
          </div>
          <div class="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10">
            <div class="xxl:pl-6 grid grid-cols-12 gap-6">
              <div
                v-if="user.user_type == 1 || user.user_type == 4"
                class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3"
              >
                <div class="intro-x flex items-center h-10">
                  <h2 class="text-lg font-medium truncate mr-auto">Important Notes</h2>
                </div>
                <div class="mt-5 intro-x">
                  <div class="slick-carousel box" id="important-notes">
                    <div class="p-5">
                      <div class="text-base font-medium truncate">Welcome to Automate Beta!</div>
                      <div class="text-gray-600 text-justify mt-1">
                        Thank you for joining our Beta release.
                        <br />
                        <br />Your feedback is super important to us, please do provide feedback.
                        <br />
                        <br />As a thank you, please use your lifetime beta coupon code at checkout for a 20% discount on all services.
                      </div>
                      <div class="font-medium flex mt-5">
                        <a href="mailto:support@automate.mn" target="_blank">
                          <button
                            type="button"
                            class="button button--sm bg-gray-200 text-gray-600"
                          >Send Feedback</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="user.user_type == 9 || user.user_type == 99"
                class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3"
              >
                <div class="intro-x flex items-center h-10">
                  <h2 class="text-lg font-medium truncate mr-auto">Customer NPS</h2>
                </div>
                <div class="mt-5 intro-x">
                  <div class="slick-carousel box" id="important-notes">
                    <div class="p-5">
                      <div class="text-gray-600 text-center mt-1">
                        <user-icon v-if="typeof npsScores != undefined && npsScores.total.nps < 1" class="report-box__icon w-20 h-20 color-danger inline"></user-icon>
                        <div
                          v-if="typeof npsScores != undefined && npsScores.total.nps < 1"
                          class="inline color-danger"
                          style="font-size: 50px;"
                        >{{npsScores.total.nps}}</div>
                        <user-icon v-if="typeof npsScores != undefined && npsScores.total.nps < 31" class="report-box__icon w-20 h-20 color-warning inline"></user-icon>
                        <div
                          v-if="typeof npsScores != undefined && npsScores.total.nps < 31"
                          class="inline color-warning"
                          style="font-size: 50px;"
                        >{{npsScores.total.nps}}</div>
                         <user-icon v-if="typeof npsScores != undefined && npsScores.total.nps < 71" class="report-box__icon w-20 h-20 color-success inline"></user-icon>
                        <div
                          v-if="typeof npsScores != undefined && npsScores.total.nps < 71"
                          class="inline color-success"
                          style="font-size: 50px;"
                        >{{npsScores.total.nps}}</div>
                        <user-icon v-if="typeof npsScores != undefined && npsScores.total.nps < 101" class="report-box__icon w-20 h-20 color-primary inline"></user-icon>
                        <div
                          v-if="typeof npsScores != undefined && npsScores.total.nps < 101"
                          class="inline color-primary"
                          style="font-size: 50px;"
                        >{{npsScores.total.nps}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                <div class="intro-x flex items-center h-10">
                  <h2 class="text-lg font-medium truncate mr-5">Latest Feedback</h2>
                  <a href class="ml-auto text-theme-1 truncate">See all</a>
                </div>
                <div v-if="comments" class="report-timeline mt-5 relative">
                  <div
                    v-for="comment in comments"
                    :key="comment.user"
                    class="intro-x relative flex items-center mb-3"
                  >
                    <div class="report-timeline__image">
                      <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                        <a
                          v-if="comment.user.user_photo && comment.user.user_fname"
                          v-bind:href="'/user/' + comment.user._id"
                        >
                          <img
                            v-bind:alt="comment.user.user_fname + ' ' + comment.user.user_lname"
                            v-bind:src="comment.user.user_photo"
                          />
                        </a>
                        <a v-if="comment.user.user_fname" v-bind:href="'/user/' + comment.user._id">
                          <img
                            v-bind:alt="comment.user.user_fname + ' ' +  comment.user.user_lname"
                            v-bind:src="apiUrl + '/avatars/' + comment.user.user_fname.charAt(0).toUpperCase() + '.png'"
                          />
                        </a>
                        <a
                          v-if="!(comment.user.user_photo && comment.user.user_fname) || !(comment.user.user_fname)"
                          v-bind:href="'/user/' + comment.user._id"
                        >
                          <img alt="Account" v-bind:src="apiUrl + '/avatars/blank.png'" />
                        </a>
                      </div>
                    </div>
                    <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                      <a v-bind:href="'/task/' + comment.task">
                        <div class="flex items-center">
                          <div
                            class="font-medium"
                          >{{comment.user.user_fname}} {{comment.user.user_lname}}</div>
                          <div class="text-xs text-gray-500 ml-auto">{{comment.feedback_ago}}</div>
                        </div>
                        <div class="text-gray-600 mt-2">
                          <div class="text-sm text-gray-600 inline">{{comment.feedback_comment}}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div v-if="!comments">No Comments</div>
              </div>
            </div>
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
import homeTable from "./home-component/tasks/homeTable";
import { GETSTATS } from "../../store/actionType";
import { API_URL } from "../../services/config";
import {
  ChevronRightIcon,
  RefreshCcwIcon,
  ClipboardIcon,
  CreditCardIcon,
  RepeatIcon,
  UserIcon 
} from 'vue-feather-icons'
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    homeTable,
    ChevronRightIcon,
    RefreshCcwIcon,
    ClipboardIcon,
    CreditCardIcon,
    RepeatIcon,
    UserIcon  
  },
  data() {
    return {
      apiUrl: API_URL,
      user: JSON.parse(localStorage.getItem("user")),
      dashboardData: null,
      stats: {
        total_users: Number,
        seven_days_users: Number,
        open_tasks: Number,
        pending_tasks: Number,
        thirty_days_revenue: [],
        yesterday_revenue: [],
        live_subscriptions: Number,
        thirty_days_subscriptions: Number,
      },
      npsScores: {
        speed: {
          total: 0,
          promoters: 0,
          detractors: 0,
          nps: 0,
        },
        quality: {
          total: 0,
          promoters: 0,
          detractors: 0,
          nps: 0,
        },
        price: {
          total: 0,
          promoters: 0,
          detractors: 0,
          nps: 0,
        },
        total: {
          total: 0,
          promoters: 0,
          detractors: 0,
          nps: 0,
        },
      },
      comments: [],
    };
  },
  created() {},
  mounted() {
    this.getStats();
  },
  methods: {
    getStats() {
      this.$store.dispatch(GETSTATS, this.user).then((res) => {
        if (res.status === 200) {
          this.dashboardData = res.data;
          this.stats = res.data.stats;
          this.npsScores = res.data.npsScores;
          this.comments = res.data.comments;
        }
      });
    },
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