<template>
<div>
    <div class="mt-2 mb-4">
        <select class="select2 w-full border" id="from" name="from" disabled>
            <option value="ENGLISH" selected>English</option>
        </select>
    </div>

    <div class="mt-2 mb-2">
        <select data-placeholder="Select Languages" class="select2 w-full border" id="to" name="to" multiple onchange="multiple_language_onchange(this, <%=task.task_word_count%>);">
            <option value="FRENCH">Français</option>
            <option value="GERMAN">Deutsch</option>
            <option value="SPANISH">Español</option>
            <option value="ITALIAN">Italiano</option>
            <option value="DUTCH">Nederlands</option>
            <option value="PORTUGUESE">Português</option>
            <option value="GREEK">Ελληνικα</option>
            <option value="POLISH">Polskie</option>
            <option value="SWEDISH">Svenska</option>
        </select>
    </div>

    <div class="multiple-tasks mt-2 mb-2"></div>
    <input type="file" id="file-input" multiple onchange="file_upload_onchange()" class="mt-2" />

    <input type="hidden" id="file-urls" name="file-urls" value />

    <div class="upload-file-message mt-2">
        <span class="color-danger" style="display: inline;">Upload at least 1 file.</span>
    </div>

    <div id="files-result" name="files-result" class="files-result"></div>
    <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Anything else you would like the team to know (Optional)" id="notes"></textarea>

    <button type="button" class="button button-primary w-100 text-white mt-4" onclick="return translation_submit_onclick({
                                                    from: document.getElementById('from').value,
                                                    to: document.getElementById('to'),
                                                    file_urls: document.getElementById('file-urls').value,
                                                    notes: document.getElementById('notes').value
                                                })">Submit Translation Details</button>

    <div class="basic-error mt-2"></div>
</div>
</template>

<script>
export default {
    name: "form-translation"
};
</script>

<style>
</style>
