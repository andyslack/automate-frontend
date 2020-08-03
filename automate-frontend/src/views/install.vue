<template>
<div class="app body">
  <div class="content">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
        <div class="col-span-12 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Install Dev Instance</h2>
          </div>

          <div class="col-span-12 mt-6">
            <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
              <div class="intro-y box col-span-12 lg:col-span-6">
                <div class="p-5">
                  This will setup a local admin user and insert some demo data into the application.
                  <strong>Please note</strong>, you need to authenticate with Google to access, please use a google email address.
                </div>

                <div class="p-5">
                  <pre></pre>
                </div>

                <div class="p-5">
                  <form action method="post">
                    <div class="mt-2 mb-4">
                      <input
                        class="input border mt-2 ml-2 border-primary"
                        style="width: 250px;"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Google Email Address"
                        required
                      />
                      <input
                        class="input border mt-2 ml-2 border-primary"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="First Name"
                        required
                      />
                      <input
                        class="input border mt-2 ml-2 border-primary"
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Last Name"
                        required
                      />
                    </div>

                    <div class="mt-2 ml-4 mb-4">
                      <span class="pr-3 color-primary">Demo data</span>
                      <input
                        type="checkbox"
                        id="demodata"
                        name="demodata"
                        class="input input--switch border"
                        checked
                      />
                    </div>

                    <button
                      type="submit"
                      class="button background-primary w-100 text-white ml-2 mt-4"
                    >Install</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>