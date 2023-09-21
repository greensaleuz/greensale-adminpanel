<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../../plugins/axios'
import { formatDate } from '../../helpers//DataHelper'
import type { PostViewModel } from '../../viewmodels/SellerGetByIdViewModel'
// SellerGetByIdViewModels faylidan kelgan modulni ishlatishingiz mumkin
import FlowbiteSetUp from '../../FlowbiteSetup.vue'
//import InformationView from '../informations/InformationView.vue'
import deleteComponent from '../../components/sellerposts/SellerDeleteComponent.vue'
import editComponent from '../../components/sellerposts/SellerEditComponent.vue'
export default defineComponent({
  components: {
    // InformationView,
    FlowbiteSetUp,
    deleteComponent,
    editComponent
  },
  props: {
    createdAtString: Date,
    updatedAtString: Date
  },
  data() {
    return {
      showModal: false,
      statusString:"" as string |  null,
      status_zero: false as boolean,
      status_one: false as boolean,
      status_two: false as boolean,
      star_one: false as boolean,
      star_two: false as boolean,
      star_three: false as boolean,
      star_fo: false as boolean,
      star_five: false as boolean,
      postList: {} as PostViewModel,
      AvarageStar: 0 as Number,

      fullName: '' as String,
      id: 0 as Number,
      userId: ''  as String,
      userPhoneNumber: '' as String,
      postPhoneNumber: '' as String,
      userRegion: '' as String,
      categoryName: '' as String,
      title: '' as String,
      description: '' as String,
      price: 0 as Number,
      capacity: 0 as Number,
      capacityMeasure: '' as String,
      type: '' as String,
      region: '' as String,
      district: '' as String,
      updatedAt: Date,
      createdAt: Date,
      status: 0 as Number,
      postImages: [],
      test: false as boolean,
    }
  },
  methods: {
    async getDataAsync() {
      let SellerId = localStorage.getItem('sellerById')
      var response = await axios.get<PostViewModel>(
        '/api/common/seller/post/' + Number(SellerId)
      )
      this.postList = response.data || {}; // Shartni qo'shmasdan, response.data bo'sh bo'lsa bo'sh obyektni ishlatish

      console.log(this.postList)
      //    this.createdAtString = formatDate(this.createdAt!)
      //  this.updatedAtString = formatDate(this.updatedAt!)

      if (this.postList.status! == 0) {
        this.statusString = "Yangi"
      }
      else if (this.postList.status! == 1) {
        this.statusString = "Kelishilgan"
      }
      else if (this.postList.status! == 2) {
        this.statusString = "Olingan"
      }
      this.showModal = true;
    },
    async stars(stars_number ){
      debugger;
        const formData = new FormData();
            formData.append("PostId", this.id);
            formData.append("Stars", stars_number);
            console.log(this.id);
         const responsetwo = await axios.post("/api/admin/seller/post/star",formData);
     
     var response = await axios.get<PostViewModel>('/api/common/seller/post/'+Number(this.id));
      this.postList = response.data || {};
      

      if(stars_number==1){
        this.star_one = true ;
        this.star_two = false ;
        this.star_three = false ;
        this.star_fo = false ;
        this.star_five =false;
        this.AvarageStar = this.postList.averageStars;
      }
      else if(stars_number==2){
        this.star_one = true ;
        this.star_two = true ;
        this.star_three = false ;
        this.star_fo = false ;
        this.star_five =false;
        this.AvarageStar = this.postList.averageStars;
      }
      else if(stars_number==3){
        this.star_one = true ;
        this.star_two = true ;
        this.star_three = true ;
        this.star_fo = false ;
        this.star_five =false;
        this.AvarageStar = this.postList.averageStars;
      }
       else if(stars_number==4){
        this.star_one = true ;
        this.star_two = true ;
        this.star_three = true ;
        this.star_fo = true ;
        this.star_five =false;
        this.AvarageStar = this.postList.averageStars;
      }
      else if(stars_number==5){
        this.star_one = true ;
        this.star_two = true ;
        this.star_three = true ;
        this.star_fo = true ;
        this.star_five =true;
        this.AvarageStar = this.postList.averageStars;
      }
      

    }
  },
  setup() { },
  async mounted() {
    await this.getDataAsync();
    await this.deletedAsync();
  }
})
</script>

