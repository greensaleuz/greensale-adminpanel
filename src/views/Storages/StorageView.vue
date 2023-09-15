<script lang="ts">
import { defineComponent } from 'vue';
import  { StorageViewModel }  from '../../viewmodels/StorageViewModels';
import StorageAnnouncementViewComponent from '../../components/Storages/StorageViewComponent.vue';

import axios from '../../plugins/axios';

export default defineComponent({
  components:{
    StorageAnnouncementViewComponent
  },
  data() {
    return {
      postsList : [] as StorageViewModel[]
    }
  },
  methods:{
    async getDataAsync(){
        var response = await axios.get<StorageViewModel[]>("/api/common/storage?page=1"); 
        this.postsList = response.data;
        console.log(this.postsList);
    }
  },
  setup(){
 
  },
  async mounted() {
      await this.getDataAsync();
  },
});
</script>

<template>
  <ul> 
    <div class="cart_wrapper">
     <template v-for="element in postsList">
       
      <StorageAnnouncementViewComponent 
        :Id=element.Id
        :UserId = element.UserId
        :FullName=element.FullName
        :UserPhoneNumber=element.PhoneNumber
        :Info=element.Info
        :Description=element.Description
        :Region=element.Region
        :District=element.District
        :Address=element.Address
        :CreatedAt=element.CreatedAt
        :UpdatedAt=element.UpdatedAt
        :ImagePath=element.ImagePath
        :AverageStars=element.AverageStars
        :UserStars = element.UserStars
        :AddressLatitude = element.AddressLatitude
        :AddressLongitude = element.AddressLongitude
      ></StorageAnnouncementViewComponent>
    
    </template>  
   </div>
  </ul>

  <nav aria-label="Page navigation example mx-80">
    <ul class="inline-flex -space-x-px text-sm justify-center mx-72 my-5">
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >1</a
        >
      </li>
     <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.cart_wrapper{
    display: flex                                                                                    ;
    flex-wrap: wrap;
}

</style>