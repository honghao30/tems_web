<template>
    <div>
        <div class="process__container"
            v-for="step in Process"
            :key="step"
        >
            <div class="tit">{{ step.title }}</div>
            <div class="process-list__wrap">
                <ol class="process-list"
                    :class="step.customClass"
                >
                    <li v-for="stepList in step.step" :key="stepList"
                        :class="stepList.direction"
                    >
                        {{ stepList.name }}
                    </li>
                </ol>
                <div class="description">
                    {{ step.description }}
                </div>
            </div>
        </div>        
    </div>
</template>

<script setup>
const props = defineProps({
    Process: Object
});

</script>
