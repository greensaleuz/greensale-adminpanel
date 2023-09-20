<script  lang="ts">
import { defineComponent } from 'vue'
import { SellerAnnouncementViewModel } from '../../viewmodels/SellerViewModel'
import SellerAnnouncementViewComponent from '../../../src/components/sellerposts/SellerViewComponent.vue'
import SellerAnnouncementViewSkelton from '../../components/sellerposts/sellercomponentskeleton.vue'
import SellerCreateComponent from '../../components/sellerposts/SellerCreateComponent.vue'
import axios from '../../plugins/axios'

export default defineComponent({
  components: {
    SellerAnnouncementViewComponent,
    SellerAnnouncementViewSkelton,
    SellerCreateComponent
  },
  data() {
    return {
      postsList: [] as SellerAnnouncementViewModel[],
      isLoaded: false as Boolean,
      defaultSkeletons: 2 as Number
    }
  },
  methods: {
    async getDataAsync() {
      this.isLoaded = false
      var response = await axios.get<SellerAnnouncementViewModel[]>(
        '/api/common/seller/post?page=1'
      )
      this.isLoaded = true
      this.postsList = response.data
      console.log(this.postsList)
    }
  },
  setup() {},
  async mounted() {
    await this.getDataAsync()
  }
})
</script>

<template>
<nav class="flex mb-5" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3" > 
            <li class="inline-flex items-center ">
                <a href="/dashboard"  style="font-size: 16px;margin-left: 4px; font-weight: font-semibold;"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg class="w-3 h-3 mr-3"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        style="height: 13px; width: 13px;" viewBox="0 0 20 20">
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    {{ $t("dashboard") }}
                </a>
            </li>
            <li>
                <div class="flex items-center">
                    <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <a href="#" style="font-size: 16px;"
                        class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                        {{ $t("sellerannnouncements") }}</a>
                </div>
            </li>
        </ol>
  </nav>
  
    <SellerCreateComponent>
        
    </SellerCreateComponent>
  <ul v-show="isLoaded == false">
    <template v-for="element in defaultSkeletons">
      <SellerAnnouncementViewSkelton class="mt 7 mb 3"> </SellerAnnouncementViewSkelton>
    </template>
  </ul>

  <ul>
    <div class="cart_wrapper">
      <template v-for="element in postsList">
        <SellerAnnouncementViewComponent
          :id="element.id"
          :fullName="element.fullName"
          :userPhoneNumber="element.userPhoneNumber"
          :postPhoneNumber="element.postPhoneNumber"
          :categoryId="element.categoryId"
          :title="element.title"
          :description="element.description"
          :price="element.price"
          :capacity="element.capacity"
          :capacityMeasure="element.capacityMeasure"
          :type="element.type"
          :region="element.region"
          :district="element.district"
          :address="element.address"
          :status="element.status"
          :averageStars="element.averageStars"
          :userStars="element.userStars"
          :createdAt="element.createdAt"
          :updatedAt="element.updatedAt"
          :mainImage="element.mainImage"
        ></SellerAnnouncementViewComponent>
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
.cart_wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>