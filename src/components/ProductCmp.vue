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
                            @click="handleProjectInquiry"
                        /> 
                    </div>
                </div>
                <div class="section-img">
                    <img :src="`${prod.images}`" alt="" />
                </div>
                <div class="button__wrap mo-only">
                    <InquiryButton
                        ButtonName="자세히 보기"
                        @click="handleProjectInquiry"
                    /> 
                </div>                
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import InquiryButton from '@/components/InquiryButtonCmp.vue';

const props = defineProps({
    ProductData: Object,
    className: String
});

const { emit } = defineEmits(['button-click']);

const handleButtonClick = (prod) => {
    emit('button-click', prod);
};
const handleProjectInquiry = () => {
  const contactSection = document.getElementById('contactSection');
  if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>