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
import { UserViewModels } from '../../viewmodels/UserViewModels';
import UserViewComponent from "../../components/users/UserViewComponent.vue";
import AdminViewComponent from '../../components/admins/AdminViewComponent.vue';
import axios from '../../plugins/axios'
import { useI18n } from 'vue-i18n';
import { getToken } from '../../helpers/TokenHelper';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserViewComponent,AdminViewComponent
  },
  methods: {
    async getDataAsync() {
      this.isLoaded = false;
      const token = getToken();
      var response = await axios.get<AdminViewComponent[]>("/api/admin/users?page=1", {
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
      userList: [] as AdminViewComponent[],
      defaultSkeletons: 3 as Number,
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
  <!--begin:: User-->

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            {{ $t('firsName') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('lastname') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('phone') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('adress') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('koproq_malumot') }}
          </th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="flex w-100 justify-end">
  </div>
  <ul v-if="isLoaded == true">
    <template v-for="element in userList">
      <table class="w-full text-sm text-left text align-middle text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ element.firstName }}
            </th>
            <td class="w-32 px-6 py-4">
              {{ element.lastName }}
            </td>
            <td class="w-32 px-6 py-4">
              {{ element.phoneNumber }}
            </td>
            <td class="w-32 px-6 py-4">
              {{ element.region }}
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
  <!--end:: User-->
</template>