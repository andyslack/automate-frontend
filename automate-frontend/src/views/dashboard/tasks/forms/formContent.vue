<template>
<div>
    <!-- BEGIN: Submit Content Details Form -->

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
            <div class="mt-3">Our team will do the hard work for you, we will review your website, perform the keyword research and choose content to complement your existing strategy.</div>
            <div class="mt-3">Leave the heavy lifting to us and we will fully automate your content marketing. Once done, we will post the content live to your website.</div>

            <div class="mt-3 mb-3">Choose Website:</div>
            <select class="select2 w-full border" id="website" name="website">
                <option value="<%=website._id%>"></option>
            </select>
        </div>
    </div>

    <div class="non_automated">
        <div class="mt-2 mb-2">
            <select class="select2 w-full border" id="content_type" name="content_type" onchange="content_type_onchange(this.options[this.selectedIndex].value)">
                <option value="CONTENT">Content</option>
                <option value="SEO_CONTENT">SEO Content</option>
                <option value="REVIEW">Review</option>
                <option value="BESTOF">Best Of</option>
                <option value="OTHER">Other</option>
            </select>
        </div>

        <input type="text" class="input w-full border mt-2 border-danger" placeholder="Main topic idea/keyword(s) to target (Required)" id="main_topic" value onchange="check_blank_input('main_topic')" />
        <div class="main_topic-error color-danger mt-2"></div>

        <div class="content_required_fields">
            <input type="text" class="input w-full border mt-2 border-danger" placeholder="Channel(s) of distribution; e.g. Blog, Email, Community, etc (Required) " id="distribution" value onchange="check_blank_input('distribution')" />
            <div class="distribution-error color-danger mt-2"></div>
        </div>

        <div class="seo_content_required_fields" style="display: none;"></div>

        <div class="review_required_fields" style="display: none;">
            <input type="text" class="input w-full border mt-2 border-danger" placeholder="Product (e.g. TestoGen)" id="product" value onchange="check_blank_input('product')" />
            <div class="product-error color-danger mt-2"></div>
        </div>

        <div class="bestof_required_fields" style="display: none;">
            <input type="text" class="input w-full border mt-2 border-danger" placeholder="Type of products (e.g. “testosterone boosters”) (Required)" id="product_category" value onchange="check_blank_input('product_category')" />
            <div class="product_category-error color-danger mt-2"></div>
        </div>

        <div class="bestof_required_fields" style="display: none;">
            <input type="text" class="input w-full border mt-2 border-danger" placeholder="Specific products to include and their order (e.g. #1 TestoGen, # 2TestoMax) (Required)" id="product_ranks" value onchange="check_blank_input('product_ranks')" />
            <div class="product_ranks-error color-danger mt-2"></div>
        </div>

        <div class="other_required_fields" style="display: none;">
            <textarea data-feature="basic" class="input w-full border mt-2 border-danger" rows="5" placeholder="Full details of your requirements. Please be as specific as possible. The more information the better (Required)" id="other_extra_details" onchange="check_blank_input('other_extra_details')"></textarea>
            <div class="other_extra_details-error color-danger mt-2"></div>
        </div>

        <input type="text" class="input w-full border mt-2 mb-2 border-info" placeholder="Title (Recommended, but we can create this if you prefer)" id="title" value />

        <input type="text" class="input w-full border mt-2 mb-2" placeholder="Brand/site guidelines (Optional)" id="brand_guidelines" value />

        <input type="text" class="input w-full border mt-2 mb-2" placeholder="Preferred post date (Optional and depending on availability)" id="deadline" value />

        <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Example of a similar pieces of content (Optional)" id="examples"></textarea>

        <div class="content_fields">
            <input type="text" class="input w-full border mt-2 mb-2" placeholder="Objective of your post (entertainment, news, product promotion, etc.) (Optional)" id="objective" value />
            <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Any additional details of your requirements. Please be as specific as possible. The more information the better (Optional)" id="content_extra_details"></textarea>
        </div>

        <div class="seo_content_fields" style="display: none;">
            <textarea data-feature="basic" class="input w-full border mt-2" rows="5" placeholder="Structure/table of contents (specify headings/sections you would like to see in the content) (Optional)" id="seo_content_structure"></textarea>
            <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Any additional details of your requirements. Please be as specific as possible. The more information the better (Optional)" id="seo_content_extra_details"></textarea>
        </div>

        <div class="review_fields" style="display: none;">
            <textarea data-feature="basic" class="input w-full border mt-2" rows="5" placeholder="Structure/table of contents (specify headings/sections you would like to see in the content) (Optional)" id="review_structure"></textarea>
            <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Any additional details of your requirements. Please be as specific as possible. The more information the better (Optional)" id="review_extra_details"></textarea>
        </div>

        <div class="bestof_fields" style="display: none;">
            <textarea data-feature="basic" class="input w-full border mt-2" rows="5" placeholder="Structure/table of contents (specify headings/sections you would like to see in the content) (Optional)" id="bestof_structure"></textarea>
            <textarea data-feature="basic" class="input w-full border mt-2 mb-2" rows="5" placeholder="Any additional details of your requirements. Please be as specific as possible. The more information the better (Optional)" id="bestof_extra_details"></textarea>
        </div>
    </div>

    <div class="other_fields" style="display: none;"></div>

    <button type="button" class="button button-primary w-100 text-white mt-4" onclick="return content_submit_onclick({
                                                    automate: window.automate,
                                                    website: document.getElementById('website').value,
                                                    content_type: document.getElementById('content_type').value,
                                                    main_topic: document.getElementById('main_topic').value,
                                                    distribution: document.getElementById('distribution').value,
                                                    product: document.getElementById('product').value,
                                                    product_category: document.getElementById('product_category').value,
                                                    product_ranks: document.getElementById('product_ranks').value,
                                                    other_extra_details: document.getElementById('other_extra_details').value,
                                                    title: document.getElementById('title').value,
                                                    brand_guidelines: document.getElementById('brand_guidelines').value,
                                                    deadline: document.getElementById('deadline').value,
                                                    examples: document.getElementById('examples').value,
                                                    objective: document.getElementById('objective').value,
                                                    content_extra_details: document.getElementById('content_extra_details').value,
                                                    seo_content_structure: document.getElementById('seo_content_structure').value,
                                                    seo_content_extra_details: document.getElementById('seo_content_extra_details').value,
                                                    review_structure: document.getElementById('review_structure').value,
                                                    review_extra_details: document.getElementById('review_extra_details').value,
                                                    bestof_structure: document.getElementById('bestof_structure').value,
                                                    bestof_extra_details: document.getElementById('bestof_extra_details').value
                                                })">Submit Content Details</button>

    <div class="basic-error mt-2"></div>
</div>
</template>

<script>
export default {
    name: "form-content"
};
</script>

<style>
</style>
