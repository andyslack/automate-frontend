<template>
  <div class="app dashboard-home">
    <div class="content">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
          <div class="col-span-12 mt-8">
            <div class="intro-y flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">Install Dev Instance</h2>
            </div>
            <div class="col-span-12 mt-6">
              <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                <div class="intro-y box col-span-12 lg:col-span-6">
                  <div class="p-5">
                    This will setup a local admin user and insert some demo data into the application.
                    <strong>Please note</strong>, you need to authenticate with Google to access, please use a google email address.
                  </div>
                  <div v-if="output " class="p-5">
                    <pre v-html="output">
                    </pre>
                  </div>
                  <div class="p-5">
                    <div class="mt-2 mb-4">
                      <input
                        class="input border mt-2 ml-2 border-primary"
                        style="width: 250px;"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Google Email Address"
                        v-model="email"
                        required
                      />
                      <input
                        class="input border mt-2 ml-2 border-primary"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="First Name"
                        v-model="fname"
                        required
                      />
                      <input
                        class="input border mt-2 ml-2 border-primary"
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Last Name"
                        v-model="lname"
                        required
                      />
                    </div>

                    <div class="mt-2 ml-4 mb-4">
                      <span class="pr-3 color-primary">Demo data</span>
                      <input
                        type="checkbox"
                        id="demodata"
                        name="demodata"
                        class="input input--switch border"
                        v-model="demodata"
                      />
                    </div>

                    <button
                      class="button background-primary w-100 text-white ml-2 mt-4"
                      @click="installUser()"
                    >Install</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { INSTALLUSER } from "../store/actionType";
export default {
  data() {
    return {
      output: "",
      email: "",
      fname: "",
      lname: "",
      demodata: true,
    };
  },
  mounted() {},
  methods: {
    installUser() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.email)) {
        const userData = {
          email: this.email,
          fname: this.fname,
          lname: this.lname,
          demodata: this.demodata,
        };
        this.$store.dispatch(INSTALLUSER, userData).then((res) => {
          if (res.status === 200) {
            console.log("install user response", res.data);
            this.output = res.data.output;
          }
        });
      }
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