<template>
  <FlowbiteSetUp></FlowbiteSetUp>
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









  <div class="flex" style="gap:20px" >
    <!-- <h1 class=" my-2 mx-15 text-gray-900 dark:text-gray-100">{{ $t('sellerpostinformation') }}</h1> -->
<!--Begin corusel-->

<div class="desplay w-full my-5" >

<div id="gallery" class="relative max-w-xl "
 style="" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 max-w-xl overflow-hidden rounded-lg md:h-96" style="margin-right:auto; margib-left:auto;">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-xl h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-xl h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-xl h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-xl h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-xl h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
</div>

<!--End corusel-->


    <div class="flex" style="gap: 30px">
      <div class="w-full h-96 my-5 flex text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" style="flex-direction: column">
       
        <div class="">
      <div class="flex">
        <div class="my-1.5">
          <icon name="location" class="py-2" style="margin-top: 10px"></icon>
        </div>

        <div class="flex pt-1" style="width: 265px">
          <h5 class="mb-2 mt-1 text-xs tracking-tight text-gray-600 dark:text-gray-200">
            Olma
          </h5>
          <h5
            class="mb-2 pt-1 text-xs mx-3 tracking-tight text-gray-600 dark:text-gray-200"
            style="margin-left: auto"
          >
           23.05.2023 12:34
          </h5>
        </div>
      </div>
      <div class="line"></div>
      <div> <h4 class="text-lg tracking-tight text-black dark:text-white px-2 pt-2"> Title</h4>
        <div class="flex">
         
           <!--Begin::stars-->
        <div class="flex items-center mt-2.5 mb-2 mx-2">
          <!--One Star-->
         
          <button
            @click="stars(1)"
            v-show="star_one==false">
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </button>
          <button
            @click="stars(1)"
            v-show="star_one==true">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </button>
        <!--One Star-->
           <!--Two Star-->
         
          <button
          @click="stars(2)"
            v-show="star_two==false">
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </button>
          <button 
          @click="stars(2)"
           v-show="star_two==true">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </button>
        <!--Two Star-->
           <!--Three Star-->
         
          <button
          @click="stars(3)"
            v-show="star_three==false">
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </button>
          <button
          @click="stars(3)"
            v-show="star_three==true">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </button>
        <!--Three Star-->

           <!--Fo Star-->
          
          <button  
          @click="stars(4)"
          v-show="star_fo==false">
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </button>
          <button 
          @click="stars(4)"
           v-show="star_fo==true">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </button>
        <!--Two Star-->
           <!--Two Star-->
         
          <button 
          @click="stars(5)"
           v-show="star_five==false">
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </button> <button 
          @click="stars(5)"
           v-show="star_five==true">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </button>
        <!--Five Star-->
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
         >{{ AvarageStar  }} </span
          >
        </div>
         <!--End::stars-->
          <div class="mt-2 mr-2" style="margin-left: auto">

            
            <div
              v-show="status_zero == true"
              class="px-3 py-1.5 text-xs font-medium leading-none text-center text-green-800 bg-green-400 rounded-full animate-pulse dark:bg-green-900 dark:text-green-200"
            >
              {{ $t('statustypezero') }}
            </div>
            <div
              v-show="status_one == true"
              class="px-3 py-1.5 text-xs font-medium leading-none text-center text-yellow-800 bg-yellow-400 rounded-full animate-pulse dark:bg-yellow-900 dark:text-yellow-200"
            >
              {{ $t('statustypeone') }}
            </div>
            <div
              v-show="status_two == true"
              class="px-3 py-1.5 text-xs font-medium leading-none text-center text-red-800 bg-red-400 rounded-full animate-pulse dark:bg-red-900 dark:text-red-200"
            >
              {{ $t('statustypetwo') }}
            </div>
          </div>
        </div>
        <div class="flex">
          <h4 class="text-base tracking-tight black dark:text-white px-2">
            1000 kg
          </h4>

          <div class="mr-2" style="margin-left: auto">
            <h4 class="text-base tracking-tight black dark:text-white px-2">3000 UZS</h4>
          </div>
        </div>
        <p class="font-normal text-xs text-gray-700 dark:text-gray-400 px-2" style="width: 290px">
         Bog' mevalari
        </p>

       
      </div>

     
    </div>
        <div class="w-96 flex" style="gap: 10px">

          <!--end:: buttons-->
        </div>
      </div>
    </div>
    
  </div> <deleteComponent></deleteComponent>
</template>

