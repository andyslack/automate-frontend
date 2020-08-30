<template>
  <div class="grid grid-cols-12 gap-5">
    <div class="col-span-12 xl:col-span-6">
        <div>
            <label>First Name</label>
            <input type="text" class="input w-full border bg-gray-100 mt-2" :class="{'border-primary': field === 'user_fname'}" placeholder="First Name" id="user_fname" v-model="user.user_fname" v-on:change="basic_change('user_fname', user.user_fname)">
            <div class="user_fname color-primary mt-2" v-if="isfname">
                Successfully Updated
            </div>
        </div>
        <div class="mt-3">
            <label>Last Name</label>
            <input type="text" class="input w-full border bg-gray-100 mt-2"  :class="{'border-primary': field === 'user_lname'}" placeholder="Last Name" id="user_lname" v-model="user.user_lname"  v-on:change="basic_change('user_lname', user.user_lname)">
            <div class="user_lname color-primary mt-2" v-if="islname">
                Successfully Updated
            </div>
        </div>
        <div class="mt-3">
            <label>Email Address</label>
            <input type="email" class="input w-full border bg-gray-100 mt-2" :class="{'border-primary': field === 'user_email'}" placeholder="Email Address" id="user_email" v-model="user.user_email"  v-on:change="basic_change('user_email', user.user_email)">
            <div class="user_email color-primary mt-2" v-if="isEmail">
                Successfully Updated
            </div>
        </div>
        <div class="avatar-error"></div>
    </div>
</div>
</template>

<script>
import { 
  UPDATEUSER
} from "../../../../store/actionType";
export default {
    name: "account-profile",
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user")),
            field: "",
            isfname: false,
            islname: false,
            isEmail: false
        }
    },
    methods: {
        basic_change(field, value) {
          const sendingData = {}
          sendingData[field] = value;
          sendingData["user_id"] = this.user._id;
          sendingData["api_key"] = this.user.api_key;
          this.$store.dispatch(UPDATEUSER, sendingData)
            .then(res => {
                if (res.status === 200) {
                  localStorage.setItem('user', JSON.stringify(this.user));
                  this.field = field;
                  switch (field) {
                    case "user_fname":
                      this.isfname = true;
                      break;
                    case "user_lname":
                      this.islname = true;
                      break;
                    case "user_email":
                      this.isEmail = true;
                      break;
                  }
                }
            });
        }
    }
}
</script>

<style>

</style>