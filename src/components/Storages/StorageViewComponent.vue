<script lang="ts">
import axios from '../../plugins/axios'
import { defineComponent } from 'vue'
import { formatDate } from '../../helpers/DataHelper'

export default defineComponent({
  components: {
  },
  props: {
    id: Number,
    fullName: String,
    userPhoneNumber: String,
    postPhoneNumber: String,
    categoryName: String,
    title: String,
    info: String,
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
    imagePath: String
  }, 
  data() {
    return {
      baseURL: '' as String,
      createdAtString: '' as String,
      updatedAtString: '' as String,
      imageFullPath: '' as string,
    }
  },
  methods: {
    async load() {

      this.baseURL = axios.defaults.baseURL!;
      this.imageFullPath = this.baseURL + '//' + this.imagePath;
      console.log(this.imageFullPath);
      this.createdAtString = formatDate(this.createdAt!)
      this.updatedAtString = formatDate(this.updatedAt!)
    },
    exit(){
      localStorage.setItem("StorageById", this.id?.toString() || "" );
      this.$router.push('storageinformation')

    }
  },
  async mounted() {
    await this.load()
  }
})
</script>

<template>
    <div
    class="flex-none pb-2 max-w-sm bg-gray-50 border my-1 border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 mx-1">
    <a href="#">
      <img
        class="rounded-t-lg w-full"
        v-bind:src=imageFullPath
        style="width: 290px; height: 200px"
      />
    </a>
    </div>

    <div class="">
      <div class="flex">
        <div class="flex pt-1 w-full">
          <h5 class="mb-2 text-sm  tracking-tight text-gray-600 dark:text-gray-200">
            {{ district }}
          </h5>
          <h5 class="mb-2 pt-1 text-xs mx-3  tracking-tight text-gray-600 dark:text-gray-200" style="margin-left: auto;">
            {{ updatedAtString }}
          </h5>
        </div>
      </div>
      <div class="line"></div>
        <div>
      <h4 class=" text-2xl tracking-tight text-black dark:text-white px-2">{{ title }}</h4>
      <h4 class=" text-xl tracking-tight black dark:text-white px-2">{{ info}}</h4>
      <p class=" font-normal text-gray-700 dark:text-gray-400 px-2" style="width: 290px; ">{{ description }}</p>
      </div>
      <button 
      type="button" 
      @click="exit"
      class="text-white bg-gradient-to-r  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 mx-2 text-center mt-2 mb-3">{{ $t('koproq_malumot') }}</button>
    
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