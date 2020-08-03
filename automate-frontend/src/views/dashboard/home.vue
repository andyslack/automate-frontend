<template>
<div class="app dashboard-home">
    <div class="flex">
    <home-header></home-header>
    <div class="content">
        <div class="top-bar">
            <div class="-intro-x breadcrumb mr-auto hidden sm:flex"> <a href="" class="">Dashboard</a> <i data-feather="chevron-right" class="breadcrumb__icon"></i> <a href="/home" class="breadcrumb--active">Home</a> </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
                <div class="col-span-12 mt-3">
                    <div class="intro-y flex items-center h-10">
                        <h2 class="text-lg font-medium truncate mr-5">
                        Welcome
                        </h2>
                        <a href="" class="ml-auto flex text-theme-1"> <i data-feather="refresh-ccw" class="w-4 h-4 mr-3"></i> Reload Data </a>
                    </div>
                </div>
                <div class="col-span-12">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <a href="#">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <i data-feather="clipboard" class="report-box__icon color-primary"></i>
                                        <div class="ml-auto">
                                            <div class="report-box__indicator background-primary tooltip cursor-pointer" title="Tasks awaiting user input"> &nbsp; &nbsp;&nbsp; </div>
                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6"></div>
                                    <div class="text-base text-gray-600 mt-1">Open Tasks</div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <a href="/account/billing">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <i data-feather="credit-card" class="report-box__icon color-danger"></i>
                                        <div class="ml-auto">
                                            <div class="report-box__indicator background-danger tooltip cursor-pointer" title="Yesterday's Revenue"> &nbsp; $ &nbsp;&nbsp;</div>
                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6">$</div>
                                    <div class="text-base text-gray-600 mt-1">30 Days Revenue</div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <a href="/account/billing">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <i data-feather="repeat" class="report-box__icon color-warning"></i>
                                        <div class="ml-auto">
                                            <div class="report-box__indicator background-warning tooltip cursor-pointer" title="New subscriptions this month"> &nbsp;&nbsp;&nbsp;</div>
                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6"></div>
                                    <div class="text-base text-gray-600 mt-1">Live Subscriptions</div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <a href="/account/users">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <i data-feather="user" class="report-box__icon color-info"></i>
                                        <div class="ml-auto">
                                            <div class="report-box__indicator background-info tooltip cursor-pointer" title="Last 7 days">&nbsp;&nbsp;&nbsp;</div>
                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6"></div>
                                    <div class="text-base text-gray-600 mt-1">Total Users</div>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10">
                <div class="xxl:pl-6 grid grid-cols-12 gap-6">
                    <div class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
                        <div class="intro-x flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-auto">
                                Important Notes
                            </h2>
                        </div>
                        <div class="mt-5 intro-x">
                            <div class="slick-carousel box" id="important-notes">
                                <div class="p-5">
                                    <div class="text-base font-medium truncate">Welcome to Automate Beta! </div>
                                    <div class="text-gray-600 text-justify mt-1">
                                        Thank you for joining our Beta release. <br><br>
                                        Your feedback is super important to us, please do provide feedback.
                                        <br><br>
                                        As a thank you, please use your lifetime beta coupon code at checkout for a 20% discount on all services.
                                    </div>
                                    <div class="font-medium flex mt-5">
                                        <a href="mailto:support@automate.mn" target="_blank"><button type="button" class="button button--sm bg-gray-200 text-gray-600">Send Feedback</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
                        <div class="intro-x flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-auto">
                                Customer NPS
                            </h2>
                        </div>
                        <div class="mt-5 intro-x">
                            <div class="slick-carousel box" id="important-notes">
                                <div class="p-5">
                                    <div class="text-gray-600 text-center mt-1">
                                        <i data-feather="user" class="report-box__icon w-20 h-20 color-danger inline"></i>
                                        <div class="inline color-danger" style="font-size: 50px;"></div>

                                            <i data-feather="user" class="report-box__icon w-20 h-20 color-warning inline"></i>
                                            <div class="inline color-warning" style="font-size: 50px;"></div>

                                        <i data-feather="user" class="report-box__icon w-20 h-20 color-success inline"></i>
                                        <div class="inline color-success" style="font-size: 50px;"></div>
                                    
                                        <i data-feather="user" class="report-box__icon w-20 h-20 color-primary inline"></i>
                                        <div class="inline color-primary" style="font-size: 50px;"></div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                        <div class="intro-x flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                                Latest Feedback
                            </h2>
                            <a href="" class="ml-auto text-theme-1 truncate">See all</a>
                        </div>
                        <div class="report-timeline mt-5 relative">
                            <div class="intro-x relative flex items-center mb-3">
                                <div class="report-timeline__image">
                                    <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                        <a href="/user/<%=comment.user._id%>"><img ></a>
                                    </div>
                                </div>
                                <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                                    <a href="/task/<%=comment.task%>">
                                    <div class="flex items-center">
                                        <div class="font-medium"></div>
                                        <div class="text-xs text-gray-500 ml-auto"></div>
                                    </div>
                                    <div class="text-gray-600 mt-2">
                                        <div class="text-sm text-gray-600 inline"></div>
                                    </div>
                                    </a>
                                </div>
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
import homeHeader from './home-component/homeHeader'
export default {
    components: {
        homeHeader
    },
    data() {
        return {
            user: localStorage.getItem('user'),
        }
    },
    created() {

    },
    computed: {
    },
    methods: {

    }
}
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