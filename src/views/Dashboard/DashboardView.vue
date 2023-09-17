<!-- <template>    
<div role="status" class=" mt-5 max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class=" mt-10 max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class=" mt-10 max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
</template> -->


<script lang="ts">
import { defineComponent } from 'vue'
import DashboardViewComponent from '../../components/dashboard/DashboardViewComponent.vue'
import axios from '../../plugins/axios'
import { getToken } from '../../helpers/TokenHelper'
import { read } from 'fs'

export default defineComponent({
  components: {
    DashboardViewComponent
  },
  methods: {
    async getDataAsync() {
      try {
        const resBuyerCount = await axios.get('api/common/buyer/posts/count')
        const resSellerCount = await axios.get('api/common/seller/post/count')
        const resStorageCount = await axios.get('api/common/storage/count')
        const resUserCount = await axios.get('api/admin/users/count')

        this.apiBuyerCount = resBuyerCount.data
        this.apiSellerCount = resSellerCount.data
        this.apiStorageCount = resStorageCount.data
         this.apiUserCount = resUserCount.data
        this.summa = this.apiBuyerCount + this.apiSellerCount + this.apiStorageCount;

      } catch (error) {
        console.log(error)
      }
    }
  },

  data() {
    return {
      apiBuyerCount: 0,
      apiSellerCount: 0,
      apiStorageCount: 0,
      summa: 0,
      apiUserCount: 0,
      series: [{
        name: 'Seller',
        type: 'area',        
        data: [30, 37, 20, 40, 70, 25, 20, 40, 70, 100, 90]
      }, {
        name: 'Buyer',
        type: 'area',
        data: [14, 30, 35, 28, 20, 35, 20, 75, 60, 100, 75]
      }],
      chartOptions: {
        chart: {
          height: 120,
          type: 'line',          
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'solid',
          opacity: [0.25,0.25],          
        },
        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        markers: {
          size: 3,
          
          
        },
        yaxis: [
          {
            title: {
              text: 'Seller value',
            },
          },
          {
            opposite: true,
            title: {              
              text: 'Buyer value',
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y: number) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    }
  },
  async mounted() {
    await this.getDataAsync()
  }
})
</script>

<template>

  <!--end:: Dashboard-->  
    <ul>
      <DashboardViewComponent :apiData="apiBuyerCount" :countUser="apiUserCount" :countSeller="apiSellerCount"
      :countAgreed="apiStorageCount" :summaAnnouncemet="summa" :countBuyer="apiBuyerCount"/>
    </ul>
    <div  class="mt-11 mx-12 " style=" border-radius: 10px;border-width: 2px;">
      <!-- <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom"
        class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
        type="button">
        Last 10 days
    <svg class="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
    </svg>
  </button> -->
    <h3 href="#" style="font-size: 20px;"
      class=" mt-5 mx-7 uppercase text-sm font-semibold inline-flex items-center rounded-lg light:text-white dark:text-white hover:text-blue-700 dark:hover:text-white-500 hover:bg-gray-100 dark:hover:bg-white-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
        {{$t("sales report") }}
      <!-- <svg class="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
      </svg> -->
    </h3>
      <apexchart type="line" height="500" width="1090" :options="chartOptions" :series="series"
      style=""></apexchart>
    </div>

    <!-- <DashboardChart></DashboardChart> -->
  <!--begin:: Dashboard-->
</template>