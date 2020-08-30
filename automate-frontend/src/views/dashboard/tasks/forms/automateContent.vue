<template>
<div class="col-span-12">
    <div class="intro-y overflow-auto lg:overflow-visible">

        <div class="rounded-md px-5 py-4 mb-2 background-primary text-white">
            <div class="flex items-center">
                <div class="font-medium text-lg">Post the content live!</div>
            </div>
            <div class="mt-3">The task is now ready to be posted to the website:</div>
            <div class="mt-3"><strong>Website URL: </strong> <a href="<%=task.website.website_url%><%if(task.website.website_type === 'wordpress'){%>/wp-admin<%}%>" target="_blank"></a></div>
            <div class=" mt-3"><strong>Website Username: </strong></div>
            <div class="mt-3"><strong>Website Password: </strong></div>
            <div class="mt-3"><strong>Website Posting Instructions:</strong></div>
            <div class="mt-3">
                <pre></pre>
            </div>

            <div class="mt-3"><strong>Live URL (Once Posted)</strong></div>

            <input type="text" class="input w-full border mt-3 <%if(!task.task_live_url){%>border-danger<%}%> task_live_url" style="color: black;" placeholder="URL of live post (Required)" id="task_live_url" name="task_live_url" value="<%if(task.task_live_url){%><%=task.task_live_url%><%}%>" onchange="check_blank_input('task_live_url')">
            <div class="task_live_url-error color-danger mt-2"></div>

            <button type="button" class="button background-secondary w-100 text-black mt-4" onclick="url_live_submit_onclick('task_live_url', document.getElementById('task_live_url').value)">Content Is Live</button>

            <div class="url_live-error mt-2"></div>

        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
