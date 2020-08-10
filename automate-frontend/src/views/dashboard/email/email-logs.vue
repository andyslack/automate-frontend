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
            <a href="/email/logs" class="breadcrumb--active">Logs</a>
          </div>
          <!-- END: Breadcrumb -->
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <!-- END: Top Bar -->
        <div class="intro-y flex items-center mt-8">
          <h2 class="text-lg font-medium mr-auto">Email Marketing Logs</h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
          <!-- BEGIN: Email Log -->
          <div class="col-span-12">
            <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
              <div class="intro-y box col-span-12 lg:col-span-6">
                <div class="p-5">
                  <div class="tab-content">
                    <div class="tab-content__pane active" id="latest-tasks-new">
                      <div v-for="log in emailLogs" :key="log">
                        <div v-if="user.user_type >= log.log_permission_level" class="flex items-center mt-5">
                        <div class="border-l-2 border-theme-1 pl-4">
                          <i
                            data-feather="<%=log.log_icon%>"
                            class="w-5 h-5 mr-2 color-primary inline"
                          ></i>
                          <span class="font-medium">{{log.log_title}}</span>
                          <div class="text-gray-600" v-if="user.user_type == 1 || user.user_type == 4">
                            {{log.log_content}}
                          </div>
                          <div class="text-gray-600" v-if="user.user_type == 9 || user.user_type == 99">
                            {{log.log_content}}<br>
                            First Name: {{log.email_fname}}<br>
                            Last Name: {{log.email_lname}}<br>
                            Email: {{log.email_address}}<br>
                            T&C Ticked: {{log.email_terms}}<br>
                            {{log.external_source}} id: <a v-if="log.external_source === 'Keap'" v-bind:href="process.env.KEAP_PORTAL_URL + '/Contact/manageContact.jsp?view=edit&ID=' + log.external_id" target="_blank">{{log.external_id}}</a>
                            {{log.external_source !== 'Keap' ? log.external_id: ""}}<br>
                            Lang: {{log.email_lang}}<br>
                            Referrer: {{log.log_referrer}}<br>

                          </div>
                        </div>
                        <div class="text-gray-600 ml-auto">{{log.log_ago}}</div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- BEGIN: Email Log -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import { GETEMAILLOGS } from "../../../store/actionType";
import {
  ChevronRightIcon,
} from "vue-feather-icons";
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      emailLogs: [],
    }
  },
  mounted() {
    this.getEmailLogs();
  },
  methods: {
    getEmailLogs() {
      this.$store.dispatch(GETEMAILLOGS, this.user)
        .then(res => {
          if (res.status === 200) {
            this.emailLogs = res.data.emailLogs;
            console.log("here get email logs response", this.emailLogs);
          }
        })
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