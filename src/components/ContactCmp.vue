<template>
    <div class="section-contact__wrap slideup"
        id="contactSection"
    >
        <div class="section-title">
            <p>CONTACT US</p>
        </div>
        <div class="section-content">
            <dl class="contact-info">
            <dt>Location</dt>
                <dd>
                    용인시 기흥구 서천로 201번길 이너매스허브시티 <br>
                    4층 425, 426, 415 호
                </dd>
                <dt>Phone</dt>
                <dd>
                    070-8620-1965
                </dd> 
                <dt>Fax</dt>
                <dd>
                    070-8620-1965
                </dd>                            
            </dl>
            <div class="contact-form__wrap">
                <el-form
                ref="ruleFormRef"
                style="max-width: 100%"
                :model="ruleForm"
                :rules="rules"                            
                :size="formSize" 
                @submit.native.prevent               
                >
                    <el-form-item label="Your name" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="이름을 입력하세요." />
                    </el-form-item>
                    <el-form-item label="Your email" prop="email">
                        <el-input v-model="ruleForm.email"  placeholder="이메일을 입력하세요." />
                    </el-form-item>                
                    <el-form-item label="Your message" prop="desc">
                        <el-input v-model="ruleForm.desc" type="textarea"  placeholder="문의 또는 의뢰 내용을 입력하세요."  />
                    </el-form-item>
                    <el-form-item>
                        <InquiryButton
                            ButtonName="문의 하기"
                            :disabled="!isFormValid"
                            @click="onSubmit"
                        />                  
                    </el-form-item>
                </el-form>
            </div>
        </div>
      <!-- //모달 -->
        <el-dialog
            v-model="dialogVisible" 
            :show-close="false"
            class="contact-dialog"
        >
        <template #header="{ close, titleId, titleClass }">
            <div class="modal-header">
                <h4 :id="titleId" :class="titleClass">문의 내용이 전달되었습니다.</h4>
                <el-button type="info" @click="close">
                    <el-icon><Close /></el-icon>                
                </el-button>
            </div>
        </template>        
            <div class="modal-msg">내용 확인 후 신속히 연락드리겠습니다.</div>
            <template #footer>
                <div class="dialog-footer">                
                    <el-button type="info" @click="handleSendFrom">
                        확인
                    </el-button>
                </div>
            </template>
        </el-dialog>          
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import InquiryButton from '@/components/InquiryButtonCmp.vue';
const formSize = ref('default')
const ruleForm = reactive({
    name: '',
    email: '',
    desc: '',
})

const rules = reactive({
    name: [
        { required: true, message: 'Please input you name', trigger: 'blur' },
        { min: 3, max: 15, message: '이름은 2자 이상 입력해야 합니다.', trigger: 'blur' },
    ],
    email: [
        { required: true, message: 'Please input email form', trigger: 'blur' },
    ],  
    desc: [
        { required: true, message: 'Please input message', trigger: 'blur' },
    ],
})
const isFormValid = computed(() => {
    return ruleForm.name.length > 0 &&
    ruleForm.email.length > 0 &&
    ruleForm.desc.length > 0;
});


const dialogVisible = ref(false)

const onSubmit = async () => {
    try {        
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(JSON.stringify(ruleForm));
        dialogVisible.value = true;
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

const handleClose = () => {  
    dialogVisible.value = false
}
const handleSendFrom = () => {        
    dialogVisible.value = false
}
</script>