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
                <a href="/email" class="breadcrumb--active">Email</a>
                <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
                <a href="/email/docs" class="breadcrumb--active">Docs</a>
            </div>
            <!-- END: Breadcrumb -->
            <home-search></home-search>
            <home-account></home-account>
            </div>
            <!-- END: Top Bar -->
            <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">Email Marketing Docs</h2>
            </div>
            <div class="grid grid-cols-12 gap-6">
            <!-- BEGIN: FAQ Menu -->
            <div class="intro-y col-span-12 lg:col-span-4 xl:col-span-3">
                <div class="box mt-5">
                <div class="p-5">
                    <a class="flex items-center" href="#howitworks">
                    <activity-icon class="w-4 h-4 mr-2"></activity-icon>
                    How it works
                    </a>
                </div>
                <div class="p-5 border-t border-gray-200">
                    <a class="flex items-center" href="#api">
                    <github-icon class="w-4 h-4 mr-2"></github-icon>
                     API Integration
                    </a>
                </div>
                <div class="p-5 border-t border-gray-200">
                    <a class="flex items-center" href="#embed">
                    <cast-icon size="1.5x" class="w-4 h-4 mr-2"></cast-icon>
                    Embed on website
                    </a>
                </div>
                </div>
            </div>
            <!-- END: FAQ Menu -->
            <!-- BEGIN: FAQ Content -->
            <div class="intro-y col-span-12 lg:col-span-8 xl:col-span-9">
                <!-- BEGIN: How it works -->
                <a id="howitworks"></a>
                <div class="intro-y box lg:mt-5">
                <div class="flex items-center p-5 border-b border-gray-200">
                    <h2 class="font-medium text-base mr-auto">How it works</h2>
                </div>
                <div class="accordion px-5 py-1">
                    <div class="border-gray-200 py-4">
                    <div
                        class="font-medium block"
                    >Post email subscribers to us and we take care of the rest 💌</div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        That's right! All you need to do is post your
                        email subscribers to us and we will put your email marketing on autopilot.
                    </div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        Learn more here:
                        <a href="https://automate.mn/email/" class="color-primary" target="_blank">
                        Automate Email
                        Marketing
                        </a>.
                    </div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        Do you need help integrating, get in touch via
                        livechat or email (
                        <a
                        href="mailto:support@automate.mn"
                        class="color-primary"
                        target="_blank"
                        >support@automate.mn</a>) and our team will help you get going.
                    </div>
                    </div>
                </div>
                </div>
                <!-- END: How it works -->

                <!-- BEGIN: API -->
                <a id="api"></a>
                <div class="intro-y box mt-5">
                <div class="flex items-center p-5 border-b border-gray-200">
                    <h2 class="font-medium text-base mr-auto">API Integration</h2>
                </div>
                <div class="accordion px-5 py-1">
                    <div class="border-gray-200 py-4">
                    <div class="font-medium block">Integrate any application or website with Automate</div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        <a
                        href="https://documenter.getpostman.com/view/1129481/T17CCUri?version=latest#42d90c24-cd17-4134-a82a-7aea857c3829"
                        class="color-primary"
                        target="_blank"
                        >Full API Documentation Here</a>.
                    </div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        Our team are on hand to help you integrate via
                        livechat or email (
                        <a
                        href="mailto:support@automate.mn"
                        class="color-primary"
                        target="_blank"
                        >support@automate.mn</a>).
                    </div>
                    </div>
                </div>
                </div>
                <!-- END: API -->

                <!-- BEGIN: JS -->
                <a id="embed"></a>
                <div class="intro-y box mt-5">
                <div class="flex items-center p-5 border-b border-gray-200">
                    <h2 class="font-medium text-base mr-auto">Embed on website</h2>
                </div>
                <div class="px-5 py-1">
                    <div class="border-gray-200 py-4">
                    <div class="text-gray-700 leading-relaxed">
                        If you are using WordPress, we recommend using the
                        <a
                        href="https://wordpress.org/plugins/insert-headers-and-footers/"
                        target="_blank"
                        class="color-primary"
                        >Insert Headers and Footers plugin</a>.
                    </div>

                    <div class="font-medium block mt-3">Add the following to your &lt;head&gt; tag:</div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        <pre>
&#x3C;!-- Start: Automate.mn --&#x3E;
&#x3C;script type=&#x22;text/javascript&#x22;&#x3E;
    var automate_public_key = &#x27;{{user.public_key}}&#x27;;
    var automate_category = &#x27;<span
class="color-danger"
>MUSCLE</span>&#x27;; //<span class="color-info">MUSCLE</span>, <span class="color-info">DIET</span> or <span class="color-info">MENSHEALTH</span>
    var automate_lang = &#x27;EN&#x27;; //EN, FR, DE, IT, ES
    //var automate_redirect_url = &#x27;HTTPS://WEB.EXT/THANK-YOU&#x27; //Redirect user to this location
&#x3C;/script&#x3E;
&#x3C;!-- End: Automate.mn --&#x3E;
                                    </pre>
                    </div>
                    <div class="font-medium block">Place tag before the closing &lt;/body&gt; tag:</div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        <pre>
&#x3C;script src=&#x22;https://app.automate.mn/js/tools/email/loadForm.js&#x22;&#x3E;&#x3C;/script&#x3E;
                                    </pre>
                    </div>
                    <div
                        class="font-medium block"
                    >Add the following HTML tag where you would like the form to show:</div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                        <pre>
&#x3C;div id=&#x22;automateForm&#x22;&#x3E;&#x3C;/div&#x3E;
                                    </pre>
                    </div>
                    </div>
                    <div class="font-medium block">Style the form by adding CSS to your site:</div>
                    <div class="mt-3 text-gray-700 leading-relaxed">
                    <pre>
/* START: Automate Form CSS */
.automate-color-danger{ color: darkred; }
.automate-color-success{ color: darkgreen; }
.automate-border-danger{ --border-opacity: 1; border-color: darkred; }
.automate-border-success{ --border-opacity: 1; border-color: darkgreen; }
.automate-form-input-outer{ padding: 0.2em; }
.automate-form-input-email input{ width: 500px; }
.automate-form-input-lname input{ display:none; }
label[for=&#x22;fname&#x22;],label[for=&#x22;lname&#x22;],label[for=&#x22;email&#x22;]{ display:none; }
/* END: Automate Form CSS */
                                    </pre>
                    </div>
                </div>
                </div>
            </div>
            <!-- END: Wordpress -->
            </div>
            <!-- END: FAQ Content -->
        </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import {
  ChevronRightIcon,
  ActivityIcon,
  GithubIcon,
  CastIcon,
} from 'vue-feather-icons'
export default {
    components: {
        homeHeader,
        homeSearch,
        homeAccount,
        ChevronRightIcon,
        ActivityIcon,
        GithubIcon,
        CastIcon
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user"))
        };
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