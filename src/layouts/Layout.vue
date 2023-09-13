<script setup lang="ts">
import Header from "../components/common/Header.vue"
import Sidebar from "../components/common/Sidebar.vue"
import Footer from "../components/common/Footer.vue"
import { RouterView } from "vue-router";
</script>

<template>
    <Header></Header>
    <Sidebar></Sidebar>

    <div class="p-4 sm:ml-64">
        <div class="p-4 mt-14">
            <RouterView></RouterView>
            <Footer></Footer>
        </div>
    </div>
</template>
