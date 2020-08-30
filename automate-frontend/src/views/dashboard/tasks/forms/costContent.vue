<template>
<div class="col-span-12">
    <div class="intro-y overflow-auto lg:overflow-visible">
        <div class="rounded-md px-5 py-4 mb-2 background-primary text-white">
            <div class="flex items-center">
                <div class="font-medium text-lg">Cost Analysis</div>
            </div>
            <div class="mt-3">Please complete the total cost to deliver the work:</div>

            <input type="text" class="input w-full border mt-3 <%if(!task.cost){%>border-danger<%}%> cost"
          style="color: black;"
          placeholder="Cost to complete the task (Required)"
          id="cost"
          name="cost"
          value="<%if(task.cost){%><%=task.cost%><%}%>"
          onchange="check_blank_input('task_live_url')"
        />

        <button
          type="button"
          class="button background-secondary w-100 text-black mt-4"
          onclick="url_cost_submit_onclick('cost', document.getElementById('cost').value)"
        >Submit Cost</button>

        <div class="cost-error mt-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
