<template>
  <div class="p-5" id="delete-modal">
    <div class="flex mt-4 mb-4">
      <div class="preview">
        <div class="text-center">
          <a
            href="javascript:;"
            data-toggle="modal"
            data-target="#close_account"
            class="button button-danger inline-block text-white"
          >Close Account</a>
        </div>
        <div class="modal" id="close_account">
          <div class="modal__content">
            <div class="p-5 text-center">
              <i data-feather="x-circle" class="w-16 h-16 mx-auto mt-3 color-danger"></i>
              <div class="text-3xl mt-5">Are you sure?</div>
              <div class="text-gray-600 mt-2">
                Do you really want to close your account?
                <br />This process cannot be undone.
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-dismiss="modal"
                class="button w-24 border text-gray-700 mr-1"
              >Back</button>
              <button
                type="button"
                class="button button-danger w-24 text-white"
                onclick="return close_onclick(<%=user._id%>)"
              >Close</button>
            </div>
            <div class="close-error"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account-option"
};
</script>

<style>
</style>