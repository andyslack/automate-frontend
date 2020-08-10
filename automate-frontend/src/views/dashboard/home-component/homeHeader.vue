<template>
  <div>
     <div class="mobile-menu md:hidden">
      <div class="mobile-menu-bar">
        <a href="/home" class="flex mr-auto">
          <img alt="Automate" class="w-6" src="https://cdn.automate.mn/wp-content/uploads/cropped-icon-32x32.png"/>
        </a>
        <a href="javascript:;" id="mobile-menu-toggler">
          <i data-feather="bar-chart-2" class="w-8 h-8 text-white transform -rotate-90"></i>
        </a>
      </div>
      <ul class="border-t border-theme-24 py-5 hidden">
        <li>
          <a class="menu menu--active" href="/home">
            <div class="menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div class="menu__title">Dashboard</div>
          </a>
        </li>
      </ul>
    </div>
    <!-- END: Mobile Menu -->

      <!-- BEGIN: Side Menu -->
    <nav class="side-nav">
    <a href="/home" class="intro-x flex items-center pl-5 pt-4">
        <span class="title">Automate</span>
    </a>
    <div class="side-nav__devider my-6"></div>
    <ul>
        <li>
        <a href="/home" class="side-menu" :class="{'side-menu--active': currentRoute == 'home'}">
            <div class="side-menu__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            </div>
            <div class="side-menu__title">Dashboard</div>
        </a>
        </li>
        <li class="side-nav__devider my-6"></li>
        <li>
        <a @click="clickEmailMenu" class="side-menu" :class="{'side-menu--open': isEmail || currentRoute == 'email' || currentRoute == 'email/logs' || currentRoute == 'email/docs' || currentRoute === 'email/stats'}">
            <div class="side-menu__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6" />
            </svg>
            </div>
            <div class="side-menu__title">
            Email
            <svg v-if="!isEmail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down side-menu__sub-icon">
                <polyline points="6 9 12 15 18 9" />
            </svg>
            <svg v-if="isEmail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down side-menu__sub-icon transform rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
        </a>
        <ul v-if="isEmail" :class="{'side-menu__sub-open': currentRoute === 'email' || currentRoute === 'email/logs' || currentRoute === 'email/docs' || currentRoute === 'email/stats'}">
            <li>
            <a href="/email" class="side-menu" :class="{'side-menu--active': currentRoute == 'email'}">
                <div class="side-menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox">
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                </svg>
                </div>
                <div class="side-menu__title">Overview</div>
            </a>
            </li>
            <li>
            <a href="/email/docs" class="side-menu" :class="{'side-menu--active': currentRoute == 'email/docs'}">
                <div class="side-menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
                </div>
                <div class="side-menu__title">Docs</div>
            </a>
            </li>
            <li>
            <a href="/email/logs" class="side-menu" :class="{'side-menu--active': currentRoute == 'email/logs'}">
                <div class="side-menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                </div>
                <div class="side-menu__title">Logs</div>
            </a>
            </li>
            <li>
            <a href="/email/stats" class="side-menu" :class="{'side-menu--active': currentRoute == 'email/stats'}">
                <div class="side-menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
                </div>
                <div class="side-menu__title">Stats</div>
            </a>
            </li>
        </ul>
        </li>
        <li>
        <a href="/reports" class="side-menu" :class="{'side-menu--active': currentRoute == 'reports'}">
            <div class="side-menu__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
            </div>
            <div class="side-menu__title">Reports</div>
        </a>
        </li>
    </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "home-header",
  data() {
    return {
      currentRoute: this.$router.currentRoute.name,
      isEmail: false,
    };
  },
  mounted() {
    if (`${this.$router.currentRoute.name}`.includes('email')) {
      this.isEmail = true;
    }
  },
  computed: {},
  methods: {
      clickEmailMenu() {
        this.isEmail = !this.isEmail;
      }
  }
};
</script>

<style>
</style>