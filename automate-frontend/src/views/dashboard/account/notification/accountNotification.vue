<template>
  <div>
    <div class="response" v-if="isUpdate">
      <span class="color-primary" style="display: inline;">Updated</span>
    </div>

    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 xl:col-span-6">
        <div class="font-medium block mt-3" id="transactions">Transactions</div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.transaction_new"
            @change="update_onchange('transaction_new', user.notifications.transaction_new)"
            id="transaction_new"
            class="input input--switch border"
          />
          <span class="pl-3">New Transaction</span>
        </div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.transaction_complete"
            id="transaction_complete"
            class="input input--switch border"
          />
          <span class="pl-3">Transaction Complete</span>
        </div>
      </div>

      <div class="col-span-12 xl:col-span-6">
        <div class="font-medium block mt-3" id="subscriptions">Subscriptions</div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.subscription_renewal"
            id="subscription_renewal"
            class="input input--switch border"
          />
          <span class="pl-3">Renewal Reminders</span>
        </div>
      </div>

      <div class="col-span-12 xl:col-span-6">
        <div class="font-medium block mt-3" id="tasks">Tasks</div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.task_status_change"
            id="task_status_change"
            class="input input--switch border"
          />
          <span class="pl-3">Task Status Changes</span>
        </div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.task_complete"
            id="task_complete"
            class="input input--switch border"
          />
          <span class="pl-3">Task Complete</span>
        </div>
      </div>

      <div class="col-span-12 xl:col-span-6" v-if="user.user_type >= 4">
        <div class="font-medium block mt-3" id="users">Users</div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.user_new"
            id="user_new"
            class="input input--switch border"
          />
          <span class="pl-3">New User Signups</span>
        </div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.user_closed"
            id="user_closed"
            class="input input--switch border"
          />
          <span class="pl-3">User Closes Account</span>
        </div>
      </div>

      <div class="col-span-12 xl:col-span-6">
        <div class="font-medium block mt-3" id="newsletters">Newsletter</div>
        <div class="pt-3">
          <input
            type="checkbox"
            v-model="user.notifications.newsletter"
            id="newsletter"
            class="input input--switch border"
          />
          <span class="pl-3">News & Product Updates</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UPDATENOTIFICATION } from "../../../../store/actionType";
export default {
  name: "account-notification",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      isUpdate: false,
    };
  },
  methods: {
    update_onchange(type, value) {
      const sendingData = {};
      sendingData[type] = value;
      sendingData.notification_id = this.user.notifications._id;
      sendingData.api_key = this.user.api_key;
      this.$store.dispatch(UPDATENOTIFICATION, sendingData).then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(this.user));
          this.isUpdate = true;
        }
      });
    },
  },
};
</script>

<style>
</style>