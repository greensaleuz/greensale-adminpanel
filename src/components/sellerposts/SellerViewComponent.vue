<script lang="ts">
import axios from '../../plugins/axios'
import { defineComponent } from 'vue'
import { initFlowbite } from 'flowbite'
import { formatDate } from '../../helpers/DataHelper'

export default defineComponent({
  components: {
  },
  data() {
    return {
      baseURL: '' as String,
      createdAtString: '' as String,
      updatedAtString: '' as String,
      imageFullPath: '' as string
    }
  },
  props: {
    id: Number,
    fullName: String,
    userPhoneNumber: String,
    postPhoneNumber: String,
    categoryName: String,
    title: String,
    description: String,
    price: Number,
    capacity: Number,
    capacityMeasure: String,
    type: String,
    region: String,
    district: String,
    address: String,
    status: Number,
    createdAt: Date,
    updatedAt: Date,
    mainImage: String
  },
  methods: {
    load() {
      this.baseURL = axios.defaults.baseURL!
      this.imageFullPath = this.baseURL + '/' + this.mainImage
      this.createdAtString = formatDate(this.createdAt!)
      this.updatedAtString = formatDate(this.updatedAt!)
    },
    exit(){
      
      localStorage.setItem("sellerById",this.id?.toString() || "");
      this.$router.push('sellerinformation')
    }
  },
  mounted() {
    this.load()
  }
})
</script>

<template>
    <div
    class="m-1   bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-black"
  >
    <a href="#">
      <img
        class="rounded-t-lg w-full"
        :src="imageFullPath"  
        style="width: 290px; height: 200px"
      />
    </a>
    <div class="">
      <div class="flex">
        <div class="mt-1"> <icon name="location"></icon></div>
      
        <div class="flex pt-1"   style="width: 265px;">
          <h5 class="mb-2 text-sm  tracking-tight text-gray-600 dark:text-gray-200">
            {{ district }}
          </h5>
          <h5 class="mb-2 pt-1 text-xs mx-3  tracking-tight text-gray-600 dark:text-gray-200" style="margin-left:auto;">
            {{ updatedAtString }}
          </h5>
        </div>
      </div>
      <div class="line "></div>
        <div>
      <h4 class=" text-3xl tracking-tight text-black dark:text-white px-2">{{ title }}</h4>
      <h4 class=" text-xl tracking-tight black dark:text-white px-2">{{ price }} so'm dan {{ capacity }}{{ capacityMeasure }}</h4>
      <p class=" font-normal text-gray-700 dark:text-gray-400 px-2"        
      style="width: 290px;">{{ description }}</p>
      </div>
      <div class="mx-2">


        <div class="flex items-center mt-2.5 mb-5">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
      </div>
      <button 
      @click="exit" 
      type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-1  text-center px-2 mx-2  mt-1 mb-3">{{ $t('koproq_malumot') }}</button>
    </div>
  </div>
</template>
<style scoped>
.line {
  width: 100%;
  height: 1px;
  background: gray;
}
.sss{
  margin-top:40px;
  margin-right: 0px;
  justify-content: end;
}
.gapp {
  gap: 95px;
}
</style>
