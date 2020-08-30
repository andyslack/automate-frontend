<template>
<div class="app dashboard-home">
    <div class="flex">
        <home-header></home-header>
        <div class="content">
            <div class="top-bar">
                <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
                    <a href="/home" class>Dashboard</a>
                    <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
                    <a href class="breadcrumb--active">Tasks</a>
                    <chevron-right-icon class="breadcrumb__icon"></chevron-right-icon>
                    <a href class="breadcrumb--active">{{task.task_name}}</a>
                </div>
                <home-search></home-search>
                <home-account></home-account>
            </div>
            <div class="grid grid-cols-12 gap-6">
                <!-- BEGIN: Left Panel -->
                <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
                    <!-- BEGIN: Task Header -->
                    <div class="col-span-12 mt-3">
                        <div class="intro-y flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5" v-if="task.task_status === 'Pending'">
                                <alert-triangle-icon class="w-8 h-8 mr-2 color-danger inline"></alert-triangle-icon>
                                Details Required
                                - {{task.task_name}}
                            </h2>

                            <h2 class="text-lg font-medium truncate mr-5" v-else>
                                Task Log:
                                - {{task.task_name}}
                            </h2>
                            <a v-if="task.sku.sku_bill_per_word && task.task_status === 'Pending'" href="javascript:;" data-toggle="modal" :data-target="'#split-task-' + task._id" class="ml-auto flex color-info">
                                <share-2-icon class="w-4 h-4 mr-1"></share-2-icon>Split
                            </a>
                            <a v-else href class="ml-auto flex text-theme-1">
                                <refresh-ccw-icon class="w-4 h-4 mr-3"></refresh-ccw-icon>Reload Data
                            </a>
                        </div>
                    </div>
                    <!-- END: Task Header -->

                    <div class="col-span-12" v-if="(user.user_type === 1 || user.user_type === 4 || user.user_type === 9 || user.user_type === 99) && task.task_status === 'Pending'">
                        <div class="intro-y overflow-auto lg:overflow-visible sm:mt-0">
                            <div class="intro-y box col-span-12 lg:col-span-6">
                                <div class="p-5" v-if="task.sku.sku_category === 'Content'">
                                    <form-content></form-content>
                                </div>
                                <div class="p-5" v-if="task.sku.sku_category === 'Link'">
                                    <form-link></form-link>
                                </div>
                                <div class="p-5" v-if="task.sku.sku_category === 'Translation'">
                                    <form-translation></form-translation>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BEGIN: Split Modal -->
                    <div class="modal" :id="'split-task-' + task._id" v-if="(user.user_type === 1 || user.user_type === 4 || user.user_type === 9 || user.user_type === 99) && task.sku.sku_bill_per_word">
                        <div class="modal__content">
                            <div class="p-5">
                                <share-2-icon class="w-16 h-16 mx-auto mt-3 color-info"></share-2-icon>
                                <div class="text-3xl mt-5 mb-5 text-center">Split Task</div>
                                <div class="p-5 text-center">
                                    You are splitting this word
                                    task, into:
                                    <div class="wordSplitCount-<%=task._id%>"></div>
                                </div>
                                <input type="text" class="input w-full border mt-2 border-danger" placeholder="Qty" id="qty-<%=task._id%>" value onchange="splitQtyChecks('qty-<%=task._id%>', '<%=task._id%>', <%=task.task_word_count%>)" required />
                                <div class="qty-error-<%=task._id%> color-danger mt-2"></div>
                            </div>
                            <div class="px-5 pb-8 text-center">
                                <button type="button" data-dismiss="modal" class="button w-24 border text-gray-700 mr-1">Back</button>
                                <button type="button" class="button button-info w-24 text-white" onclick="return split_onclick('qty-<%=task._id%>', document.getElementById('qty-<%=task._id%>').value, '<%=task._id%>')">
                                    Split
                                    Task
                                </button>
                            </div>
                            <div class="split-error-<%=task._id%> p-5 text-center"></div>
                        </div>
                    </div>

                    <!-- BEGIN: Live URL -->
                    <div class="col-span-12" v-if="(user.user_type === 1 || user.user_type === 4 || user.user_type === 9 || user.user_type === 99) && task.task_status === 'Complete' && task.automate && task.task_live_url">
                        <div class="intro-y overflow-auto lg:overflow-visible">
                            <div class="rounded-md px-5 py-4 mb-2 background-primary text-white">
                                <div class="flex items-center">
                                    <div class="font-medium text-lg">Your content is live!</div>
                                </div>
                                <div class="mt-3">
                                    Checkout your new content here:
                                    <strong>
                                        <a v-bind:href="task.task_live_url" target="_blank">{{task.task_live_url}}</a>
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- BEGIN: Task Feedback -->
                    <div class="col-span-12" v-if="(user.user_type === 1 || user.user_type === 4) && task.task_status === 'Complete' && !(taskFeedback.feedback_speed && taskFeedback.feedback_quality && taskFeedback.feedback_price && taskFeedback.feedback_comment)">
                        <div class="grid grid-cols-12 gap-6 mb-4">
                            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                <div class="box">
                                    <div class="box p-5">
                                        <div class="flex">
                                            <fast-forward-icon class="report-box__icon color-primary"></fast-forward-icon>
                                            <div class="text-base text-gray-600 pl-2">Speed</div>
                                        </div>
                                        <div class="text-3xl font-bold leading-8 mt-6">
                                            <div class="face-frown">
                                                <a href="#" onclick="return face_onclick('speed', 'frown')">
                                                    <frown-icon id="speed-face-frown" class="w-12 h-12 mr-2 inline"></frown-icon>
                                                    <i data-feather="frown" id="speed-face-frown" class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_speed === 1){%>color-danger<%}%>"
                            ></i>
                          </a>
                        </div>
                        <div class="face-meh">
                          <a href="#" onclick="return face_onclick('speed', 'meh')">
                            <i
                              data-feather="meh"
                              id="speed-face-meh"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_speed === 5){%>color-warning<%}%>"
                            ></i>
                            <meh-icon id="speed-face-meh" class="w-12 h-12 mr-2 inline"></meh-icon>
                          </a>
                        </div>
                        <div class="face-smile">
                          <a href="#" onclick="return face_onclick('speed', 'smile')">
                            <i
                              data-feather="smile"
                              id="speed-face-smile"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_speed === 10){%>color-success<%}%>"
                            ></i>
                            <smile-icon id="speed-face-smile" class="w-12 h-12 mr-2 inline"></smile-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <div class="box">
                    <div class="box p-5">
                      <div class="flex">
                        <award-icon class="report-box__icon color-primary"></award-icon>
                        <div class="text-base text-gray-600 pl-2">Quality</div>
                      </div>
                      <div class="text-3xl font-bold leading-8 mt-6">
                        <div class="face-frown">
                          <a href="#" onclick="return face_onclick('quality', 'frown')">
                            <i
                              data-feather="frown"
                              id="quality-face-frown"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_quality === 1){%>color-danger<%}%>"
                            ></i>
                            <frown-icon id="quality-face-frown" class="w-12 h-12 mr-2 inline"></frown-icon>
                          </a>
                        </div>
                        <div class="face-meh">
                          <a href="#" onclick="return face_onclick('quality', 'meh')">
                            <i
                              data-feather="meh"
                              id="quality-face-meh"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_quality === 5){%>color-warning<%}%>"
                            ></i>
                            <meh-icon id="speed-face-meh" class="w-12 h-12 mr-2 inline"></meh-icon>
                          </a>
                        </div>
                        <div class="face-smile">
                          <a href="#" onclick="return face_onclick('quality', 'smile')">
                            <i
                              data-feather="smile"
                              id="quality-face-smile"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_quality === 10){%>color-success<%}%>"
                            ></i>
                            <smile-icon id="speed-face-smile" class="w-12 h-12 mr-2 inline"></smile-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <div class="box">
                    <div class="box p-5">
                      <div class="flex">
                        <i data-feather="dollar-sign" class="report-box__icon color-primary"></i>
                        <div class="text-base text-gray-600 pl-2">Price</div>
                      </div>
                      <div class="text-3xl font-bold leading-8 mt-6">
                        <div class="face-frown">
                          <a href="#" onclick="return face_onclick('price', 'frown')">
                            <i
                              data-feather="frown"
                              id="price-face-frown"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_price === 1){%>color-danger<%}%>"
                            ></i>
                            <frown-icon id="quality-face-frown" class="w-12 h-12 mr-2 inline"></frown-icon>
                          </a>
                        </div>
                        <div class="face-meh">
                          <a href="#" onclick="return face_onclick('price', 'meh')">
                            <i
                              data-feather="meh"
                              id="price-face-meh"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_price === 5){%>color-warning<%}%>"
                            ></i>
                            <meh-icon id="speed-face-meh" class="w-12 h-12 mr-2 inline"></meh-icon>
                          </a>
                        </div>
                        <div class="face-smile">
                          <a href="#" onclick="return face_onclick('price', 'smile')">
                            <i
                              data-feather="smile"
                              id="price-face-smile"
                              class="w-12 h-12 mr-2 inline <%if(taskFeedback.feedback_price === 10){%>color-success<%}%>"
                            ></i>
                            <smile-icon id="speed-face-smile" class="w-12 h-12 mr-2 inline"></smile-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                  <div class="box">
                    <div class="box p-5">
                      <div class="flex">
                        <edit-3-icon class="report-box__icon color-primary"></edit-3-icon>
                        <div class="text-base text-gray-600 pl-2">Comments</div>
                      </div>
                      <div class="text-xs font leading-8 mt-1">
                        <input
                          type="text"
                          class="input w-full border bg-gray-100 mt-2"
                          placeholder="Comments"
                          id="feedback_comment"
                          value="<%=taskFeedback.feedback_comment%>" onchange="feedback_change(this.id, this.value)" />
                                                    <div class="feedback_comment mt-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12" v-if="(user.user_type === 9 || user.user_type === 99) && task.task_status === 'To Do'">
                            <div class="intro-y overflow-auto lg:overflow-visible">
                                <div class="rounded-md px-5 py-4 mb-2 background-primary text-white">
                                    <div class="flex items-center">
                                        <div class="font-medium text-lg">Start Task</div>
                                    </div>
                                    <div class="mt-3">
                                        Once you are ready to start the work, please click the button
                                        below:
                                    </div>

                                    <button type="button" class="button background-secondary w-100 text-black mt-4" onclick="start_work_submit_onclick()">Start The Task</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12" v-if="(user.user_type === 9 || user.user_type === 99) && task.task_status === 'In Progress' && task.sku.sku_category === 'Content'">
                            <div class="intro-y overflow-auto lg:overflow-visible sm:mt-0">
                                <div class="intro-y box col-span-12 lg:col-span-6">
                                    <div class="p-5">
                                        <input type="hidden" id="task_id" name="task_id" value="<%=task._id%>" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12" v-if="(user.user_type === 9 || user.user_type === 99) && task.task_status === 'In Progress' && task.sku.sku_category === 'Link'">
                            <div class="intro-y overflow-auto lg:overflow-visible sm:mt-0">
                                <div class="intro-y box col-span-12 lg:col-span-6">
                                    <div class="p-5">
                                        <input type="hidden" id="task_id" name="task_id" value="<%=task._id%>" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12" v-if="(user.user_type === 9 || user.user_type === 99) && task.task_status === 'In Progress' && task.sku.sku_category === 'Translation'">
                            <div class="intro-y overflow-auto lg:overflow-visible sm:mt-0">
                                <div class="intro-y box col-span-12 lg:col-span-6">
                                    <div class="p-5">
                                        <input type="hidden" id="task_id" name="task_id" value="<%=task._id%>" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12" v-if="(user.user_type === 9 || user.user_type === 99) && task.task_status === 'QA'">
                            <div class="intro-y overflow-auto lg:overflow-visible">
                                <div class="intro-y box col-span-12 lg:col-span-6">
                                    <div class="p-5" v-if="task.sku.sku_category === 'Content'"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 mt-6">
                            <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <div class="intro-y box col-span-12 lg:col-span-6">
                                    <div class="p-5"></div>
                                </div>
                            </div>
                        </div>
                        <!-- BEGIN: Task Log -->
                        <div class="col-span-12" v-if="(user.user_type === 9 || user.user_type === 99) && task.task_status === 'To Do'">
                            <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <div class="intro-y box col-span-12 lg:col-span-6">
                                    <div class="p-5">
                                        <div class="tab-content">
                                            <div class="tab-content__pane active" id="latest-tasks-new">
                                                <div class="flex items-center mt-5">
                                                    <div class="border-l-2 border-theme-1 pl-4">
                                                        <i data-feather="thumbs-up" class="w-5 h-5 mr-2 color-primary inline"></i>
                                                        <span class="font-medium">Feedback Provided</span>
                                                        <div class="text-gray-600">
                                                            Thank you for helping us to improve by providing your
                                                            feedback.
                                                        </div>
                                                    </div>
                                                    <div class="text-gray-600 ml-auto"></div>
                                                </div>

                                                <div class="flex items-center mt-5">
                                                    <div class="border-l-2 border-theme-1 pl-4">
                                                        <i data-feather="<%=log.log_icon%>" class="w-5 h-5 mr-2 <%=icon_color%> inline"></i>
                                                        <span class="font-medium"></span>

                                                        <div class="text-gray-600">
                                                            <strong></strong>:
                                                            <br />
                                                        </div>

                                                        <div class="text-gray-600">
                                                            <strong></strong>:
                                                            <br />
                                                        </div>

                                                        <div class="text-gray-600"></div>
                                                    </div>
                                                    <div class="text-gray-600 ml-auto"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- BEGIN: Task Log -->
                    </div>
                    <!-- END: Left Panel -->

                    <!-- BEGIN Right Panel -->
                    <div class="col-span-12 xxl:col-span-3 xxl:border-l -mb-10 pb-10">
                        <div class="xxl:pl-6 grid grid-cols-12 gap-6">
                            <div class="col-span-12 md:col-span-6 xl:col-span-12 xxl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
                                <!-- BEGIN: FILES -->
                                <div class="intro-y flex items-center h-10" v-if="task.project_output &&
                        task.project_output.file_urls &&
                        (task.sku.sku_category === 'Content' || task.sku.sku_category === 'Translation') &&
                        ((task.task_status === 'Complete' || task.task_status === 'Archived' || task.task_status === 'Deleted') || (user.user_type === 9 || user.user_type === 99) || !task.automate)">
                                    <h2 class="text-lg font-medium truncate mr-5">Files</h2>
                                </div>

                                <div class="mt-6 mb-6 intro-x">
                                    <div class="file box rounded-md px-5 pt-5 pb-5 px-3 sm:px-5 relative">
                                        <a v-for="file in task.project_output.file_urls" :key="file" href="<%=file%>" target="_blank" class="w-12 file__icon file__icon--file inline pb-3">
                                            <div class="file__icon__file-name inline">{{file.split(".").pop()}}</div>
                                            <div class="inline font-base ml-16 truncate">{{file.split("/").pop()}}</div>
                                        </a>
                                    </div>
                                </div>

                                <!-- END: FILES -->

                                <!-- BEGIN: QA RESULTS -->
                                <div class="intro-y flex items-center h-10" v-if="task.project_output && (task.project_output.copyscape || task.project_output.grammarly || task.project_output.surferseo)">
                                    <h2 class="text-lg font-medium truncate mr-5">Quality Control</h2>
                                </div>

                                <div class="mt-6 mb-6 intro-x">
                                    <div class="file box rounded-md px-5 pt-5 pb-5 px-3 sm:px-5 relative">
                                        <div v-if="task.project_output.copyscape === 'true'">
                                            <i data-feather="file-text" class="w-5 h-5 mr-2 color-primary inline"></i>
                                            <span class="color-primary">Copyscape: Passed</span>
                                            <span class="color-info" v-if="task.project_output.copyscape_proof">
                                                (
                                                <a v-bind:href="task.project_output.copyscape_proof" target="_blank">Proof</a>)
                                            </span>
                                        </div>
                                        <div v-else>
                                            <i data-feather="file-text" class="w-5 h-5 mr-2 color-warning inline"></i>
                                            <span class="color-warning">Copyscape: Skipped</span>
                                        </div>
                                        <div v-if="task.project_output.grammarly === 'true'">
                                            <i data-feather="file-text" class="w-5 h-5 mr-2 color-primary inline"></i>
                                            <span class="color-primary">Grammarly: Passed</span>
                                            <span class="color-info" v-if="task.project_output.grammarly_proof">
                                                (
                                                <a href="<%=task.project_output.grammarly_proof%>" target="_blank">Proof</a>)
                                            </span>
                                        </div>
                                        <div v-else>
                                            <i data-feather="file-text" class="w-5 h-5 mr-2 color-warning inline"></i>
                                            <span class="color-warning">Grammarly: Skipped</span>
                                        </div>

                                        <div v-if="task.project_output.surferseo  === 'true'">
                                            <i data-feather="file-text" class="w-5 h-5 mr-2 color-primary inline"></i>
                                            <span class="color-primary">SurferSEO: Passed</span>
                                            <span class="color-info" v-if="task.project_output.surferseo_proof">
                                                (
                                                <a v-bind:href="task.project_output.surferseo_proof" target="_blank">Proof</a>)
                                            </span>
                                        </div>
                                        <div v-else>
                                            <i data-feather="file-text" class="w-5 h-5 mr-2 color-warning inline"></i>
                                            <span class="color-warning">SurferSEO: Skipped</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- END: FILES -->

                                <!-- BEGIN: STATUS -->
                                <div class="intro-y flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">Status</h2>
                                </div>
                                <div class="mt-6 intro-x">
                                    <div class="box" id="important-notes">
                                        <div class="p-5">
                                            <div class="text-gray-600 text-justify mt-1"></div>

                                            <div class="text-gray-600 text-justify mt-1">
                                                <br />
                                            </div>

                                            <div class="mt-6">
                                                <div class="w-full h-4 bg-gray-400 rounded" v-if="task.task_status === 'In Progress'">
                                                    <div class="w-1/2 h-full bg-theme-1 rounded text-center text-xs text-white">50%</div>
                                                </div>

                                                <div class="w-full h-4 bg-gray-400 rounded" v-if="task.task_status === 'Complete'">
                                                    <div class="w-1/1 h-full bg-theme-1 rounded text-center text-xs text-white">100%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- END: STATUS -->
                                <!-- BEGIN: Financials -->
                                <div class="intro-y flex items-center h-10 mt-10" v-if="user.user_type >= 9 && task.revenue && task.cost">
                                    <h2 class="text-lg font-medium truncate mr-5">Financial Analysis</h2>
                                </div>
                                <div class="mt-6 intro-x">
                                    <div class="box" id="important-notes">
                                        <div class="p-2">
                                            <i data-feather="plus" class="w-5 h-5 mr-2 color-primary inline"></i>
                                            <span class="font-medium">Revenue: ${{task.revenue}}</span>
                                        </div>

                                        <div class="p-2">
                                            <i data-feather="minus" class="w-5 h-5 mr-2 color-danger inline"></i>
                                            <span class="font-medium">Cost: ${{task.cost}}</span>
                                        </div>

                                        <div class="p-2">
                                            <i data-feather="dollar-sign" class="w-10 h-10 mr-2 <%if((task.revenue - task.cost) > 0){%>color-primary<%}else{%>color-danger<%}%> inline"
                      ></i>
                      <span
                        class="text-2xl <%if((task.revenue - task.cost) > 0){%>color-primary<%}else{%>color-danger<%}%>"
                      >{{task.revenue}} - {{task.cost}}</span>
                    </div>
                  </div>
                </div>
                <!-- END: Financials -->

                <!-- BEGIN: TEAM MEMBER ASSIGNED -->
                <div class="intro-y flex items-center h-10 mt-10" v-if="task.task_assignee">
                  <h2 class="text-lg font-medium truncate mr-5">Team Member</h2>
                </div>
                <div class="mt-6 intro-x">
                  <div class="box" id="important-notes">
                    <div class="p-5">
                      <div
                        class="dropdown-toggle w-8 h-8 m-1 rounded-full overflow-hidden shadow-lg image-fit inline-block"
                      >
                        <img alt="<%=task.task_assignee.displayName%>" />
                                        </div>
                                        <div class="text-gray-600 text-justify mt-1 inline-block align-top sm:py-2">{{task.task_assignee.displayName}}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- END: TEAM MEMBER ASSIGNED -->
                            <!-- BEGIN: TRANSACTION DETAILS -->
                            <div class="intro-y flex items-center h-10 mt-10">
                                <h2 class="text-lg font-medium truncate mr-5">Transaction Details</h2>
                            </div>
                            <div class="mt-6 intro-x">
                                <div class="box" id="important-notes">
                                    <div class="p-5">
                                        <div class="flex">
                                            <a class="flex items-center mr-3" href="/account/billing/transaction/<%=task.transaction._id%>">
                                                <i data-feather="search" class="w-5 h-5 mr-2 color-primary inline"></i> View Invoice
                                            </a>
                                        </div>

                                        <div class="flex mt-5" v-if="user.user_status >= 9">
                                            <a class="flex items-center mr-3" href="https://automate.mn/wp-admin/post.php?post=<%=task.transaction.transaction_id%>&action=edit" target="_blank">
                                                <i data-feather="search" class="w-5 h-5 mr-1 color-primary"></i> View WooCommerce
                                                Order
                                            </a>
                                        </div>
                                    </div>

                                    <div class="p-5" v-if="task.transaction.transaction_note">
                                        <i data-feather="edit" class="w-5 h-5 mr-2 color-primary inline"></i>
                                        <span class="font-medium">Transaction Note:</span>
                                        <div class="text-gray-600 mt-5">{{task.transaction.transaction_note}}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- END: TRANSACTION DETAILS -->

                            <!-- BEGIN: FEEDBACK -->
                            <div v-if="taskFeedback" class="intro-y flex items-center h-10 mt-10">
                                <h2 class="text-lg font-medium truncate mr-5">Feedback</h2>
                            </div>
                            <div class="mt-6 intro-x">
                                <div class="box" id="important-notes">
                                    <div class="p-5">
                                        <i v-if="taskFeedback.feedback_speed && taskFeedback.feedback_speed === 1" data-feather="frown" class="report-box__icon color-danger inline"></i>
                                        <i v-if="taskFeedback.feedback_speed && taskFeedback.feedback_speed === 5" data-feather="meh" class="report-box__icon color-warning inline"></i>
                                        <i v-if="taskFeedback.feedback_speed && taskFeedback.feedback_speed === 10" data-feather="smile" class="report-box__icon color-success inline"></i>
                                        <div class="text-sm text-gray-600 inline pr-1">Speed</div>
                                        <i v-if="taskFeedback.feedback_quality && taskFeedback.feedback_quality === 1" data-feather="frown" class="report-box__icon color-danger inline"></i>
                                        <i v-if="taskFeedback.feedback_quality && taskFeedback.feedback_quality === 5" data-feather="meh" class="report-box__icon color-warning inline"></i>
                                        <i v-if="taskFeedback.feedback_quality && taskFeedback.feedback_quality === 10" data-feather="smile" class="report-box__icon color-success inline"></i>
                                        <div class="text-sm text-gray-600 inline pr-1">Quality</div>
                                        <i v-if="taskFeedback.feedback_price && taskFeedback.feedback_price === 1" data-feather="frown" class="report-box__icon color-danger inline"></i>
                                        <i v-if="taskFeedback.feedback_price && taskFeedback.feedback_price === 5" data-feather="meh" class="report-box__icon color-warning inline"></i>
                                        <i v-if="taskFeedback.feedback_price && taskFeedback.feedback_price === 10" data-feather="smile" class="report-box__icon color-success inline"></i>
                                        <div class="text-sm text-gray-600 inline pr-1">Price</div>

                                        <br />
                                        <br />
                                        <i v-if="taskFeedback.feedback_comment" data-feather="edit-3" class="report-box__icon color-primary inline"></i>
                                        <div class="text-sm text-gray-600 inline">{{taskFeedback.feedback_comment}}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- END: FEEDBACK -->
                        </div>
                    </div>
                </div>
                <!-- END: Right Panel -->
            </div>
            <!-- END: Main Page -->
        </div>
    </div>
