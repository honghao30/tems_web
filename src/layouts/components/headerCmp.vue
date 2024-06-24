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
            :class="{ 'is-active': topNavigation, 'moved': topNavigationMoved }"
        >
        <el-sub-menu index="1">
                <template #title>company</template>
                <el-menu-item index="1-1"><el-link :underline="false" href="#about">about</el-link></el-menu-item>
                <el-menu-item index="1-2"><el-link :underline="false" href="#process">process</el-link></el-menu-item>
                <el-menu-item index="1-3"><el-link :underline="false" href="#team">team</el-link></el-menu-item>
                <el-menu-item index="1-4"><el-link :underline="false" href="#partner">partner</el-link></el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2"><el-link :underline="false" href="#workSection">works</el-link></el-menu-item>
            <el-menu-item index="3"><el-link :underline="false" href="#serviceSection">service</el-link></el-menu-item>
            <el-menu-item index="4"><el-link :underline="false" href="#productSection">product</el-link></el-menu-item>
            <el-menu-item index="5" class="box-type">
                <el-link :underline="false" href="#contactSection">contact us</el-link></el-menu-item>                                                
        </el-menu>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const topNavigation = ref(false);
const topNavigationMoved = ref(false);
const openMoGnb = () => {
    if (topNavigation.value) {
        topNavigationMoved.value = false;
        setTimeout(() => {
            topNavigation.value = false;
        }, 100); 
    } else {
        topNavigation.value = true;
        setTimeout(() => {
            topNavigationMoved.value = true;
        }, 100); 
    }
}
const handleSelect = (key, keyPath) => {    
    const sectionId = keyPath[0].split('-').join('section'); // 각 섹션의 ID와 일치하도록 조정
    const section = document.getElementById(sectionId);
    console.log(sectionId)
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
        }, 500);        
    }    
}
</script>