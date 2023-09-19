<!-- <template>    
    <div role="status" class="mt-5 animate-pulse">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
        <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div class="flex items-center justify-center mt-4">
            <svg class="w-8 h-8 text-gray-200 dark:text-gray-700 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
            <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
    </div>
    <div role="status" class="mt-5 animate-pulse">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
        <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div class="flex items-center justify-center mt-4">
            <svg class="w-8 h-8 text-gray-200 dark:text-gray-700 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
            <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
    </div>
    <div role="status" class="mt-5 animate-pulse">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
        <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div class="flex items-center justify-center mt-4">
            <svg class="w-8 h-8 text-gray-200 dark:text-gray-700 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
            <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
    </div>
</template> -->

<script lang="ts">
import { AdminViewModels } from '../../viewmodels/AdminViewModels';
import AdminViewComponent from '../../components/admins/AdminViewComponent.vue';
import axios from '../../plugins/axios'
import { useI18n } from 'vue-i18n';
import { getToken } from '../../helpers/TokenHelper';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    AdminViewModels
  },
  methods: {
    async getDataAsync() {
      this.isLoaded = false;
      const token = getToken();
      var response = await axios.get<AdminViewModels[]>("/api/admin/users/admin", {
        headers: {
          accept: "*/*",
          "Authorization": `Bearer ${token}`
        }
      });
      this.isLoaded = true;
      this.userList = response.data;
    }
  },
  data() {
    return {
      userList: [] as AdminViewModels[],
      defaultSkeletons: 4 as Number,
      isLoaded: false as Boolean
    }
  },
  setup() {
    const { t } = useI18n();
  },
  async mounted() {
    await this.getDataAsync();
  },
});
</script>

<template>
  <!--begin:: Admin-->

  <div class="m-10 mb-4 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr class="h-16">
            <th scope="col" class="w-4 px-6 py-3 text-gray-900 whitespace-nowrap dark:text-white">
            {{ $t('#ID') }}
          </th>
          <th scope="col" class="w-40 px-6 py-3  text-gray-900 whitespace-nowrap dark:text-white">
            {{ $t('firsName') }}
          </th>
          <th scope="col" class="w-40 px-6 py-3  text-gray-900 whitespace-nowrap dark:text-white">
            {{ $t('lastname') }}
          </th>
          <th scope="col" class="w-32 px-6 py-3  text-gray-900 whitespace-nowrap dark:text-white">
            {{ $t('phone') }}
          </th>
          <th scope="col" class="w-40 px-6 py-3  text-gray-900 whitespace-nowrap dark:text-white">
            {{ $t('adress') }}
          </th>
          <th scope="col" class="w-24 px-6 py-3 text-gray-900 whitespace-nowrap dark:text-white">
            {{ $t('delete') }}
          </th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="flex w-100 justify-end">
  </div>
  <div >
    <ul v-if="isLoaded == true" >
        <template v-for="element in userList">
        <table class=" mx-10 me-10 w-full border hover:bg-gray-100 text-sm text-left text align-middle text-gray-500 dark:text-gray-400"
           style="width: 1135px;">
            <tbody>
            <tr class="  p-1 h-14 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900"
            style="border-radius: 10px; ">
                <th scope="row" class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                style="width: 10px;">
                {{ "#01"}}
                </th>
                <td scope="row" class="w-40 px-6 py-4 ">
                {{ element.firstName }}
                </td>
                <td class="w-40 px-6 py-4">
                {{ element.lastName }}
                </td>
                <td class="w-32 px-6 py-4">
                {{ element.phoneNumber }}
                </td>
                <td class="w-40 px-6 py-4">
                {{ element.region }}
                </td>
                <td class="w-16 px-6 py-4">
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        <icon name="delete" ></icon>
                    </button>
                </td>
                <!-- <td class="w-32 px-6 py-4">
                <router-link :to="`users/${element.id}`"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mx-2 mt-2 mb-3">{{
                    $t('koproq malumot') }}
                </router-link>
                </td> -->
            </tr>
            </tbody>
        </table>
        <!-- <UserViewComponent :user="element" class="mt-2 mb-3" /> -->
        </template>
    </ul>
  </div>
  <!--end:: User-->
</template>