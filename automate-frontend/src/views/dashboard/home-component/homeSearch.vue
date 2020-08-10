<template>
  <!-- BEGIN: Search -->
<div class="intro-x relative mr-3 sm:mr-6">
    <div class="search hidden sm:block">
        <input v-model="searchString" v-on:keyup.enter="search()" type="text" name="s" id="s" class="search__input input placeholder-theme-13" placeholder="Search...">
        <search-icon class="search__icon"></search-icon>
    </div>
    <a class="notification sm:hidden" href="">
    <search-icon class="notification__icon"></search-icon>
    </a>
</div>
<!-- END: Search -->
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'
import { GETSEARCH } from '@/store/actionType'
export default {
  name: "home-search",
  components: {
    SearchIcon
  },
  data() {
    return {
      searchString: "",
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  methods: {
    search() {
      console.log(this.searchString)
      const sendingData = {
          user: this.user,
          search: this.searchString
      }
      this.$store.dispatch(GETSEARCH, sendingData)
        .then(res => {
            console.log("search result", res);
            if (res.status === 200) {
                if (res.data.redirectUrl) {
                    this.$router.push(res.data.redirectUrl);
                } else {
                    this.$router.push({ path: '/search', query: { s: res.data.term } })
                }
            }
        })    
    }
  }
}
</script>

<style>

</style>