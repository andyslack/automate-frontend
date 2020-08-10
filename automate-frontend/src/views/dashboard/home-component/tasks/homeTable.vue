<template>
  <div class="col-span-12">
    <div class="intro-y overflow-auto lg:overflow-visible mt-2">
      <!--Begin: Admin Filters-->
      <div v-if="user.user_type >= 9">
        <div style="float:right;" v-if="typeof status_options != undefined && typeof type_options != undefined && typeof assignee_options != undefined">
          <form name="selectform">
            <select
              name="status"
              id="status"
              class="input input--lg box w-full lg:w-auto mt-3 mr-3 lg:mt-0 ml-auto"
              v-model="filterStatus"
              @change="submitfilter()"
            >
              <option hidden>Status</option>
              <option>All</option>
              <option v-for="option in status_options" :key="option">{{option}}</option>
            </select>

            <select
              name="sku_category"
              id="sku_category"
              class="input input--lg box w-full lg:w-auto mt-3 mr-3 lg:mt-0 ml-auto"
              v-model="filterSku"
              @change="submitfilter()"
            >
              <option hidden>Type</option>
              <option>All</option>
              <option v-for="option in type_options" :key="option">{{option}}</option>
            </select>

            <select
              name="assignee"
              id="assignee"
              class="input input--lg box w-full lg:w-auto mt-3 mr-3 lg:mt-0 ml-auto"
              v-model="filterAssignee"
              @change="submitfilter()"
            >
              <option hidden>Assignee</option>
              <option>All</option>
              <option v-for="option in assignee_options" :key="option">{{option}}</option>
            </select>
          </form>
        </div>
      </div>
      <!--End: Admin Filters-->
      <table v-if="tasks.length > 0" class="table table-report sm:mt-2">
        <thead>
          <tr>
            <th class="whitespace-no-wrap">Task</th>
            <th class="whitespace-no-wrap">Name</th>
            <th class="text-center whitespace-no-wrap">Status</th>
            <th v-if="user.user_type >= 9" class="text-center whitespace-no-wrap">Updated</th>
            <th class="text-center whitespace-no-wrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="intro-x" v-for="task in tasks" :key="task._id">
            <td class="w-20">
              <div class="flex">
                <div class="w-10 h-10 image-fit zoom-in">
                  <task-image :task="task"></task-image>
                </div>
              </div>
            </td>
            <td class="w-30">
              <a v-if="task" v-bind:href="'/task/' + task._id">
                {{getTitle(task)}}
              </a>
              <div class="text-gray-600 text-xs whitespace-no-wrap">{{task.task_category}}</div>
            </td>
            <td class="w-30">
              <div class="flex items-center justify-center">
                <task-status :task="task"></task-status>
              </div>
            </td>

            <td v-if="user.user_type >= 9" class="w-30">
              <div class="flex items-center justify-center">{{task.task_ago_updated}}</div>
            </td>

            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">
                <a class="flex items-center mr-3" v-bind:href="'/task/' + task._id">
                  <search-icon class="w-4 h-4 mr-1"></search-icon>
                  View
                </a>
                <a v-if="task.task_status === 'Pending' && task.sku.sku_bill_per_word"
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#split-task-<%=task._id%>"
                  class="flex items-center mr-3 color-info"
                >
                <share-2-icon class="w-4 h-4 mr-1"></share-2-icon>
                 Split
                </a>
                <a v-if="task.task_status === 'Complete' || task.task_status === 'Archived'"
                  href="#"
                  class="flex items-center mr-3 color-danger"
                  onclick="removeTask('<%=task._id%>');return false;"
                >
                <trash-2-icon class="w-4 h-4 mr-1"></trash-2-icon>
                 Remove
                </a>
              </div>
              <div :class="`basic-error-${task._id} flex justify-center items-center`"></div>
            </td>
            <div class="modal" :id="`split-task-${task._id}`">
            <div class="modal__content">
              <div class="p-5">
                <share-2-icon class="w-16 h-16 mx-auto mt-3 color-info"></share-2-icon>
                <div class="text-3xl mt-5 mb-5 text-center">Split Task</div>
                <div class="p-5 text-center">
                  You are splitting this word task, into:
                  <div class="wordSplitCount-<%=task._id%>"></div>
                </div>
                <input
                  type="text"
                  class="input w-full border mt-2 border-danger"
                  placeholder="Qty"
                  :id="`qty-${task._id}`"
                  value
                  onchange="splitQtyChecks('qty-<%=task._id%>', '<%=task._id%>', <%=task.task_word_count%>)"
                  required
                />
                <div class="qty-error-<%=task._id%> color-danger mt-2"></div>
              </div>
              <div class="px-5 pb-8 text-center">
                <button
                  type="button"
                  data-dismiss="modal"
                  class="button w-24 border text-gray-700 mr-1"
                >Back</button>
                <button
                  type="button"
                  class="button button-info w-24 text-white"
                  onclick="return split_onclick('qty-<%=task._id%>', document.getElementById('qty-<%=task._id%>').value, '<%=task._id%>')"
                >Split Task</button>
              </div>
              <div class="split-error-<%=task._id%> p-5 text-center"></div>
            </div>
          </div>
          </tr>
        </tbody>
      </table>
      <!-- BEGIN: Important Notes -->
      <div v-if="tasks.length == 0 && user.user_type < 9"
        class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3"
      >
        <div class="intro-x">
          <div class="box">
            <div class="p-5">
              <!--<div class="text-gray-500 mt-1">20 Hours ago</div>-->
              <div class="text-gray-600 text-justify mt-1">
                <p>
                  We could not find any tasks in your account. You can purchase
                  <a
                    href="https://automate.mn/link-building/#pricing"
                    target="_blank"
                  >links</a>,
                  <a href="https://automate.mn/content/#pricing" target="_blank">content</a> or
                  <a
                    href="https://automate.mn/translations/#pricing"
                    target="_blank"
                  >translations</a> and we will automatically link them to your account.
                  <br />
                  <br />If you have made a purchase and it is not showing
                  <a
                    href="mailto:support@automate.mn"
                    target="_blank"
                  >contact us</a> and we will investigate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GETTASKBYFILTER } from "@/store/actionType"
