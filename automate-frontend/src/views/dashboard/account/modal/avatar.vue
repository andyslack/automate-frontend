<template>
  <div>
    <b-modal v-model="isAvatar">Hello From Modal!</b-modal>
  </div>
</template>

<script>
import { BModal, VBModal } from 'bootstrap-vue'
export default {
  name: "avatar",
  props: {
    isAvatar: Boolean
  },
  components: {
    'b-modal': BModal
  },
  directives: {
    'b-modal': VBModal
  }
};
</script>

<style lang="scss">
  // @import 'node_modules/bootstrap/scss/bootstrap';
  // @import 'node_modules/bootstrap-vue/src/index.scss';
</style>