<template>
    <div>
        <div class="section-product__wrap"
            v-for="(prod, index) in ProductData" :key="index"
            :id="prod.sectionId"
            :class="className"
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
                        <InquiryButton
                            ButtonName="자세히 보기"
                            @click="handleProjectInquiry(prod)"
                        /> 
                    </div>
                </div>
                <div class="section-img">
                    <img :src="`${prod.images}`" alt="" />
                </div>
                <div class="button__wrap mo-only">
                    <InquiryButton
                        ButtonName="자세히 보기"
                        @click="handleProjectInquiry(prod)"
                    /> 
                </div>                
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import InquiryButton from '@/components/InquiryButtonCmp.vue';

const props = defineProps({
    ProductData: Object,
    className: String
});


const handleProjectInquiry = (prod) => {
    alert('상품상세?')
};
</script>