</div>
</template>

<script>
import homeHeader from "../home-component/homeHeader";
import homeSearch from "../home-component/homeSearch";
import homeAccount from "../home-component/homeAccount";
import formContent from "./forms/formContent";
import formLink from "./forms/formLink";
import formTranslation from "./forms/formTranslation";
import {
    GETTASKDETAILDATA
} from "../../../store/actionType";
import {
    ChevronRightIcon,
    AlertTriangleIcon,
    Share2Icon,
    RefreshCcwIcon,
    FastForwardIcon,
    FrownIcon,
    Edit3Icon,
    MehIcon,
    AwardIcon,
    SmileIcon,
} from "vue-feather-icons";
export default {
    components: {
        homeHeader,
        homeSearch,
        homeAccount,
        ChevronRightIcon,
        AlertTriangleIcon,
        Share2Icon,
        RefreshCcwIcon,
        FastForwardIcon,
        FrownIcon,
        MehIcon,
        SmileIcon,
        Edit3Icon,
        AwardIcon,
        formContent,
        formLink,
        formTranslation,
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user")),
            taskId: this.$route.params.task_id,
            task: {},
        };
    },
    mounted() {
        const sendingData = {
            user: this.user,
            task_id: this.taskId,
        };
        this.$store.dispatch(GETTASKDETAILDATA, sendingData).then((res) => {
            if (res.status === 200) {
                this.task = res.data.task;
                console.log(res.data.task);
            }
        });
    },
};
</script>

<style>
.dashboard-home {
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-family: Roboto;
    font-size: 0.875rem;
    --text-opacity: 1;
}
</style>
