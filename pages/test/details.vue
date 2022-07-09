<template>
  <div class="test-details-content">
    <!--  Start: breadcrumb  -->
    <section>
      <v-container class="py-0">
        <div class="box mt-0 py-0 header-path">
          <breadcrumb :breads="breads"/>
        </div>
      </v-container>
    </section>
    <!--  End: breadcrumb  -->

    <!--  Start: detail  -->
    <section>
      <v-container class="py-0">
        <div class="detail box">
          <v-row>
            <v-col cols="12" md="9">
              <!--  Description   -->
              <div class="d-flex mb-4">
                <div class="detail-image-holder">
                  <nuxt-link to="linkPoster">
                    <img :alt=detail.title :src="require(`~/assets/images/${detail.poster}`)" class="detail-image"/>
                  </nuxt-link>
                </div>
                <div class="w-100">
                  <div class="d-flex align-center justify-space-between header">
                    <h1 class="detail-title">{{ detail.title }}</h1>
                    <div class="rate" dir="ltr">
                      <!--                        <span v-for="(item,index) in detail.rate" :key="index" class="mdi mdi-star detail-rate"></span>-->
                      <span class="mdi mdi-star detail-rate active"></span>
                      <span class="mdi mdi-star detail-rate active"></span>
                      <span class="mdi mdi-star detail-rate active"></span>
                      <span class="mdi mdi-star detail-rate"></span>
                      <span class="mdi mdi-star detail-rate"></span>
                    </div>
                  </div>
                  <div class="label-holder">
                    <nuxt-link v-for="(label, index) in detail.labels"
                               :key="index" class="ml-2 font-weight-bold label"
                               to=""
                    >
                      {{ label }}
                    </nuxt-link>
                  </div>
                  <div class="description-holder">
                    <p> مناسب برای رشته های:</p>
                    <p class="mb-7"> - ادبیات و علوم انسانی</p>
                    <p> مباحث : </p>
                    <p> درس 6: جنگ جهانی اول و ایران</p>
                    <p> درس 7: ایران در دورۀ حكومت رضاشاه</p>
                    <p> درس 8: جنگ جهانی دوم و جهانِ پس از آن</p>
                    <p> درس 9: نهضت ملی شدن صنعت نفت ایران</p>
                    <p> سوالات طراحی شده حاوی ۱۳۰ سوال تستی استاندارد از دروس ششم تا نهم به همراه جواب کلیدی و بر اساس
                      کتاب جدید چاپ ۱۴۰۰ </p>
                  </div>
                </div>
              </div>
              <!--   Download Btn and Description  -->
              <div class="text-center download-sec">
                <div class="d-none d-md-block mb-4">
                  <p>
                    <span class="mdi mdi-bell icon"></span>
                    <span>برای دانلود</span>
                    <span class="register">ثبت نام</span>
                    <span>کنید</span>
                    (<span class="login">وارد شوید</span>)
                    <span>و کیف پول خود را شارژ کنید. </span>
                  </p>
                </div>
                <div class="font-weight-bold answer">
                  <span class="mdi mdi-checkbox-marked icon"></span>
                  <span> پاسخنامه کلیدی در پایان File آزمون قرار دارد. </span>
                </div>
              </div>
              <!--  Download links   -->
              <div class="d-flex align-center justify-center flex-wrap download-links">
                <nuxt-link class="d-inline-flex align-center pdf-download" to="">
                  <span class="d-inline-flex h-100 px-5 py-2 price">4290 تومان</span>
                  <span class="d-inline-flex align-center px-5 py-2">
                        <v-icon class="mdi mdi-file-pdf-box pdf-icon"></v-icon>
                        <span>دانلود File PDF</span>
                      </span>
                </nuxt-link>
                <nuxt-link class="d-flex align-cente word-download" to="">
                  <span class="d-inline-flex h-100 px-5 py-2 price">7010 تومان</span>
                  <span class="d-inline-flex align-center px-5 py-2">
                      <span class="mdi mdi-file-word word-icon"></span>
                      <span>دانلود File WORD</span>
                  </span>
                </nuxt-link>
              </div>
              <!--     suggestRelatedLink   -->
              <div class="d-none d-sm-flex align-center justify-center suggest-related-link">
                <nuxt-link class="" to="">
                  <span class="d-flex justify-center align-center icong-teacher suggest-link-item teacher"></span>
                </nuxt-link>
                <nuxt-link class="mr-1" to="">
                  <span class="d-flex justify-center align-center icong-test suggest-link-item test"></span>
                </nuxt-link>
                <nuxt-link class="mr-1" to="">
                  <span class="d-flex justify-center align-center icong-learnfiles suggest-link-item learnfile"></span>
                </nuxt-link>
                <nuxt-link class="mr-1" to="">
                  <span class="d-flex justify-center align-center icong-qa suggest-link-item question"></span>
                </nuxt-link>
                <nuxt-link class="mr-1" to="">
                  <span class="d-flex justify-center align-center icong-azmoon suggest-link-item azmoon"></span>
                </nuxt-link>
              </div>
              <!--   fileCopyRight  -->
              <div class="d-none d-md-block text-center file-copy-right">
                <p class="">باز نشر 1st Gradeها در فضای مجازی، ممنوع است.</p>
              </div>
            </v-col>
            <v-col md="3">
              <div class="detail-preview-image-holder">
                <img :alt=detail.title :src="require(`~/assets/images/${detail.previewImage}`)"
                     class="detail-preview-image"/>
                <div class="description-preview-holder">
                  <p class="text-center preview-text"> پیش نمایش صفحه اول File </p>
                  <p class="text-center font-weight-bold pdf-page-numbers"> تعداد صفحات File : 17 </p>
                </div>
                <!--   fileCopyRight  -->
                <div class="d-block d-md-none mt-7 text-center file-copy-right">
                  <p class="">باز نشر محتواها در فضای مجازی، ممنوع است.</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- bottom extra info-->
          <div class="d-block d-md-flex d-flex justify-space-between flex-wrap extra-info">
            <div class="d-flex align-center flex-wrap right extra-info-right">
              <nuxt-link class="d-flex align-center owner ml-3" to="">
                <img :src="require(`~/assets/images/teacher1.png`)" alt="" class="ml-1 owner-img">
                <span class="main-content-footer">شمسی شعبانی</span>
              </nuxt-link>
              <div class="d-flex align-center ml-3">
                <i class="fa-solid fa-folder ml-1 icon"></i>
                <span class="main-content-footer"><span class="remove-res">نوع آزمون : </span>سوالات تستی</span>
              </div>
              <div class="d-flex align-center ml-3">
                <i class="fa-solid fa-eye ml-1 icon"></i>
                <span class="main-content-footer"><span class="remove-res"> Viewed :</span> 1895</span>
              </div>
              <div class="d-flex align-center ml-3 update">
                <i class="fa-solid fa-calendar-days ml-1 icon remove-res"></i>
                <span class="main-content-footer remove-res"> بروزرسانی شده در 1400/12/16 </span>
              </div>
            </div>
            <div class="d-flex align-center justify-end left  extra-info-left">
              <div class="d-flex align-center justify-end report-error">
                <i class="fa-solid fa-bullhorn ml-1 icon"></i>
                <span class="modal-error main-content-footer">Crash report File </span>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>
    <!--  End: detail  -->

    <!--  Start: Course Card  -->
    <section>
      <v-container>
        <div class="d-flex justify-space-between align-center course-card box">
          <div class="right">
            <div class="d-flex">
              <nuxt-link to="">
                <img :src="require(`~/assets/images/teacher1.png`)" alt="" class=" rounded-circle avatar-img"/>
              </nuxt-link>
              <div class="description">
                <div>
                  <nuxt-link to="">
                    <h2 class="course-title">پاورپوینت دوره کامل آموزشی، تاریخ (3) دوازدهم دوره دوم متوسطه- نظری</h2>
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link to="" class="teacher">
                    <i class="fa-solid fa-user icon"></i>
                    <span> مدرس: شمسی شعبانی</span>
                  </nuxt-link>
                </div>
                <div>
                  <p class="duration">
                    <i class="fa-solid fa-clock icon"></i>
                    <span>مدت دوره: 942 اسلاید (13 File) </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-sm-block left">
            <nuxt-link to="" class="d-flex justify-center align-center rounded-circle goto">
              <i class="fa-solid fa-arrow-left icon"></i>
            </nuxt-link>
          </div>

        </div>
      </v-container>
    </section>
    <!--  End: Course Card  -->

    <!--  Start:  Azmoon test album card   -->
    <section>
      <v-container>
        <div class="d-flex justify-space-between align-center album-card box">
          <div class="right">
            <div class="d-flex">
              <nuxt-link to="">
                <img :src="require(`~/assets/images/poster1.jpg`)" alt="" class="poster-img"/>
              </nuxt-link>
              <div class="description">
                <div>
                  <nuxt-link to="">
                    <h2 class="course-title">آلبوم بانک تست های Online Exam، تاریخ (3) دوازدهم دوره دوم متوسطه- نظری</h2>
                  </nuxt-link>
                </div>
                <div class="num">
                    <i class="fa-solid fa-list-ol icon"></i>
                    <span>Number of tests: 1399</span>
                </div>
                <div class="level">
                    <i class="fa-solid fa-superscript icon"></i>
                    <span>Difficulty: Easy، متوسط و دشوار  </span>
                </div>
                <div class="d-flex align-center justify-center suggestion">
                    <span class="d-inline-flex align-center icong-teacher ml-1"></span>
                  <span> مخصوص معلمان</span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-sm-block left">
            <nuxt-link to="" class="d-flex justify-center align-center rounded-circle goto">
              <i class="fa-solid fa-arrow-left icon"></i>
            </nuxt-link>
          </div>

        </div>
      </v-container>
    </section>
    <!--  End:  Azmoon test album card   -->

    <!--  Start:  relatedBox  -->
    <section class="related-sec">
      <div class="">
        <v-container>
          <div class="box related-box">
            <div class="sample-test-holder">
              <div class="sample-test-title">
                <nuxt-link to="" class="d-flex align-center ">
                  <span class="d-flex align-center icong-test ml-2 icon"></span>
                  <h3>Related Sample Exams</h3>
                </nuxt-link>
              </div>
              <div class="sample-test-slider-holder">
                <v-sheet
                  class="mx-auto sample-test-slider"
                >
                  <v-slide-group
                    v-model="model"
                    active-class="success"
                    class="pa-4"
                    show-arrows
                  >
                    <v-slide-item
                      v-for="(test,index) in sampleTestList"
                      :key="index"
                      v-slot="{ active, toggle }"
                      class="mx-4"
                      :class="[(test.type === 'azmoon') ? 'azmoon' : '']"
                    >
                      <div class="sample-test-item">
                        <nuxt-link class=" " to="">
                          <div class="position-relative sample-test-image-holder">
                            <p  v-if="(test.type === 'azmoon')" class="label offlabel">Online Exam</p>
                            <img :alt=test.description :src="require(`~/assets/images/${test.img}`)" class="sample-test-image" />
                            <p class="font-weight-bold label page-label">
                              {{test.pages}}
                              <span v-if="(test.type === 'azmoon')"> تست</span>
                              <span v-else> صفحه</span>
                            </p>
                          </div>
                          <div class="sample-test-description">
                            <p class="font-weight-bold description-title">{{ test.description }}</p>
                            <div class="d-flex align-center">
                              <img :src="require(`~/assets/images/${test.ownerImg}`)" class="ml-2 owner-image" alt="">
                              <span class="owner-name"> {{ test.owner }} </span>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>

                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>
              </div>
            </div>
          </div>
        </v-container>
      </div>
      <div>
        <v-container>
          <v-row>
            <v-col v-for="(related, index) in relatedList" :key="index"
                   cols="12" md="6">
              <RelatedCardBox :related="related"></RelatedCardBox>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <!--  End: relatedBox   -->
 <!--  Start:  Last view  -->
    <section class="last-view-sec">
      <v-container>
        <Last-views></Last-views>
      </v-container>
    </section>
    <!--  End: Last view   -->

  </div>
