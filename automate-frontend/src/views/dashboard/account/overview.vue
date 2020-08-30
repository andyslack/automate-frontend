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
          </div>
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <div class="intro-y flex items-center mt-8">
          <h2 class="text-lg font-medium mr-auto">Profile</h2>
          <a href class="ml-auto flex text-theme-1">
            <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon>Reload Page
          </a>
        </div>
        <!-- BEGIN: Profile Info -->
        <div class="intro-y box px-5 pt-5 mt-5">
          <div class="flex flex-col lg:flex-row border-b border-gray-200 pb-5 -mx-5">
            <div class="flex flex-1 px-5 items-center justify-center lg:justify-start">
              <div
                class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative cursor-pointer"
              >
                <a href="javascript:;" data-toggle="modal" data-target="#avatar" @click="showAvatarModal()">
                  <img
                    v-if="user.user_photo && user.user_fname"
                    :alt="user.user_fname+' '+user.user_lname"
                    class="rounded-full"
                    :src="user.user_photo"
                  />
                  <img
                    v-else-if="user.user_fname"
                    :alt="user.user_fname+' '+user.user_lname"
                    class="rounded-full"
                    :src="apiUrl + '/avatars/' + getfirst() + '.png'"
                  />
                  <img
                    v-else
                    alt="Account"
                    class="rounded-full"
                    :src="apiUrl + '/avatars/blank.png'"
                  />
                </a>
              </div>
              <div class="modal" id="avatar">
                <div class="modal__content">
                  <div class="p-5 text-center">
                    <div class="text-3xl mt-5 mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-tool w-8 h-8 color-primary inline"
                      >
                        <path
                          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                        />
                      </svg>
                      Update Photo
                    </div>
                    <input
                      type="text"
                      class="input w-full border bg-gray-100 mt-2"
                      placeholder="Photo URL"
                      id="user_photo"
                      v-model="user_photo"
                      v-on:change = "update_onchange()"
                    />
                  </div>
                  <div class="px-5 pb-8 text-center">
                    <button
                      type="button"
                      data-dismiss="modal"
                      class="button w-24 border text-gray-700 mr-1"
                    >Close</button>
                  </div>
                  <div class="avatar_update"></div>
                </div>
              </div> 
              <div class="ml-5">
                <div class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                    {{user.user_fname}} {{user.user_lname}}
                </div>
                <div class="text-gray-600">
                    {{getUserType}}
                </div>
              </div>
            </div>
            <div
              class="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col justify-center text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0"
            >
              <div class="truncate sm:whitespace-normal flex items-center">
                <mail-icon class="w-5 h-5 mr-2 color-primary"></mail-icon>
                {{user.user_email}}
              </div>
              <div class="runcate sm:whitespace-normal flex items-center mt-3">
                <key-icon class="w-5 h-5 mr-2 color-primary"></key-icon>
                {{user.api_key}}
              </div>
            </div>
            <div
              class="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 pt-5 lg:pt-0"
            >
              <div class="text-center rounded-md w-20 py-3">
                <div class="font-semibold text-theme-1 text-lg">{{overView.transactions}}</div>
                <div class="text-gray-600">Transactions</div>
              </div>
              <div class="text-center rounded-md w-20 py-3">
                <div class="font-semibold text-theme-1 text-lg">{{overView.tasks}}</div>
                <div class="text-gray-600">Tasks</div>
              </div>
              <div class="text-center rounded-md w-20 py-3">
                <div class="font-semibold text-theme-1 text-lg">{{overView.subscriptions}}</div>
                <div class="text-gray-600">Subscriptions</div>
              </div>
            </div>
          </div>
          <div class="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start">
            <a
              data-toggle="tab"
              data-target="#overview"
              class="py-4 sm:mr-8"
              style="cursor: pointer;"
              :class="{'active': activeTab === 'overview'}"
              @click="switchTab('overview')"
            >Overview</a>
            <a
              data-toggle="tab"
              data-target="#networks"
              class="py-4 sm:mr-8"
              style="cursor: pointer;"
              :class="{'active': activeTab === 'networks'}"
              @click="switchTab('networks')"
            >Networks</a>
            <a
              data-toggle="tab"
              data-target="#notifications"
              class="py-4 sm:mr-8"
              style="cursor: pointer;"
              :class="{'active': activeTab === 'notifications'}"
              @click="switchTab('notifications')"
            >Notifications</a>
            <a
              data-toggle="tab"
              data-target="#websites"
              class="py-4 sm:mr-8"
              style="cursor: pointer;"
              :class="{'active': activeTab === 'websites'}"
              @click="switchTab('websites')"
            >Websites</a>
            <a
              data-toggle="tab"
              data-target="#options"
              class="py-4 sm:mr-8"
              style="cursor: pointer;"
              :class="{'active': activeTab === 'options'}"
              @click="switchTab('options')"
            >Options</a>
          </div>
        </div>

        <div class="intro-y tab-content mt-5">
          <!-- START: Overview Pane -->
          <div class="tab-content__pane" :class="{'active': activeTab === 'overview'}" id="overview">
            <div class="grid grid-cols-12 gap-6">
              <!-- BEGIN: Display Information -->
              <div class="intro-y box col-span-12">
                <div class="p-5">
                  <account-profile></account-profile>
                </div>
              </div>
              <!-- END: Display Information -->
            </div>
          </div>
          <!-- END: Overview Pane -->

          <!-- START: Networks Pane -->
          <div class="tab-content__pane" :class="{'active': activeTab === 'networks'}" id="networks">
            <div class="grid grid-cols-12 gap-6">
              <div class="intro-y box col-span-12">
                <div class="p-5">
                  <account-network></account-network>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Networks Pane -->

          <!-- START: Notifications Pane -->
          <div
            class="tab-content__pane" :class="{'active': activeTab === 'notifications'}"
            id="notifications"
          >
            <div class="grid grid-cols-12 gap-6">
              <!-- BEGIN: Notifications Section -->
              <div class="intro-y box col-span-12">
                <div class="p-5">
                  <account-notification></account-notification>
                </div>
              </div>
              <!-- END: Notifications Section -->
            </div>
          </div>
          <!-- END: Notifications Pane -->

          <!-- START: Websites Pane -->
          <div class="tab-content__pane" :class="{'active': activeTab === 'websites'}" id="websites">
            <div class="grid grid-cols-12 gap-6">
              <div class="intro-y box col-span-12">
                <div class="p-5">
                  <account-website :websites="websites"></account-website>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Websites Pane -->

          <!-- START: Options Pane -->
          <div class="tab-content__pane" :class="{'active': activeTab === 'options'}" id="options">
            <div class="grid grid-cols-12 gap-6">
              <!-- BEGIN: Account Settings -->
              <div class="intro-y box col-span-12">
                <account-option></account-option>
              </div>
              <!-- END: Account Settings -->
            </div>
          </div>
          <!-- END: Options Pane -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import accountProfile from "./profile/accountProfile";
