<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
  props: {
    id: Number,
    name: String,
    imagePath: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
  },
  data() {
    return {
      baseURL: '' as string,
      createdAtString: '' as string,
      updatedAtString: '' as string
    }
  },
  methods: {
  },
  mounted() {
    this.load()
  }
})
</script>

<template>
  <div
    class="flex w-full px-5 bg-gray-50 my-5 divide-y divide-gray-100 rounded shadow dark:bg-gray-900 dark:divide-gray-600">
    <div class="flex-auto">
      <a href="#" class="p-1">
        <h3 class="text-3xl pb-1 font-semibold tracking-tight text-gray-900 dark:text-white">
          {{ name }}
        </h3>
      </a>
      <p class="p-1 text-sm tracking-tight text-gray-900 dark:text-white">{{ createdAtString }}</p>
      <p class="p-1 mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
        {{ updatedAtString }}
      </p>
    </div>
    <div class="flex-none pt-8 justify-center mb-1">
      <editComponent :nameProp=name :idProp=id>

      </editComponent>
      <deleteComponent :idcategory=id>
      </deleteComponent>

    </div>
  </div>
</template>