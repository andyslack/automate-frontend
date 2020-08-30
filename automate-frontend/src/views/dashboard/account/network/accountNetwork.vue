<template>
  <div class="grid grid-cols-12 gap-5">
    <div class="col-span-12 xl:col-span-6">
        <div>
            <label>MoreNiche</label>
            <input type="text" class="input w-full border bg-gray-100 mt-2" :class="{'border-primary': isSuccess === true, 'border-danger': isError === true}" placeholder="123456" id="moreniche" v-model="network" v-on:change="network_onchange('moreniche', network)">
            <div class="moreniche color-primary mt-2"></div>
        </div>
        <div class="network-errors mt-2" v-html="html"></div>
    </div>
</div>
</template>

<script>
import { 
  UPDATEUSER
} from "../../../../store/actionType";
export default {
    name: "account-network",
    data() {
      return {
        user: JSON.parse(localStorage.getItem("user")),
        network: "",
        isError: false,
        isSuccess: false,
        html: ""
      }
    },
    mounted() {
      this.network = (typeof this.user.networks != 'undefined' && this.user.networks && this.user.networks.moreniche) ? this.user.networks.moreniche : '';
    },
    methods: {
      moreniche_id_validation(moreniche_id) {
        const re = /^[0-9]{6,6}$/;
        return re.test(String(moreniche_id));
      },
      network_onchange(field, value) {
        if (this.moreniche_id_validation(value)) {
            let networks;
            if (field === "moreniche") {
                networks = {
                    moreniche: value
                }
            }
            let data = {
                api_key: this.user.api_key,
                user_id: this.user._id,
                networks: networks
            }
            this.$store.dispatch(UPDATEUSER, data)
              .then(res => {
                if (res.status === 200) {
                  this.isError = false;
                  this.isSuccess = true;
                  this.html = `<span class="color-primary" style="display: inline;">Successfully Updated</span>`
                } else {
                  const error_msg = `Error: ${res.status} ${res.responseText}`;
                  this.html = `<span class="color-danger" style="display: inline;">${error_msg}</span>`;
                  this.isError = true;
                  this.isSuccess = false;
                }
              });
        } else {
            this.isError = true;
            this.isSuccess = false;
            this.html = `<span class="color-danger" style="display: inline;">Must be 6 digits</span>`;
        }
      }
    }
}
</script>

<style>

</style>