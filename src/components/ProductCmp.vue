<template>
    <div>
        <div class="section-product__wrap"
            v-for="(prod, index) in ProductData" :key="index"
        >
            <div class="section-title">
                {{ prod.title }}
            </div>
            <div class="section-content">
                <div class="section-info">
                    <div class="brand-logo">
                        <img :src="`${prod.logoUrl}`" alt="" />
                    </div>
                    <div class="description">
                        {{ prod.description }}
                    </div>
                    <div class="button__wrap">
                        <el-button 
                            link
                            class="arrow-link"
                            @click="handleButtonClick(prod)"
                        >
                            프로젝트 문의
                            <i></i>
                        </el-button>  
                    </div>
                </div>
                <div class="section-img">
                    <img :src="`${prod.images}`" alt="" />
                </div>
                <div class="button__wrap mo-only">
                    <el-button 
                        link
                        class="arrow-link"
                        @click="handleButtonClick(prod)"
                    >
                        프로젝트 문의
                        <i></i>
                    </el-button>  
                </div>                
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
    ProductData: Object
});

const { emit } = defineEmits(['button-click']);

const handleButtonClick = (prod) => {
    emit('button-click', prod);
};

</script>