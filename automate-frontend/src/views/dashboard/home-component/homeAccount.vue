<template>
  <!-- BEGIN: Account Menu -->
  <div class="intro-x dropdown w-8 h-8 relative">
    <div
      class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
    >
      <img
        v-if="user.user_photo && user.user_fname"
        :alt="user.user_fname+' '+user.user_lname"
        class="rounded-full"
        :src="user.user_photo"
      />
      <img v-else-if="user.user_fname"
        :alt="user.user_fname+' '+user.user_lname"
        class="rounded-full"
        :src="apiUrl + '/avatars/' + getfirst() + '.png'"
      />
      <img v-else alt="Account" class="rounded-full" :src="apiUrl + '/avatars/blank.png'">
    </div>
    <div
      class="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20"
      :class="{'show': isdrop == true}"
    >
      <div class="dropdown-box__content box bg-theme-38">
        <div class="p-4 border-b border-theme-40">
          <div class="font-medium">{{user.user_fname}} {{user.user_lname}}</div>
          <div class="text-xs text-theme-41">{{getUserType}}</div>
        </div>
        <div class="p-2">
          <a
            href="/account"
            class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
          >
            <user-icon class="w-4 h-4 mr-2"></user-icon> Profile
          </a>
          <a
            v-if="user.user_type >= 4"
            href="/account/users"
            class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
          >
            <users-icon class="w-4 h-4 mr-2"></users-icon> Users
          </a>
          <a
            href="/account/billing"
            class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
          >
            <credit-card-icon class="w-4 h-4 mr-2"></credit-card-icon> Billing
          </a>
          <a
            href="mailto:support@automate.mn"
            class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
          >
            <help-circle-icon class="w-4 h-4 mr-2"></help-circle-icon> Help
          </a>
          <a
            href="https://documenter.getpostman.com/view/1129481/T17CCUri"
            target="_blank"
            class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
          >
            <code-icon class="w-4 h-4 mr-2"></code-icon> Developers
          </a>
        </div>
        <div class="p-2 border-t border-theme-40">
          <a
            href="#"
            class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
            onclick="signOut('<%=user.auth_service%>');"
          >
            <toggle-right-icon class="w-4 h-4 mr-2"></toggle-right-icon> Logout
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- END: Account Menu -->
</template>

<script>
import { API_URL } from "../../../services/config";
import {
  UserIcon,
  UsersIcon,
  CreditCardIcon,
  HelpCircleIcon,
  CodeIcon,
  ToggleRightIcon
} from 'vue-feather-icons'
export default {
  name: "home-account",
  components: {
    UserIcon,
    UsersIcon,
    CreditCardIcon,
    HelpCircleIcon,
    CodeIcon,
    ToggleRightIcon
  },
  data() {
    return {
      apiUrl: API_URL,
      user: JSON.parse(localStorage.getItem("user")),
      firstName: "",
      isdrop: false,
    };
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
    toggleDrop() {
      this.isdrop = !this.isdrop;
    },
  },
};
</script>

<style>
</style>