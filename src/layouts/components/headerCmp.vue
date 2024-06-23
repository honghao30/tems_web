<template>
    <div class="header__wrap">
        <div class="header__logo">
            <img src="@/assets/images/common/logo.svg" class="pc_img" alt="">
            <img src="@/assets/images/common/logo_m.svg" class="mo_img" alt="">
        </div>
        <el-button type="default"
            class="hamburger_button"
            @click="openMoGnb"
            :class="{ 'is-active': topNavigation }"
        >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </el-button>
        <el-menu
            :default-active="activeIndex"
            class="header__menu"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"       
            :class="{ 'is-active': topNavigation }"   
        >
            <el-sub-menu index="1">
                <template #title>company</template>
                <el-menu-item index="1-1"><el-link :underline="false" :href="'#'">about</el-link></el-menu-item>
                <el-menu-item index="1-2"><el-link :underline="false" :href="'#'">process</el-link></el-menu-item>
                <el-menu-item index="1-3"><el-link :underline="false" :href="'#'">team</el-link></el-menu-item>
                <el-menu-item index="1-4"><el-link :underline="false" :href="'#'">partner</el-link></el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2"><el-link :underline="false" :href="'#'">works</el-link></el-menu-item>
            <el-menu-item index="3"><el-link :underline="false" :href="'#'">service</el-link></el-menu-item>
            <el-menu-item index="4"><el-link :underline="false" :href="'#'">product</el-link></el-menu-item>
            <el-menu-item index="5" class="box-type"><el-link :underline="false" :href="'#'">contact us</el-link></el-menu-item>                                                
        </el-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// const activeIndex = ref('1')
// const activeIndex2 = ref('1')
const topNavigation = ref(false);
const openMoGnb = () => {
    topNavigation.value = !topNavigation.value;
}
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>