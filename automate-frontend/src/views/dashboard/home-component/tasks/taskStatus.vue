<template>
    <div>
        <alert-circle-icon v-if="icon_color" class="w-5 h-5 mr-2 inline" :class="icon_color"></alert-circle-icon>
        <span :style="{color: status_color}">
            {{status_label ? status_label : task.task_status}}
        </span>
    </div>
</template>

<script>
import { AlertCircleIcon } from 'vue-feather-icons'
export default {
  name: "task-status",
  components: {
      AlertCircleIcon
  },
  props: {
    task: {
      type: Object,
    },
  },
  data() {
      return {
          user: JSON.parse(localStorage.getItem("user")),
          status_color: "",
          status_label: "",
          icon_color: "",
      };
  },
  mounted() {
    switch (this.task.task_status) {
      case "New":
        this.status_color = 'var(--color-info)';
        break;
      case "Pending":
        switch (this.user.user_type) {
          case 1:
          case 4:
            this.icon_color = 'color-danger';
            this.status_color = 'var(--color-danger)';
            break;
          default:
            this.status_color = 'var(--color-info)';
            break;
        }
        break;
      case "Awaiting Assignment":
        this.status_color = "orange";
        break;
      case "To Do":
        this.status_label = 'Queued'
        this.status_color = 'darkorange';
        break;
      case "In Progress":
        this.status_color = 'green';
        break;
      case "QA":
        this.status_label = 'Quality Control';
        switch (this.user.user_type) {
          case 9:
          case 99:
            this.icon_color = 'color-danger';
            this.status_color = 'var(--color-danger)';
            break;
          default:
            this.status_color = 'var(--color-primary)';
            break;
        }
        break;
      case "Awaiting":
        this.status_label = "Awaiting";
        switch(this.user.user_type){
            case 9:
            case 99:
                this.icon_color = 'color-danger';
                this.status_color = 'var(--color-danger)';
                this.status_label = 'Post-Automation'
                break;

            default:
                this.status_color = 'var(--color-primary)';
                break;
        }
        break;
      case "Complete":
        this.status_color = 'darkgreen';
        break;
      default:
        this.status_color = "black";
    }
  },

}
</script>

<style>

</style>