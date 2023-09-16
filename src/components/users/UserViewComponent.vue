<script lang="ts">
import axios from '../../plugins/axios'
import { defineComponent } from "vue";
import { UserViewModels } from '../../viewmodels/UserViewModels'
import { formatDate } from '../../helpers/DataHelper'
import ThemeSwitcher from '../common/ThemeSwitcher.vue';
export default defineComponent({
    components: {},
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        phoneNumber: String,
        phoneNuberConfirme: Boolean,
        region: String,
        district: String,
        address: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
        return {
            baseURL: "" as String,
            phoneNumber: "" as String,
            region: "" as String,
            firstName: "" as String,
            createdAt: "" as String,
            updatedAt: "" as String
        }
    },
    methods: {
        async load() {
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
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text align-middle text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ this.firstName }}
                        </th>
                        <td class="w-32 px-6 py-4">
                            {{ this.lastName }}
                        </td>
                        <td class="w-32 px-6 py-4">
                            {{ this.phoneNumber }}
                        </td>
                        <td class="w-32 px-6 py-4">
                            {{ this.region }}
                        </td>
                        <td class="w-32 px-6 py-4">
                            <router-link :to="`users/${this.id}`"
                                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mx-2 mt-2 mb-3">{{
                                    $t('koproq malumot') }}
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>