</template>
<script>
import Breadcrumb from "../../components/widgets/breadcrumb";
import LastViews from "@/components/common/last-views";
import RelatedCardBox from "./components/related-card-box"

export default {
  components: {
    Breadcrumb,
    LastViews,
    RelatedCardBox
  },
  data: () => ({
    breads: [
      {
        text: 'Sample Exam',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'دوره دوم متوسطه',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'دوازدهم',
        disabled: false,
        href: 'breadcrumbs_link_2',
      },
      {
        text: 'ادبیات و علوم انسانی',
        disabled: false,
        href: 'breadcrumbs_link_3',
      },
      {
        text: 'تاریخ(3)',
        disabled: true,
        href: 'breadcrumbs_link_4',
      },
    ],
    detail: {
      poster: 'poster1.jpg',
      linkPoster: '',
      title: 'مجموعه 120 سوال تستی درس 6 تا 9 تاریخ (3) دوازدهم ',
      rate: 5,
      previewImage: 'test1.png',
      labels: ['تاریخ(3)', 'دوازدهم', 'دوره دوم متوسطه', 'ادبیات', 'کرمانشاه', 'ناحیه2', 'شهدای پروین', 'فروردین', '1399',]
    },
    model: null,
    sampleTestList: [
      {
        type: 'azmoon',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'تیم مدیریت گاما',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: 'azmoon',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'تیم مدیریت گاما',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: 'azmoon',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'تیم مدیریت گاما',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'مهران زنگنه',
        ownerImg: 'teacher2.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'تیم مدیریت گاما',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'تیم مدیریت گاما',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'تیم مدیریت گاما',
        ownerImg: 'gamaadmin.png',
      },
      {
        type: '',
        img: 'test2.png',
        description: 'مجموعه تست‌های دوره کتاب تاریخ دوازدهم | درس 1 تا 12',
        pages: '222',
        owner: 'تیم مدیریت گاما',
        ownerImg: 'gamaadmin.png',
      },
    ],
    relatedList: [
      {
        class: 'learning',
        header: 'محتواهای آموزشی مرتبط',
        icon: 'learnfiles',
        description: ' File های پاورپوینت، ویدئو، صوتی، متنی و ...',
        contentItemList: [
          {
            title: 'تدریس آنلاین صفحه 53 تا 58 عربی (3) انسانی دوازدهم | درس 4: نِظامُ الطَّبيعَةِ ',
            link: ''
          },
          {
            title: 'جزوه و Sample Examات تشریحی و تستی درس 7 فلسفه دوازدهم | عقل در فلسفه (1) ِ ',
            link: ''
          },
          {
            title: 'تدریس آنلاین صفحه 1 تا 8 عربی (3) انسانی دوازدهم | درس 1: ترجمه ِ ',
            link: ''
          },
        ],
      },
      {
        class: 'question',
        header: 'Related Q&As',
        icon: 'qa',
        description: "Ask questions or answer other people's questions...",
        contentItemList: [
          {
            title: 'تدریس آنلاین صفحه 53 تا 58 عربی (3) انسانی دوازدهم | درس 4: نِظامُ الطَّبيعَةِ ',
            link: ''
          },
          {
            title: 'جزوه و Sample Examات تشریحی و تستی درس 7 فلسفه دوازدهم | عقل در فلسفه (1) ِ ',
            link: ''
          },
          {
            title: 'تدریس آنلاین صفحه 1 تا 8 عربی (3) انسانی دوازدهم | درس 1: ترجمه ِ ',
            link: ''
          },
        ],
      },
      {
        class: 'blog',
        header: 'درسنامه های مرتبط',
        icon: 'blog',
        contentItemList: [
          {
            title: 'تدریس آنلاین صفحه 53 تا 58 عربی (3) انسانی دوازدهم | درس 4: نِظامُ الطَّبيعَةِ ',
            link: ''
          },
          {
            title: 'جزوه و Sample Examات تشریحی و تستی درس 7 فلسفه دوازدهم | عقل در فلسفه (1) ِ ',
            link: ''
          },
          {
            title: 'تدریس آنلاین صفحه 1 تا 8 عربی (3) انسانی دوازدهم | درس 1: ترجمه ِ ',
            link: ''
          },
        ],
      },
      {
        class: 'azmoon',
        header: 'آزمون های آنلاین مرتبط',
        icon: 'azmoon',
        contentItemList: [
          {
            title: 'تدریس آنلاین صفحه 53 تا 58 عربی (3) انسانی دوازدهم | درس 4: نِظامُ الطَّبيعَةِ ',
            link: ''
          },
          {
            title: 'جزوه و Sample Examات تشریحی و تستی درس 7 فلسفه دوازدهم | عقل در فلسفه (1) ِ ',
            link: ''
          },
          {
            title: 'تدریس آنلاین صفحه 1 تا 8 عربی (3) انسانی دوازدهم | درس 1: ترجمه ِ ',
            link: ''
          },
        ],
      },
    ],
  }),
}
</script>
