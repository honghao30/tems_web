<template>
    <ul class="team-member__list">
        <li v-for="team in MemberList" :key="team">
            <el-avatar :src="team.photo" />
            <div class="info">
            <div class="name">
                {{ team.name }}
            </div>
            <div class="position">
                {{ team.roll }}
            </div>
            <div class="email">
                {{ team.email }}
            </div>
            </div>
        </li>
        <li>
            <InquiryButton
                ButtonName="입사지원 하기"
                @click="handleApplication"
            /> 
        </li>
    </ul>
</template>

<script setup>
import InquiryButton from '@/components/InquiryButtonCmp.vue';
const props = defineProps({
    MemberList: Object
});
const handleApplication = () => {
    alert("입사지원 하셨습니다.");
}
</script>
