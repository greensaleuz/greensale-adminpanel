<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../../plugins/axios'
export default defineComponent({
  components: {},
  props: {
    nameProp: String,
    descriptionProp: String,
    idProp: Number
  },
  data() {
    return {
      showModal: false,
      categoryName: ''
    }
  },
  methods: {
    openModal() {
      this.categoryName = this.nameProp!
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    async submitForm() {
      const formData = new FormData()
      formData.append('Name', this.categoryName!)
      const responce = await axios.put('/api/admin/categories/' + this.idProp, formData)
      console.log(responce.status)
      if (responce.status == 200) {
        location.reload()
        this.closeModal()
      }
    }
  }
})
</script>

<template>
  <div class="flex w-100 justify-end mt-10">
    <button
      @click="openModal"
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-2sm px-5 py-2 text-center mr-3 mb-4"
    >
      <div class="flex flex-wrap items-center">
        <icon name="create"></icon>
        <h2 class="mx-2 mb-1">{{ $t('create') }}</h2>
      </div>
    </button>
  </div>
  <!-- Main modal -->
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-3xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <span class="sr-only">Close modal</span>
        </button>

        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {{ $t('createnewpost') }}
          </h3>
          <form class="space-y-6" action="#">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('phonenumber') }}</label
                >
                <input
                  type="text"
                  id="last_name"
                  v-model="postPhoneNumber"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                  $t('title')
                }}</label>
                <input
                  v-model="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                  $t('price')
                }}</label>
                <input
                  v-model="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                  $t('capacity')
                }}</label>
                <input
                  v-model="capacity"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                  $t('capasitymeasure')
                }}</label>
                <input
                  v-model="capasitymeasure"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('region') }}</label
                >
                <input
                  v-model="region"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('district') }}</label
                >
                <input
                  v-model="district"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('type') }}</label
                >
                <input
                  v-model="type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div>
              <label
                for="visitors"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >{{ $t('description') }}</label
              >
              <input
                v-model="description"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="default_size"
                >{{ $t('images') }}</label
              >
              <input
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="default_size"
                type="file"
              />
            </div>
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ $t('create') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>