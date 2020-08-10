<template>
  <div>
    <div v-if="user.user_type == 1 || user.user_type == 4">
      <img
        v-if="task.task_assignee"
        v-bind:alt="task.task_assignee.displayName"
        class="tooltip rounded-full"
        v-bind:src="task.task_assignee.avatarUrls['48x48']"
      />
      <img
        v-if="!task.task_assignee && task.sku.sku_category == 'Content'"
        alt="Content"
        class="tooltip rounded-full"
        src="https://cdn.automate.mn/wp-content/uploads/content.png"
      />

      <img
        v-if="!task.task_assignee && task.sku.sku_category == 'Link'"
        alt="Link"
        class="tooltip rounded-full"
        src="https://cdn.automate.mn/wp-content/uploads/link.png"
      />

      <img
        v-if="!task.task_assignee && task.sku.sku_category == 'Translation'"
        alt="Translation"
        class="tooltip rounded-full"
        src="https://cdn.automate.mn/wp-content/uploads/translation.png"
      />

      <img
        v-if="!task.task_assignee && (task.sku.sku_category != 'Translation' || task.sku.sku_category != 'Link' || task.sku.sku_category != 'Content')"
        alt="Unknown Category"
        class="tooltip rounded-full"
        src="https://cdn.automate.mn/wp-content/uploads/default.png"
      />
    </div>
    <div v-if="user.user_type == 9 || user.user_type == 99">
      <a href="#">
        <img v-if="task.user.user_photo && task.user.user_fname" v-bind:alt="task.user.user_fname +' '+task.user.user_lname" class="rounded-full inline" v-bind:src="task.user.user_photo"/>
        <img v-else-if="task.user.user_fname" v-bind:alt="task.user.user_fname +' '+task.user.user_lname" class="rounded-full inline" v-bind:src="task.user.user_photo"/>
        <img v-else alt="Account" class="rounded-full inline" v-bind:src="apiUrl + '/avatars/blank.png'"/>
      </a>
      <img v-if="task.task_assignee"
        v-bind:alt="task.task_assignee.displayName"
        class="tooltip rounded-full inline"
        style="margin-left: -15px;"
        v-bind:src="task.task_assignee.avatarUrls['48x48']"
      />
    </div>
  </div>
</template>
<script>
import { API_URL } from '@/services/config';
export default {
  name: "task-image",
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      apiUrl: API_URL,
    };
  },
};
</script>

<style>
</style>