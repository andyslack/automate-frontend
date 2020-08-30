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
          <h2 class="text-lg font-medium mr-auto">Users</h2>
        </div>
        <!-- BEGIN: Profile Info -->
        <div class="mt-5">
          <div class="grid grid-cols-12 gap-6">
            <!-- BEGIN: Users -->
            <div class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
              <!-- BEGIN: Add User Modal -->
              <div id="add-user-modal">
                <div class="preview">
                  <div class="text-center">
                    <a
                      href="javascript:;"
                      data-toggle="modal"
                      data-target="#add-user"
                      class="button button-primary inline-block text-white"
                    >Add New User</a>
                  </div>
                  <div class="modal" id="add-user">
                    <div class="modal__content">
                      <div class="p-5">
                        <user-check-icon size="1.5x" class="w-16 h-16 mx-auto mt-3 color-primary"></user-check-icon>
                        <div class="text-3xl mt-5 mb-5 text-center">Add New User</div>
                        <input
                          type="text"
                          class="input w-full border bg-gray-100 mt-2"
                          placeholder="First Name"
                          id="add_user_fname"
                          v-model="add_user_fname"
                          value
                          required
                        />
                        <div v-if="fnameError" class="add-user-fname-error color-danger mt-2">
                          First Name Is Required
                        </div>
                        <input
                          type="text"
                          class="input w-full border bg-gray-100 mt-2"
                          placeholder="Last Name"
                          v-model="add_user_lname"
                          id="add_user_lname"
                          value
                          required
                        />
                        <div v-if="lnameError" class="add-user-lname-error color-danger mt-2">
                          Last Name Is Required
                        </div>
                        <input
                          type="email"
                          class="input w-full border bg-gray-100 mt-2"
                          placeholder="Email Address"
                          v-model="add_user_email"
                          id="add_user_email"
                          value
                          required
                        />
                        <div v-if="emailError"  class="add-user-email-error color-danger mt-2 mb-2">
                          {{emailErrorMessage}}
                        </div>
                      </div>
                      <div class="px-5 pb-8 text-center">
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="button w-24 border text-gray-700 mr-1"
                        >Back</button>
                        <button
                          type="button"
                          class="button button-primary w-24 text-white"
                          @click="add_user_onclick()"
                        >Add User</button>
                      </div>
                      <div class="add-user-error p-5 text-center"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Add User Modal -->

              <div class="hidden md:block mx-auto text-gray-600">
                <!--Showing {count} Users-->
              </div>
              <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                <div class="w-56 relative text-gray-700">
                  <!-- <input type="text" class="input w-56 box pr-10 placeholder-theme-13" placeholder="Search...">
                  <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-feather="search"></i>-->
                </div>
              </div>
            </div>
            <!-- BEGIN: Users Layout -->

            <div
              v-for="user in users"
              :key="user.user_email"
              class="intro-y col-span-12 md:col-span-6"
            >
              <div class="box">
                <div class="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200">
                  <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
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
                  </div>
                  <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                    <div class="font-medium">{{user.user_fname}} {{user.user_lname}}</div>
                    <div class="text-gray-600 text-xs">{{getUserType(user)}}</div>
                    <div v-if="errorId===user._id" :class="'delete-error-' + user._id">
                      <span class="color-danger" style="display: inline;">{{error_msg}}</span>
                    </div>
                  </div>
                  <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                    <div v-if="user.user_type < 9" :class="'delete-button-' + user._id">
                      <button
                        v-if="userId !== user._id"
                        class="button button--sm text-white button-danger mr-2"
                        @click="are_you_sure(user._id)"
                      >Delete</button>
                      <button
                        v-if="userId === user._id"
                        type="button"
                        class="button button-danger w-34 text-white"
                        @click="delete_onclick(user._id)"
                      >Are You Sure?</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Users -->
          </div>
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
  GETACCOUNTUSERS,
  DELETEUSER,
  ADDUSER
} from "../../../store/actionType";
import { 
  ChevronRightIcon,
  UserCheckIcon
} from "vue-feather-icons";
import { API_URL } from "../../../services/config";
export default {
  components: {
    homeHeader,
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    UserCheckIcon,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      users: [],
      apiUrl: API_URL,
      userId: "",
      errorId: "",
      error_msg: "",
      add_user_fname: "",
      add_user_lname: "",
      add_user_email: "",
      fnameError: false,
      lnameError: false,
      emailError: false,
      emailErrorMessage: ""
    };
  },
  mounted() {
    const sendingData = {
      user: this.user,
    };
    this.$store.dispatch(GETACCOUNTUSERS, sendingData).then((res) => {
      if (res.status === 200) {
        this.users = res.data.users;
        console.log(res.data);
      }
    });
  },
  methods: {
    getfirst() {
      return `${this.user.user_fname}`.substring(0, 1).toUpperCase();
    },
    getUserType(user) {
      switch (user.user_type) {
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
    are_you_sure(id) {
      this.userId = id;
    },
    delete_onclick(id) {
      console.log("here delete on click", id);
      const data = {
        user_id: id,
        api_key: this.user.api_key
      }
      this.$store.dispatch(DELETEUSER, data)
        .then(res => {
          if (res.status === 200) {
            if (res.data === "OK") {
              location.reload();
            } else {
              this.error_msg = 'Error: ' + res.status + ' ' + res.responseText;
              this.errorId = id;
            }
          } else {
            this.error_msg = 'Error: ' + res.status + ' ' + res.responseText;
            this.errorId = id;
          }
        })
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    add_user_onclick() {
      if (this.add_user_fname === '') {
        let element = document.getElementById("add_user_fname");
        element.classList.add("border-danger");
        this.fnameError = true;
      }
      if (this.add_user_lname === '') {
        let element = document.getElementById("add_user_lname");
        element.classList.add("border-danger");
        this.lnameError = true;
      }
      if (this.add_user_email === '') {
        let element = document.getElementById("add_user_email");
        element.classList.add("border-danger");
        this.emailError = true;
        this.emailErrorMessage = "Email Address Is Required";
      }
      if (this.add_user_fname !== '' || this.add_user_lname !== '' || this.add_user_email !== '') {
        if (this.validateEmail(this.add_user_email)) {
          const sendingData = {
            user_fname: this.add_user_fname,
            user_lname: this.add_user_lname,
            user_email: this.add_user_email,
            user_type: 1,
            user_referrer_type: "APP",
            user_referrer_source: this.user._id,
            api_key: this.user.api_key
          }
          this.$store.dispatch(ADDUSER, sendingData)
            .then(res => {
              if (res.status === 200) {
                console.log(res);
                if (res.data === "OK") {
                  location.reload();
                } else {
                  this.addUserError = 'Error: ' + res.status + ' ' + res.responseText;
                }
              }
            });
        } else {
          let element = document.getElementById("add_user_email");
          element.classList.add("border-danger");
          this.emailErrorMessage = "Email Address Is Invalid"
        }
      }
    }
  },
  computed: {},
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