import accountNetwork from "./network/accountNetwork";
import accountNotification from "./notification/accountNotification";
import accountWebsite from "./websites/accountWebsite";
import accountOption from "./options/accountOption";
import { API_URL } from "../../../services/config";
import { 
  GETACCOUNTOVERVIEW,
  UPDATEUSER
} from "../../../store/actionType";
import {
  ChevronRightIcon,
  RefreshCcwIcon,
  MailIcon,
  KeyIcon,
} from "vue-feather-icons";
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    RefreshCcwIcon,
    MailIcon,
    KeyIcon,
    accountProfile,
    accountNetwork,
    accountNotification,
    accountWebsite,
    accountOption
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      apiUrl: API_URL,
      overView: {},
      activeTab: "overview",
      isAvatar: false,
      user_photo: "",
      websites: [],
    };
  },
  mounted() {
    const sendingData = {
        user: this.user
    }
    this.$store.dispatch(GETACCOUNTOVERVIEW, sendingData)
      .then(res => {
        if (res.status === 200) {
          this.overView = res.data;
          console.log("GETACCOUNTOVERVIEW",res.data);
          this.websites = res.data.websites;
        }
      });
  },
  computed: {
    getUserType: {
      get() {
        switch (this.user.user_type) {
          case 1:
            return "User";
          case 4:
            return "Administrator";
          case 9:
            return "System Admin";
          case 99:
            return "God Mode";
          default:
            return "User";
        }
      },
    },
  },
  methods: {
    getfirst() {
      return `${this.user.user_fname}`.substring(0, 1).toUpperCase();
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    update_onchange() {
      const sendingData = {
        user_photo: this.user_photo,
        user_id: this.user._id,
        api_key: this.user.api_key
      }
      this.$store.dispatch(UPDATEUSER, sendingData)
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            this.user.user_photo = this.user_photo;
            localStorage.setItem('user', JSON.stringify(this.user));
            location.reload();
          }
        })
    },
    showAvatarModal() {
      this.isAvatar = !this.isAvatar;
    }
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