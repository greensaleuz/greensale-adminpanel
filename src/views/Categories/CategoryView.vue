<script lang="ts">
import { defineComponent } from 'vue'
import { CategoryViewModel } from '../../viewmodels/CategoryViewModels'
import { CategoryDto } from '../../dtos/CategoryDto'
import CategoryViewComponent from '../../components/categories/CategoryViewComponent.vue'
import CategoryCreateComponent from '../../components/categories/CategoryCreateComponent.vue'
import CategorySkeletonComponent from '../../components/categories/CategorySkeletonComponent.vue'
import axios from '../../plugins/axios'

export default defineComponent({
  components: {
    CategoryViewComponent,CategorySkeletonComponent,
    CategoryCreateComponent,CategoryDto
  },
  data() {
    return {
      categoriesList: [] as CategoryViewModel[],
      defaultSkeletons: 4 as Number,
      isLoaded:false as Boolean

    }
  },
  methods: {
    async getDataAsync() {
      this.isLoaded=false;
      var response = await axios.get<CategoryViewModel[]>('/api/common/categories?page=1');
      this.isLoaded=true;
      this.categoriesList = response.data;
      console.log(this.categoriesList);
    }
  },
  setup() {

  },
  async mounted() {
    await this.getDataAsync();
  }
})
</script>

<template>
  <!--begin:: Categories Skeletons-->
  <ul v-show="isLoaded==false">
    <template v-for="element in defaultSkeletons">
      <CategorySkeletonComponent
      class="mt-10">

      </CategorySkeletonComponent>
    </template>
  </ul>
  <!--end:: Categories Skeletons-->

  <ul v-show="isLoaded==true">
    <CategoryCreateComponent>
      <icon name="create"></icon>
    </CategoryCreateComponent>
    <template v-for="element in categoriesList">
      <CategoryViewComponent
        :id="element.id"
        :name="element.name"
        :createdAt="element.createdAt"
        :updatedAt="element.updatedAt"
        class="mt 7 mb 3">
      </CategoryViewComponent>
    </template>
  </ul>
</template>

