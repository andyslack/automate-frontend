<template>
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: Users -->
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
      <!-- BEGIN: Add Website Modal -->
      <div id="add-website-modal">
        <div class="preview">
          <div class="text-center">
            <a
              href="javascript:;"
              data-toggle="modal"
              data-target="#add-website"
              class="button button-primary inline-block text-white"
            >Add New Website</a>
          </div>
          <div class="modal" id="add-website">
            <div class="modal__content">
              <div class="p-5">
                <i data-feather="plus-square" class="w-16 h-16 mx-auto mt-3 color-primary"></i>
                <div class="text-3xl mt-5 mb-5 text-center">Add New Website</div>
                <div class="mt-2 mb-2">
                  <select
                    class="select2 w-full border"
                    id="add_website_type"
                    name="add_website_type"
                  >
                    <option value="wordpress" selected>WordPress</option>
                  </select>
                </div>
                <div class="add-website-type-error color-danger mt-2"></div>

                <input
                  type="text"
                  class="input w-full border bg-gray-100 mt-2"
                  placeholder="Website Name"
                  id="add_website_name"
                  value
                  required
                />
                <div class="add-website-name-error color-danger mt-2"></div>

                <div class="mt-2 mb-2">
                  <select
                    class="select2 border"
                    style="width:100px;"
                    id="add_website_ext"
                    name="add_website_ext"
                  >
                    <option value="https" selected>https</option>
                    <option value="http">http</option>
                  </select>

                  <input
                    type="text"
                    style="width:311px; margin-left: 5px;"
                    class="input border bg-gray-100 mt-2"
                    placeholder="google.com"
                    id="add_website_url"
                    value
                    required
                  />
                  <div class="add-website-url-error color-danger mt-2"></div>
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
                  class="button button-primary w-36 text-white"
                  onclick="return add_website_onclick({
                                                    website_type: document.getElementById('add_website_type').value,
                                                    website_name: document.getElementById('add_website_name').value,
                                                    website_ext: document.getElementById('add_website_ext').value,
                                                    website_url: document.getElementById('add_website_url').value,
                                                })"
                >Add Website</button>
              </div>
              <div class="add-website-error p-5 text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Add Website Modal -->

      <div class="hidden md:block mx-auto text-gray-600">
        <!--Showing x Websites-->
      </div>
      <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
        <div class="w-56 relative text-gray-700">
          <!-- <input type="text" class="input w-56 box pr-10 placeholder-theme-13" placeholder="Search...">
          <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-feather="search"></i>-->
        </div>
      </div>
    </div>

    <div v-for="website in websites" :key="website._id" class="intro-y col-span-12 md:col-span-6">
      <div class="box">
        <div class="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200">
          <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
            <div class="font-medium">{{website.website_name}}</div>
            <a v-bind:href="website.website_url" target="_blank">
              <div class="text-gray-600 text-xs">{{website.website_url}}</div>
            </a>
            <div class="delete-error-<%=website._id%>"></div>
          </div>

          <!--     <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                                    <div class="connect-website-button-<%=website._id%>"><a href="/account/websites/connect/<%=website._id%>"><button class="button button--sm text-white button-primary mr-2">Connect</button></a></div>
          </div>-->

          <!-- TEMP USERNAME/PASS ACCESS UNTIL OAUTH-->
          <div v-if="website.website_status === 'Unverified'" class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
            <div :class="'creds-website-button-' + website._id">
              <a v-bind:href="'/account/websites/creds/' + website._id">
                <button class="button button--sm text-white button-info mr-2">Credentials</button>
              </a>
            </div>
          </div>

          <!--  <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                            <div class="disconnect-website-button-<%=website._id%>"><a href="/account/websites/disconnect/<%=website._id%>"><button class="button button--sm text-white button-warning mr-2">Disconnect</button></a></div>
          </div>-->

          <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
            <div :class="'delete-website-button-' + website._id">
              <button
                class="button button--sm text-white button-danger mr-2"
                @click="delete_website_areyousure(website._id)" v-if="website._id !== areYouSureId"
              >Delete</button>
              <button v-if="website._id === areYouSureId" class="button button--sm text-white button-danger mr-2" @click="delete_website_onclick(website._id)">Are You Sure?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Websites -->
  </div>
</template>

<script>
import {
  DELETEWEBSITE
} from "../../../../store/actionType"
import { URL } from "../../../../services/config"
export default {
  name: "account-website",
  props: {
    websites: Array
  },
  data() {
    return {
      areYouSureId: "",
      user: JSON.parse(localStorage.getItem("user")),
      url: URL
    }
  },
  methods: {
    delete_website_areyousure(id) {
      this.areYouSureId = id;
    },
    delete_website_onclick(id) {
      this.areYouSureId = id;
      let data = {};
      data.website_id = id;
      data.api_key = this.user.api_key;
      console.log(data)
      this.$store.dispatch(DELETEWEBSITE, data)
        .then(res => {
          if (res.data === "OK") {
            window.location.replace(this.url + '/account');
          }
        });
    }
  }
};
</script>

<style>
</style>