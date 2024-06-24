<template>
    <div class="section-biz__wrap">
        <div class="biz-list__wrap">
            <el-card shadow="never"
                v-for="(Biz, index) in BizList"
                :key="index"
            >
                <template #header>
                <div class="card-header">
                    <span>{{ Biz.title }}</span>
                </div>
                </template>
                <div class="card-content">
                    {{ Biz.description }}
                </div>              
                <template #footer>
                    <el-button plain @click="handleButtonClick(Biz, index)">view works</el-button>
                </template>
            </el-card>                     
        </div>
        <div class="bg_img">
            <img src="../assets/images/common/bg_section02.svg" class="pc_img" alt="" />
            <img src="../assets/images/common/bg_section02_mo.svg" class="mo_img" alt="" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    BizList: Object
});

const emit = defineEmits(['Work-Button']);

const handleButtonClick = (Biz, index) => {
    emit('Work-Button', { Biz, index });
};
</script>
