<script  lang="ts">
import { defineComponent } from 'vue'
import { SellerAnnouncementViewModel } from '../../viewmodels/SellerViewModel'
import SellerAnnouncementViewComponent from '../../../src/components/sellerposts/SellerViewComponent.vue'
import SellerAnnouncementViewSkelton from '../../components/sellerposts/SellerComponentSkeleton.vue'
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