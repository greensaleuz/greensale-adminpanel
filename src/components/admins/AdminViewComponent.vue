<script lang="ts">
import axios from '../../plugins/axios'
import { defineComponent } from "vue";
import { formatDate } from '../../helpers/DataHelper'


export default defineComponent({
    components:{},
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        phoneNumber: String,
        phoneNumberConfirme: Boolean,
        region: String,
        district: String,
        address: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
      return{
        baseURL: "" as String,
        phoneNumber: "" as String,
        region: "" as String,
        firstName: "" as String,
        createdAt: "" as String,
        updatedAt: "" as String
      }
    },
    methods: {
      load(){
        this.baseURL = axios.defaults.baseURL!;
        this.createdAtS = formatDate(this.createdAt!);
        this.updatedAtS = formatDate(this.updatedAt!);
      },
    },
    mounted() {
        this.load();
    }
});
</script>
<template>
<div class="flex-wrap">
    
    <div  class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text align-middle text-gray-500 dark:text-gray-400">
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {{ firstName }}
                    </th>
                    <td class="w-48 px-6 py-4">
                        {{ lastName }}
                    </td>
                    <td class="w-32 px-6 py-4">
                        {{ phoneNumber }}
                    </td>
                    <td class="w-32 px-6 py-4">
                        {{ region }}
                    </td>
                    <td class="w-32 px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> {{ $t('koproq_malumot')}} </a>
                    </td>
                </tr>
    
            </tbody>
        </table>
    </div>
    
    </div>
</template>