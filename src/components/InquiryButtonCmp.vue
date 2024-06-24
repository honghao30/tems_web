<template>
    <el-button 
        link
        class="arrow-link"
        @click="handleClick"
    >
        {{ ButtonName }}
        <i></i>
    </el-button> 
</template>

<script setup>
import { defineEmits } from 'vue';
const props = defineProps({
    ButtonName: String
});
const emit = defineEmits(['click']);
const handleClick = () => {    
    emit('click');
};
</script>