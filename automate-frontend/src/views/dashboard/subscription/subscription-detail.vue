<template>
<div class="app dashboard-home">
    <div class="flex">
        <home-header></home-header>
        <div class="content">
            <div class="top-bar">
                <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
                    <a href="/home" class>Dashboard</a>
                    <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
                    <a href="/account" class>Account</a>
                    <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
                    <a href="/account/billing" class>Billing</a>
                    <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
                    <a href="#" class="breadcrumb--active">Subscription</a>
                </div>
                <home-search></home-search>
                <home-account></home-account>
            </div>
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-6">
                    <div class="col-span-12 mt-3">
                        <div class="intro-y flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">Subscription</h2>
                            <a v-if="user.user_type >= 9 && subscription" v-bind:href="'/subscription/' + subscription._id + '/renew'">
                                <button class="button button--sm text-white button-primary mr-2">Renew</button>
                            </a>
                            <a v-else href class="ml-auto flex text-theme-1">
                                <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon>Reload Data
                            </a>
                        </div>

                        <div class="col-span-12 mt-3">
                            <div class="intro-y overflow-auto lg:overflow-visible sm:mt-0">
                                <table class="table table-report sm:mt-2">
                                    <thead>
                                        <tr>
                                            <th class="whitespace-no-wrap">Original Transaction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="intro-x">
                                            <td v-if="subscription.transaction">
                                                <a v-bind:href="'/account/billing/transaction/' + subscription.transaction._id">{{subscription.transaction._id}}</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12">
                        <div class="intro-y overflow-auto lg:overflow-visible sm:mt-0">
                            <table class="table table-report sm:mt-2">
                                <thead>
                                    <tr>
                                        <th class="whitespace-no-wrap">Tasks</th>
                                        <th class="whitespace-no-wrap justify-right">Fully Automate</th>
                                        <th class="whitespace-no-wrap justify-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="intro-x" v-for="(subscriptionItem, index) in subscription.items" :key="subscriptionItem.website">
                                        <td>
                                            <div class="whitespace-no-wrap">
                                                {{subscriptionItem.task_name}}{{subscriptionItem.task_word_count ? (subscriptionItem.task_word_count) : ""}}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="whitespace-no-wrap justify-right">
                                                <input type="checkbox" :id="'automate_checkbox_'+ index" class="input input--switch border" v-model="subscriptionItem.automate" @change="automate_onchange(subscriptionItem.automate, index)" />
                                            </div>
                                        </td>
                                        <td>
                                            <div v-if="checkedIndex !== index" :class="'automate_drop_' + index" class="inline" :style="'display:' + subscriptionItem.automate ? 'inline': 'none'">
                                                <select v-model="subscriptionItem.website" class="select2 w-full border" :id="'website_' + index" :name="'website_' + index" onchange="website_onchange(<%=i%>, this)">
                                                    <option v-if="!subscriptionItem.website" disabled selected value>-- select an option --</option>
                                                    <option v-for="website in websites" :key="website._id" :value="website._id">{{website.website_name}} - {{website.website_url}}</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
    GETSUBSCRIPTIONDATA,
    UPDATESUBSCRIPTIONITEMS
} from "../../../store/actionType";
import {
    ChevronRightIcon,
    RefreshCcwIcon
} from "vue-feather-icons";
export default {
    components: {
        homeHeader,
        homeSearch,
        homeAccount,
        ChevronRightIcon,
        RefreshCcwIcon,
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user")),
            subscriptionId: this.$route.params.subscription_id,
            subscription: {},
            websites: [],
            checkedIndex: null,
            uncheckedIndex: null
        };
    },
    mounted() {
        const sendingData = {
            user: this.user,
            subscriptionId: this.subscriptionId,
        };
        this.$store.dispatch(GETSUBSCRIPTIONDATA, sendingData).then((res) => {
            if (res.status === 200) {
                console.log("here get subscription data", res.data);
                this.subscription = res.data.subscription;
                this.websites = res.data.websites;
            }
        });
    },
    methods: {
        automate_onchange(event, index) {
            console.log("here is the checkbox event", event, index);
            if (event === true) {
                this.checkedIndex = null;
                let data = {
                    api_key: this.user.api_key,
                    subscription_id: this.subscription._id,
                    item_number: index,
                    automate: true
                };
                this.$store.dispatch(UPDATESUBSCRIPTIONITEMS, data)
                    .then(res => {
                        if (res.status === 200) {
                            console.log(res.data)
                        }
                    });
            } else {
                this.checkedIndex = index;
                let data = {
                    api_key: this.user.api_key,
                    subscription_id: this.subscription._id,
                    item_number: index
                }
                this.$store.dispatch(UPDATESUBSCRIPTIONITEMS, data)
                    .then(res => {
                        if (res.status === 200) {
                            console.log(res.data)
                        }
                    });
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
