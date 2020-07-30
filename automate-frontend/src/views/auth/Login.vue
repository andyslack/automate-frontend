<template>
<div class="login body">
<div class="container sm:px-10">
    <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
            <div class="my-auto">
                <img alt="Automate" class="w-6" src="https://cdn.automate.mn/wp-content/uploads/cropped-icon-32x32.png">
                <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                    Automation Awaits
                </div>
                <div class="-intro-x mt-5 text-lg text-white">Manage all your automation in one place</div>
            </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <div id="google-signin">
                    <div id="my-signin2"></div>
                </div>

                 <!-- <div id="facebook-signin" class="mt-4">
                    <fb:login-button class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true" data-width="" scope="public_profile,email" onlogin="checkFBLoginState();">
                    </fb:login-button>
                </div> -->

                <div id="linkedin-signin" class="mt-4">
                    <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=<%=process.env.LINKEDIN_APP_CLIENT_ID%>&redirect_uri=https://app.automate.mn/login&state=aU7)m@73L!n5eD1n&scope=r_liteprofile%20r_emailaddress"><img src="@/assets/img/social/linkedin.png"></a>
                </div>

                <div class="error"></div>

                <div class="-intro-x mt-10 text-md text-black">
                    Register for your <a href="https://automate.mn/join/" class="color-primary" target="_blank">automate account here</a>.
                </div>

            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import { gapi } from 'gapi-script';
import { LOGIN } from "@/store/actionType";
export default {
  data() {
    return {
      user: null,
      id_token: "",
      email: "",
      photo: "",
      expires: ""
    };
  },
  mounted() {
    gapi.signin2.render('my-signin2', {
    //   scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSignIn,
      onfailure: this.onFailure
    })
  },
  methods: {
    onSignIn (user) {
      // const profile = user.getBasicProfile()
      console.log("here is the basic profile info", user)
      this.onSuccess("google", user);
    },
    onFailure () {// Vuex Store
    },
    onSuccess(type, data) {
      switch (type) {
        case "google": {
          this.id_token = data.getAuthResponse().id_token;
          const profile = data.getBasicProfile();
          this.email = profile.getEmail();
          this.photo = profile.getImageUrl();
          console.log("here is the google info: ", this.id_token, this.email, this.photo);
          break;
        }
        default: {
          break;
        }
      }
      const loginData = {
        service: type,
        token: this.id_token,
        email: this.email,
        photo: this.photo,
        expires: this.expires,
      };
      this.$store.dispatch(LOGIN, loginData)
        .then(res => {
          console.log(res);
        })
    }
  }
}
</script>
