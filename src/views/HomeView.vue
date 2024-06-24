<template>
  <div class="main-content__wrap">
      <div class="main-visual">
          <div class="main-visual__inner">
            <div class="main-text">
              템스는 각 분야의 전문가들로<br>
              구성된 전문 개발 그룹으로, 다양한 기술을<br>
              기반한 아이디어로 가치를 구현합니다
            </div>
            <div class="main-btn">
                <InquiryButton
                  ButtonName="프로젝트 상담"
                  @click="handleProjectInquiry"
                /> 
            </div>
            <img src="../assets/images/common/img_visual_top01.svg" class="bg__images_img_large" alt="" />
            <img src="../assets/images/common/img_visual_top02.svg" class="bg__images_img_img_sm" alt="" />            
          </div>
      </div>
      <!-- //비주얼 -->
      <div class="main-content">
        <div class="section-temps__wrap slideup" id="about">
          <div class="section-title-text">
              Creative <br>
              Development Group <br>
              temps 
          </div>
          <div class="section-description">
            우리는 다양한 제품 및 소프트웨어를 설계/개발하며 축적된 <br>
            기술 노하우를 바탕으로 <strong>제품 개발을 위한 최적의 아이디어를 <br>
            제공하는 전문 개발 회사</strong>입니다.
          </div>
        </div>
        <!-- //abou team -->
        <OurBizCmp
          :BizList="OurBiz"
          className="slideup"
          @Work-Button="HandleInquiry"
        />
        <!-- process -->
        <div class="section-process__wrap slideup" id="process">
            <div class="section-title-text">
              temps<br>
              working process
            </div>
            <div class="section-description">
              템스는 <strong>최상의 결과</strong>를 목표로 하는 <strong>최선의 <br>
프로세스</strong>를 가지고 있습니다.
                <!-- //process -->
                <div class="process__wrap">
                    <ProcessCmp
                      :Process="ProcessType1"
                    />                   
                </div>

            </div>
        </div>
        <!-- Our Team -->
        <div class="section-team__wrap slideup" id="team"> 
            <div class="tit">
                OUR TEAM
            </div>
            <div class="description">
              우리는 제품 개발, 설계, 서버 및 어플리케이션 개발, UI/UX 디자인, 서비스 기획 등 IT 서비스 및 제품 개발과 양산을 위한 각 분야의 <br>
전문가들이 모여 최상의 결과물을 위해 함께 고민합니다.
            </div>
            <div class="image-box">
              <img src="../assets/images/common/image_team.png" alt="" />
            </div>
            <TeamMemberCmp
                :MemberList="MemberList"
            />            
        </div>
        <!-- partner -->
        <PartnersCmp />
        <!-- work -->
        <div class="section-work__wrap slideup" id="workSection">
            <div class="section-title-text">
              temps<br>
              works
            </div>
            <WorkList
              :Works="WorkListData"
              :dialogVisible="dialogWorkModal"               
              @showDetail="handleShowDetail" 
              @openModal="OpenListModal"
              :moreButton="true"
            />            
        </div>
        <!-- product -->
        <ProductCmp
          :ProductData="ProductData"
          className="slideup"
          @click="handleProdButtonClick(event)"          
        />
        <!-- contact -->
        <ContactCmp />
      </div>
      <FooterCmp />    
      <el-backtop :right="50" :bottom="50" />
      <!-- //리스트 모달 -->
      <el-dialog
          v-model="dialogWorkModal" 
          :show-close="false"
          class="portfolio-dialog"
      >
        <template #header="{ close }">
            <div class="modal-header">            
                <el-button type="info" @click="close">
                    <el-icon><Close /></el-icon>                
                </el-button>
            </div>
        </template>        
        <div class="port-content__wrap">
          <el-tabs v-model="activeName" class="workList-tabs" @tab-click="handleTabClick">
            <el-tab-pane label="All" name="first">
              <WorkList
                  :Works="WorkListData"
                  :dialogVisible="dialogWorkDetailModal"               
                  @showDetail="handleShowDetail" 
                  @openModal="OpenListModal"
                  :moreButton="false"
              />               
            </el-tab-pane>
            <el-tab-pane label="App & Website" name="second">
              <WorkList
                  :Works="WorkListData"
                  :dialogVisible="dialogWorkDetailModal"               
                  @showDetail="handleShowDetail" 
                  @openModal="OpenListModal"
                  :moreButton="false"
              />               
            </el-tab-pane>
            <el-tab-pane label="Product Development" name="third">
              <WorkList
                  :Works="WorkListData"
                  :dialogVisible="dialogWorkDetailModal"               
                  @showDetail="handleShowDetail" 
                  @openModal="OpenListModal"
                  :moreButton="false"
              />               
            </el-tab-pane>            
          </el-tabs>          
        </div>
      </el-dialog>        
      <!-- //상세 모달 -->
      <el-dialog
          v-model="dialogWorkDetailModal" 
          :show-close="false"
          class="portfolio-dialog"
      >
        <template #header="{ close }">
            <div class="modal-header">     
                <el-button type="default" class="btn-back" @click="goBack">
                  <el-icon><Back /></el-icon>              
                </el-button>                     
                <el-button type="info" @click="close">
                    <el-icon><Close /></el-icon>                
                </el-button>
                <div class="detail-top__banner">
                  <div class="tit">Baily</div>
                  <div class="description">mobile application</div>
                </div>
            </div>
        </template>        
        <div class="port-content__wrap">
            <div class="port-info-top">
              <div class="client-info">
                  <p class="tit">Client</p>
                  <p class="text">Baily</p>
              </div>
              <div class="develop-info">
                  <p class="tit">Project Scope</p>
                  <p class="text">서비스 기획</p>
                  <p class="text">UI/UX 디자인</p>
                  <p class="text">BX 디자인</p>
                  <p class="text">Application 개발</p>
                  <p class="text">Server 개발</p>

                  <p class="tit">Team</p>
                  <p class="text">Strategy Team</p>        
                  <p class="text">Design Team</p>        
                  <p class="text">Development Team</p>                  
              </div> 
              <div class="project-info">
                  <p class="tit">Baily 프로젝트</p>
                  <p class="text">Baily App은 감각적인 디자인, 손쉬운 사용성을 기반으로 육아에 필요한 핵심 기능으로 구성된 육아 일지 전문 
