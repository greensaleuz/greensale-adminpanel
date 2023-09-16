<script lang="ts">
import { defineComponent } from "vue";
import axios from "../../plugins/axios";
import FlowbiteSetup from "../../FlowbiteSetup.vue";
export default defineComponent({
    components: {
      FlowbiteSetup
    },
    data() {
        return {
            showModal:false ,
            categoryname: "" as String,
            // createdat: Date,
            // updatedat:  Date,
            createError:false as boolean
        };
    },
    methods: {

        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        async createAsync() {
          debugger;
            const formData = new FormData();
            formData.append("Name", this.categoryname.toString());
            // formData.append("CreatedAt",this.createdat!);
            // formData.append("UpdatedAt",this.updatedat!);
            const responce = await axios.post("/api/admin/categories", formData);
            if (responce.status == 200) {
                location.reload();
                this.closeModal();
            }
            else {
                this.createError = true;
            }
        }
    },
});
</script>
<template>
  <FlowbiteSetup></FlowbiteSetup>
 <div class="flex w-100 justify-end">
    <div class="flex flex-wrap pt-8 justify-center mb-1">
      <button
        type="button"
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="text-white h-11 py-2 px-5 my-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm text-center">
        <div class="flex flex-wrap items-center">
          <icon name="create"></icon>
          <p class="mx-2">{{ $t('create') }}</p>
        </div>
      </button>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-md max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="w-24 absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                {{ $t('enter_a_category_name') }}
              </h3>
              <form class="space-y-6" action="#">
                <div>
                  <input
                    type="text"
                    v-model="categoryname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <button
                  @click="createAsync"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {{ $t('add_a_category') }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>