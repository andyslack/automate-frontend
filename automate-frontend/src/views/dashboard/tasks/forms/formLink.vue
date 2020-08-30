<template>
<div>
    <div class="mt-2 mb-4 automate_switcher">
        <span class="pr-3 color-primary">Fully Automate</span>
        <input type="checkbox" id="automate_checkbox" class="input input--switch border" onchange="automate_onchange()" />
    </div>

    <div class="automated" style="display:none;">
        <div class="rounded-md px-5 py-4 mb-2 background-primary text-white">
            <div class="flex items-center">
                <div class="font-medium text-lg">Put your task on autopilot!</div>
                <div class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto">Fully Automate</div>
            </div>
            <div class="mt-3">Our team will do the hard work for you, we will review your website, perform the backlink research and submit links to complement your existing strategy.</div>
            <div class="mt-3">Leave the heavy lifting to us and we will fully automate your backlink acquisition.</div>

            <div class="mt-3 mb-3">Choose Website:</div>
            <select class="select2 w-full border" id="website" name="website">
                <option value="<%=website._id%>"></option>
            </select>
        </div>
    </div>

    <div class="non_automated">
        <input type="text" class="input w-full border mt-2 border-danger" placeholder="URL to build link to" id="url" value onchange="check_blank_input('url')" />
        <div class="url-error color-danger mt-2"></div>

        <input type="text" class="input w-full border mt-2 mb-2 border-info" placeholder="Anchor text we should use (Recommended, but we can decide this if you prefer)" id="anchor_text" value />

        <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Blacklist of websites we should not link back from (Optional)" id="blacklist"></textarea>

        <div class="mt-2 mb-2">
            <label for="dripfeed" class="mr-2">Drip Feed?</label>
            <input type="checkbox" class="input input--switch border" id="dripfeed" />
        </div>

        <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Anything else you would like the team to know (Optional)" id="notes"></textarea>
    </div>

    <button type="button" class="button button-primary w-100 text-white mt-4" onclick="return link_submit_onclick({
                                                    automate: window.automate,
                                                    website: document.getElementById('website').value,
                                                    url: document.getElementById('url').value,
                                                    anchor_text: document.getElementById('anchor_text').value,
                                                    blacklist: document.getElementById('blacklist').value,
                                                    dripfeed: document.getElementById('dripfeed').checked,
                                                    notes: document.getElementById('notes').value
                                                })">Submit Link Details</button>

    <div class="basic-error mt-2"></div>
</div>
</template>

<script>
export default {
    name: "form-link"
};
</script>

<style>
</style>
