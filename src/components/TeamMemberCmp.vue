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
            <el-button 
            link
            class="arrow-link"
            >
            프로젝트 문의
            <i></i>
            </el-button>  
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    MemberList: Object
});
</script>