모바일 애플리케이션 입니다.</p>                 
              </div>                            
            </div>
            <div class="port-images">
              <p>
                <img src="/temp/temp_port01.png" alt="" />
              </p>
              <p>
                <img src="/temp/temp_port02.png" alt="" />
              </p>
            </div>
        </div>
      </el-dialog>         
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import InquiryButton from '@/components/InquiryButtonCmp.vue';
import OurBizCmp from '@/components/OurBizCmp.vue';
import ProcessCmp from '@/components/ProcessCmp.vue';
import TeamMemberCmp from '@/components/TeamMemberCmp.vue';
import PartnersCmp from '@/components/PartnersCmp.vue';
import WorkList from '@/components/WorkListCmp.vue';
import ProductCmp from '@/components/ProductCmp.vue';
import ContactCmp from '@/components/ContactCmp.vue';
import FooterCmp from '@/components/FooterCmp.vue';


const OurBiz = [
  {
    "title": "App 및 서비스 개발", 
    "description": "서비스 기획에서 부터 UI/UX디자인, 서버개발을 포함한 모든 개발을 지원해 고객의 생각을 현실화 시킬수 있는 전문 개발팀을 보유하고 있습니다.",
  },
  {
    "title": "제품 개발", 
    "description": "서비스 기획에서 부터 UI/UX디자인, 서버개발을 포함한 모든 개발을 지원해 고객의 생각을 현실화 시킬수 있는 전문 개발팀을 보유하고 있습니다.",
  },
  {
    "title": "금형 및 양산", 
    "description": "서비스 기획에서 부터 UI/UX디자인, 서버개발을 포함한 모든 개발을 지원해 고객의 생각을 현실화 시킬수 있는 전문 개발팀을 보유하고 있습니다.",
  } 
]