import taskImage from "./taskImage"
import taskStatus from "./taskStatus"
import {
  SearchIcon,
  Share2Icon,
  Trash2Icon 
} from 'vue-feather-icons'
export default {
  name: "home-table",
  components: {
    taskImage,
    taskStatus,
    SearchIcon,
    Share2Icon,
    Trash2Icon 
  },
  props: {
    dashboardData: {
      type: Object,
    },
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      filterStatus: "Status",
      filterSku: "Type",
      filterAssignee: "Assignee",
      status_options: this.dashboardData.status_options,
      type_options: this.dashboardData.type_options,
      assignee_options: this.dashboardData.assignee_options,
      tasks: this.dashboardData.tasks,
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    submitfilter() {
      console.log("here selected value", this.filterStatus, this.filterSku, this.filterAssignee,)
      const sendingData = {
        user: this.user,
        status: this.filterStatus,
        sku_category: this.filterSku,
        assignee: this.filterAssignee,
      }
      this.$store.dispatch(GETTASKBYFILTER, sendingData).then((res) => {
        if (res.status === 200) {
          console.log("update filter response", res);
          this.tasks = res.data.tasks;
          if (res.data.assignee) {
            this.assignee = res.data.assignee;
          }
          if (res.data.status) {
            this.status = res.data.status;
          }
          if (res.data.type) {
            this.type = res.data.type; 
          }
        }
      })
    },
    getTitle(task) {
      switch (task.sku.sku_category) {
        case "Content":
          if (task.project_details && typeof task.project_details !== undefined) {
            if(typeof task.project_details !== undefined && task.project_details.title) {
              return task.project_details.title;
            } else {
              return task.task_name;
            }
          } else {
            return task.task_name;
          }
        case "Link":
          return task.task_name;
        case "Translation":
          if (task.project_details && typeof task.project_details !== undefined) {
            if (typeof task.project_details !== undefined && task.project_details.to) {
              return `${task.task_name} (${task.project_details.to})`
            } else {
              return task.task_name;
            }
          } else {
            return task.task_name;
          }
        default:
          return task.task_name;
      }
    }
  },
  getStatus(task){
    console.log("here get status", task);
  }
};
</script>

<style>
</style>

