<template>
<div>
    <div class="mt-2 mb-4">
        <span class="pr-3 color-primary">Copyscape Passed?</span><input type="checkbox" id="copyscape_checkbox" class="input input--switch border" onchange="checkbox_onchange('copyscape_checkbox')">
    </div>

    <div class="mt-2 mb-4 files-copyscape_checkbox" style="display: none;">

        <!-- BEGIN: FILES UPLOAD TO S3 -->
        <input type="file" id="copyscape_input" onchange="file_upload_onchange('copyscape_input', 'copyscape_proof', 'copyscape_file_result', 'single')" class="mt-2" />
        <input type="hidden" id="copyscape_proof" name="copyscape_proof" value="">
        <div id="copyscape_file_result" name="copyscape_file_result" class="copyscape_file_result"></div>
        <!-- END: FILES UPLOAD TO S3 -->

    </div>

    <div class="mt-2 mb-4">
        <span class="pr-3 color-primary">Grammarly Passed?</span><input type="checkbox" id="grammarly_checkbox" class="input input--switch border" onchange="checkbox_onchange('grammarly_checkbox')">
    </div>

    <div class="mt-2 mb-4 files-grammarly_checkbox" style="display: none;">
        <!-- BEGIN: FILES UPLOAD TO S3 -->
        <input type="file" id="grammarly_input" onchange="file_upload_onchange('grammarly_input', 'grammarly_proof', 'grammarly_file_result', 'single')" class="mt-2" />
        <input type="hidden" id="grammarly_proof" name="grammarly_proof" value="">
        <div id="grammarly_file_result" name="grammarly_file_result" class="grammarly_file_result"></div>
        <!-- END: FILES UPLOAD TO S3 -->
    </div>

    <div class="mt-2 mb-4">
        <span class="pr-3 color-primary">SurferSEO Passed?</span><input type="checkbox" id="surferseo_checkbox" class="input input--switch border" onchange="checkbox_onchange('surferseo_checkbox')">
    </div>

    <div class="mt-2 mb-4 files-surferseo_checkbox" style="display: none;">
        <!-- BEGIN: FILES UPLOAD TO S3 -->
        <input type="file" id="surferseo_input" onchange="file_upload_onchange('surferseo_input', 'surferseo_proof', 'surferseo_file_result', 'single')" class="mt-2" />
        <input type="hidden" id="surferseo_proof" name="surferseo_proof" value="">
        <div id="surferseo_file_result" name="surferseo_file_result" class="surferseo_file_result"></div>
        <!-- END: FILES UPLOAD TO S3 -->
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