const ProcessType1 = [
  {    
    "title": "SOFTWARE DEVELOPMENT",
    "customClass": "type1",
    "step": [
      {
        "name": "기획",
        "direction": "arrow-direction-right"
      },
      {
        "name": "컨설팅",
        "direction": "arrow-direction-right"
      },
      {
        "name": "개발 착수",
        "direction": "arrow-direction-right"
      },
      {
        "name": "UX/UI 디자인",
        "direction": "arrow-direction-down-round"
      },
      {
        "name": "시스템 설계",
        "direction": "arrow-direction-left"
      },
      {
        "name": "개발",
        "direction": "arrow-direction-left"
      },
      {
        "name": "상용화",
        "direction": ""
      } 
    ],
    "description": "우리는 다수의 모바일 애플리케이션 및 웹사이트 등의 프로젝트 경험을 통해 최적의 개발 프로세스를 보유하고 이를 기반으로 최상의 결과물을 제작합니다.",
  },
  {    
    "title": "PRODUCT DEVELOPMENT",
    "customClass": "type2",
    "step": [
      {
        "name": "제품의뢰",
        "direction": "arrow-direction-right"
      },
      {
        "name": "컨설팅",
        "direction": "arrow-direction-right"
      },
      {
        "name": "제품기획",
        "direction": "arrow-direction-right"
      },
      {
        "name": "디자인",
        "direction": "arrow-direction-down"
      },
      {
        "name": "개발",
        "direction": ""
      },
      {
        "name": "개발 검증",
        "direction": "arrow-direction-left"
      },      
      {
        "name": "초도 생산",
        "direction": "arrow-direction-left"
      },
      {
        "name": "양산진행",
        "direction": ""
      }       
    ],
    "description": "다년간의 제품 설계 및 양산 경험으로 제품 의뢰 시 제품에 대한 컨설팅에서 부터 양산까지의 프로세스로 고객의 아이디어를 실현시킵니다.",
  }  
]

const MemberList = [
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  },
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  },
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  },
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  },
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  },
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  },
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  },
  {
    "photo": "https://wimg.mk.co.kr/news/cms/202309/19/news-p.v1.20230919.cf41ade36c3842c081912e8c23d43b5f_P1.jpg",
    "name": "김민규",
    "roll": "CEO",
    "email": "jjh@temp-studio.com",
  } 

]

const WorkListData = [
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name1",
    "type": "web site",
  },
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name2",
    "type": "web site",
  },
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name3",
    "type": "web site",
  },
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name4",
    "type": "web site",
  },
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name5",
    "type": "web site",
  },
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name6",
    "type": "web site",
  },
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name7",
    "type": "web site",
  },
  {
    "thumbnail": "/temp/port.png",
    "projectName": "project name8",
    "type": "web site",
  }
]

const ProductData = [
  {
    "sectionId": "serviceSection",
    "title": "OUR SERVICE", 
    "logoUrl": "/images/common/brand_logo1.svg",
    "description": "베일리는 육아의 어려움과 경력 단절의 문제점을 고민하고 언제 어디서든 아이와 함께 할 수 있는 서비스로 아이의 공동양육을 지원하는 육아 일기 서비스입니다",
    "images": "/temp/product01.png"
  },
  {
    "sectionId": "productSection",
    "title": "OUR PRODUCT", 
    "logoUrl": "/images/common/brand_logo2.svg",
    "description":"베일리 팟은 신생아 수유에 대한 중요성과 어려움을 알고 보다 편한 수유와 수유가이드 및 기록을 위한 베이비 IoT 제품 입니다.",
    "images": "/temp/product02.png"
  }
]

const activeName = ref('first')

const handleTabClick = (tab, event) => {
  console.log(tab, event)
}

const dialogWorkModal = ref(false);
const dialogWorkDetailModal = ref(false);
const selectedWork = ref(null);

const handleShowDetail = (Work) => {
  dialogWorkModal.value = false;  
  console.log('Show detail for:', Work);
  selectedWork.value = Work;
  dialogWorkDetailModal.value = true;  
}

const OpenListModal = () => {
  dialogWorkModal.value = true;  
}

const goBack = () => {
  dialogWorkDetailModal.value = false;  
  dialogWorkModal.value = true;
}

const HandleInquiry = ({ Biz, index }) => {
  console.log(index)
}

const handleProdButtonClick = (event) => {
  event.preventDefault();
  console.log("handleProdButtonClick");
  dialogWorkDetailModal.value = true;  
}

const handleProjectInquiry = () => {
  const contactSection = document.getElementById('contactSection');
  if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 스크롤 애니메이션
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 스크롤 이벤트 핸들러 함수
const handleScroll = () => {
  let obj = document.querySelectorAll('.slideup');
  let height = window.innerHeight;

  obj.forEach(section => {
    let { top, bottom } = section.getBoundingClientRect();
    let isInViewport = top < height && bottom > 0;

    if (isInViewport) {
      section.classList.add('slideInUp');
    }
  });
};
</script>