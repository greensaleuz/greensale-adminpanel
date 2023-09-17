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
    class="m-1   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
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
       <icon name="location"></icon>
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
