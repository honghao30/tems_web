<template>
    <div>
        <ul class="work-list__wrap">
            <li v-for="Work in Works" :key="Work">
                <a href="#" @click="showDetail(Work)">
                    <div class="port-thumb">
                        <img :src="`${Work.thumbnail}`" alt="" />
                    </div>
                    <div class="info">
                        <div class="project-name">
                            {{ Work.projectName }}
                        </div>
                        <div class="project-link">
                            {{ Work.type }}
                        </div>
                    </div>
                </a>
            </li>
            <li class="more-link"
                v-if="moreButton"
            >
                <el-button text @click="openModal">
                    <el-icon>
                        <img src="../assets/images/common/icon_plus.svg" alt=""/>
                    </el-icon>
                    MORE PROJECT
                </el-button>
            </li>
        </ul>                  
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    Works: Object,
    dialogVisible: Boolean,
    moreButton: Boolean
}); 

// Define the events this component will emit
const emits = defineEmits(['showDetail', 'openModal']);

const showDetail = (Work) => {
    emits('showDetail', Work);
}

const openModal = () => {
    emits('openModal');
}

</script>