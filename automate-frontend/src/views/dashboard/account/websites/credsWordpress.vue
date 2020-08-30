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
            <a href="/account" class>Account</a>
            <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a href="/account/websites" class>Websites</a>
            <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
            <a
              href="/account/websites/connect/<%=website._id%>"
              class="breadcrumb--active"
            >Access Credentials</a>
          </div>
          <!-- END: Breadcrumb -->
          <home-search></home-search>
          <home-account></home-account>
        </div>
        <!-- END: Top Bar -->
        <div class="intro-y flex items-center mt-8">
          <h2 class="text-lg font-medium mr-auto">Connect WordPress Website</h2>
        </div>

        <div class="intro-y box py-10 sm:py-20 mt-5">
          <!-- BEGIN: Wizard Options -->
          <div class="wizard flex flex-col lg:flex-row justify-center px-5 sm:px-20">
            <div class="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
              <button
                id="button-wizard-1"
                class="w-10 h-10 rounded-full button text-white background-primary"
                @click="wizardstep(1)"
              >1</button>
              <div
                id="title-wizard-1"
                class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700 font-medium"
              >Add User</div>
            </div>
            <div class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
              <button
                id="button-wizard-2"
                class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200"
                @click="wizardstep(2)"
              >2</button>
              <div
                id="title-wizard-2"
                class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700"
              >Save Username & Password</div>
            </div>
            <div class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
              <button
                id="button-wizard-3"
                class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200"
                @click="wizardstep(3)"
              >3</button>
              <div
                id="title-wizard-3"
                class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700"
              >Posting Instructions</div>
            </div>
            <div class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
              <button
                id="button-wizard-4"
                class="w-10 h-10 rounded-full button text-gray-600 bg-gray-200"
                @click="wizardstep(4)"
              >4</button>
              <div
                id="title-wizard-4"
                class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-gray-700"
              >Complete</div>
            </div>
            <div class="wizard__line hidden lg:block w-2/3 bg-gray-200 absolute mt-5"></div>
          </div>
          <!-- END: Wizard Options -->

          <!-- BEGIN: Wizard Step 1 -->
          <div id="wizard-1" class>
            <div class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200">
              <div class="font-medium text-base">Add User</div>
              <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                <div class="intro-y col-span-6 sm:col-span-3">
                  <div class="mt-3 text-gray-700 leading-relaxed">Navigate to Users > Add New</div>

                  <div class="mt-3 text-gray-700 leading-relaxed">
                    <img src="@/assets/img/account/websites/creds/step1-image1.png" />
                  </div>
                </div>

                <div class="intro-y col-span-6 sm:col-span-9">
                  <div class="mt-3 text-gray-700 leading-relaxed">Add a new user as follows:</div>

                  <div class="mt-3 text-gray-700 leading-relaxed">
                    <img src="@/assets/img/account/websites/creds/step1-image2.png" />
                  </div>

                  <div class="mt-3 text-gray-700 leading-relaxed">
                    Username:
                    <strong>@automate (save this for next step)</strong>
                    <br />Email: admin@automate.mn
                    <br />First Name: You Choose
                    <br />Last Name: You Choose
                    <br />Password:
                    <strong>Generate a strong password (save this for next step)</strong>
                    <br />Send to User: Disable
                    <br />Role: Editor
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                <div
                  class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
                >
                  <button
                    class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                    @click="wizardstep(2)"
                  >Next</button>
                  <div class="basic-error" v-if="isError">
                    <span class="color-danger" style="display: inline;">{{error_msg}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Wizard Step 1 -->

          <!-- BEGIN: Wizard Step 2 -->
          <div id="wizard-2" class="hidden">
            <div class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200">
              <div class="font-medium text-base">Save Wordpress User Details</div>
              <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                <div class="intro-y col-span-12 sm:col-span-6">
                  <div class="mb-2">Username</div>
                  <input
                    type="text"
                    class="input w-full border flex-1"
                    name="wordpress_username"
                    id="wordpress_username"
                    :value="typeof website.wordpress_username !== 'undefined' ? website.wordpress_username : ''"
                    @input="basic_change('wordpress_username', $event.target.value)"
                  />
                </div>

                <div class="intro-y col-span-12 sm:col-span-6">
                  <div class="mb-2">Password</div>
                  <input
                    type="password"
                    class="input w-full border flex-1"
                    name="wordpress_password"
                    id="wordpress_password"
                    :value="typeof website.wordpress_password !== 'undefined' ? website.wordpress_password : ''"
                    @input="basic_change('wordpress_password', $event.target.value)"
                  />
                </div>

                <div
                  class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
                >
                  <button
                    class="button w-24 justify-center block bg-gray-200 text-gray-600"
                    @click="wizardstep(1)"
                  >Previous</button>
                  <button
                    class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                    @click="wizardstep(3)"
                  >Next</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Wizard Step 2 -->

          <!-- BEGIN: Wizard Step 3 -->
          <div id="wizard-3" class="hidden">
            <div class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200">
              <div class="font-medium text-base">Posting Instructions</div>
              <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                <div class="intro-y col-span-12 sm:col-span-12">
                  <div class="mt-3 text-gray-700 leading-relaxed">
                    Please provide posting instructions, common instructions include:
                    <br />
                    <br />
                    <pre>
- Post as user: {username}
- Use the following library for featured images: {URL}
- Please use the Yoast SEO plugin for the on page SEO elements
                            </pre>
                  </div>
                </div>
                <div class="intro-y col-span-12 sm:col-span-12">
                  <div class="mb-2">Instructions:</div>
                  <textarea
                    rows="10"
                    class="input w-full border mt-2"
                    id="wordpress_details"
                    name="wordpress_details"
                    @input="basic_change('wordpress_details', $event.target.value)"
                    :value="typeof website.wordpress_details !== 'undefined' ? website.wordpress_details : ''"
                  ></textarea>
                </div>

                <div
                  class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
                >
                  <button
                    class="button w-24 justify-center block bg-gray-200 text-gray-600"
                    @click="wizardstep(2)"
                  >Previous</button>
                  <button
                    class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                    @click="wizardstep(4)"
                  >Next</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Wizard Step 3 -->

          <!-- BEGIN: Wizard Step 4 -->
          <div id="wizard-4" class="hidden">
            <div class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200">
              <div class="font-medium text-base">Complete</div>
              <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                <div class="col-span-12 text-center">
                  <div id="collectingToken" class="inline-block">
                    <unlock-icon size="1.5x" class="w-16 h-16 mx-auto mt-3 color-primary inline"></unlock-icon>
                    <div class="text-3xl mt-5">Details Saved</div>
                    <div class="text-gray-600 mt-2">Thank you for updating your website credentials.</div>
                  </div>
                </div>

                <div
                  class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
                >
                  <button
                    class="button w-24 justify-center block bg-gray-200 text-gray-600"
                    @click="wizardstep(3)"
                  >Previous</button>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Wizard Step 4 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "../../home-component/homeHeader";
import homeSearch from "../../home-component/homeSearch";
import homeAccount from "../../home-component/homeAccount";
import { ChevronRightIcon, UnlockIcon } from "vue-feather-icons";
import { 
  GETCREDWORDPRESSDATA,
  UPDATEWEBSITES
} from "../../../../store/actionType";
export default {
  components: {
    homeSearch,
    homeAccount,
    ChevronRightIcon,
    UnlockIcon,
    homeHeader
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      step: 1,
      website: {},
      isError: false,
      error_msg: ""
    }
  },
  mounted() {
    const sendingData = {
        user: this.user,
        website_id: this.$route.params.website_id
    }
    this.$store.dispatch(GETCREDWORDPRESSDATA, sendingData)
      .then(res => {
        if (res.status === 200) {
          if (res.data.error === true) {
            this.$router.push('404');
          } else {
            this.website = res.data.website;
          }
          console.log("GETCREDWORDPRESSDATA", res.data);
        }
      })
  },
  methods: {
    wizardstep(step) {
      let element;
      const steps = 4;
      for (let x = 1; x <= steps; x++) {
        if (x === step) {
          element = document.getElementById(`wizard-${x}`);
          element.classList.remove("hidden");
          element = document.getElementById(`button-wizard-${x}`);
          element.classList.remove("text-gray-600");
          element.classList.remove("bg-gray-200");
          element.classList.add("background-primary");
          element.classList.add("text-white");
          element = document.getElementById(`title-wizard-${x}`);
          element.classList.add("font-medium");
        } else {
          element = document.getElementById(`wizard-${x}`);
          element.classList.add("hidden");
          element = document.getElementById(`button-wizard-${x}`);
          element.classList.remove("background-primary");
          element.classList.remove("text-white");
          element.classList.add("text-gray-600");
          element.classList.add("bg-gray-200");
          element = document.getElementById(`title-wizard-${x}`);
          element.classList.remove("font-medium");
        }
      }
    },
    basic_change(id, value) {
      if (value !== '') {
        let data = {};
        data[id] = value;
        data.api_key = this.user.api_key;
        data.website_id = this.website._id;
        this.$store.dispatch(UPDATEWEBSITES, data)
          .then(res => {
            if (res.status === 200) {
              console.log('UPDATEWEBSITES', res);
              if (res.data === "OK") {
                let element = document.getElementById(id);
                element.classList.remove("border-danger");
                element.classList.add("border-primary");
              } else {
                this.isError = true;
                let element = document.getElementById(id);
                element.classList.remove("border-primary");
                element.classList.add("border-danger");
                this.error_msg = 'Error: '+res.status+' '+res.responseText;
              }
            }
          });
      } else {
        this.isError = true;
        let element = document.getElementById(id);
        element.classList.remove("border-primary");
        element.classList.add("border-danger");
        this.error_msg = 'Field cannot be empty';
      }
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