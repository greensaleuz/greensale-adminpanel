<script lang="ts">
import { UserViewModels } from '../../viewmodels/UserViewModels';
import UserViewComponent from "../../components/users/UserViewComponent.vue";
import UserSkeletonComponent from "../../components/users/UserSkeletonComponent.vue"
import axios from '../../plugins/axios'
import { useI18n } from 'vue-i18n';
import { getToken } from '../../helpers/TokenHelper';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserViewComponent,UserSkeletonComponent
  },
  methods: {
    openDeleteModal() {
            this.showDeleteModal = true;
        },
        closeDeleteModal() {
            this.showDeleteModal = false;
        },
        async confirmDelete() {
            const response = await axios.delete("/api/admin/users/" + this.userList);
            if (response && response.status) {
                console.log(response.status.toString());
                console.log("Deleting the user...");
                this.$router.push('users')
                this.closeDeleteModal();
                location.reload();
            }
            else {
                console.log("Response status is undefined or null.");
            }
        },
    async getDataAsync() {
      this.isLoaded = false;
      const token = getToken();
      var response = await axios.get<UserViewModels[]>("/api/admin/users?page=1", {
        headers: {
          accept: "*/*",
          "Authorization": `Bearer ${token}`
        },        
      });
      this.isLoaded = true;
      this.userList = response.data;
    }
  },
  data() {
    return {
      userList: [] as UserViewModels[],
      defaultSkeletons: 5 as Number,
      isLoaded: false as Boolean,
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
  <div >
    <ul v-show="isLoaded==false">
    <template v-for="element in defaultSkeletons">
      <UserSkeletonComponent
       class="m-10 ">
      </UserSkeletonComponent>
    </template>
  </ul>
    <ul v-if="isLoaded == true" >
        <template v-for="element in userList">
        <table class=" mx-10 me-10 w-full border hover:bg-gray-100 text-sm text-left text align-middle text-gray-500 dark:text-gray-400"
           style="width: 1120px;">
            <UserViewComponent
              :id="element.id"
              :firstName="element.firstName"
              :lastName="element.lastName"
              :phoneNumber="element.phoneNumber"
              :region="element.region">
            </UserViewComponent>
        </table>
        </template>
    </ul>    
  </div>
  <!--end:: User-->
</template>