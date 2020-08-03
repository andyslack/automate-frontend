<template>
  <!-- BEGIN: Search -->
<div class="intro-x relative mr-3 sm:mr-6">
    <div class="search hidden sm:block">
        <form action="/search" method="get">
            <input type="text" name="s" id="s" class="search__input input placeholder-theme-13" placeholder="Search...">
        </form>
        <i data-feather="search" class="search__icon"></i>
    </div>
    <a class="notification sm:hidden" href=""> <i data-feather="search" class="notification__icon"></i> </a>
</div>
<!-- END: Search -->
</template>

<script>
export default {

}
</script>

<style>

</style>