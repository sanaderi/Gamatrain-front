<template>
  <div class="test-details-content">
    <!--  Start: breadcrumb  -->
    <section>
      <v-container>
        <div>
          <breadcrumb :breads="breads"/>
        </div>
      </v-container>
    </section>
    <!--  End: breadcrumb  -->

    <!--  Start: detail  -->
    <section>
      <v-container>
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
                  <span> پاسخنامه کلیدی در پایان فایل آزمون قرار دارد. </span>
                </div>
              </div>
              <!--  Download links   -->
              <div class="d-flex align-center justify-center flex-wrap download-links">
                <nuxt-link class="d-inline-flex align-center pdf-download" to="">
                  <span class="d-inline-flex h-100 px-5 py-2 price">4290 تومان</span>
                  <span class="d-inline-flex align-center px-5 py-2">
                        <v-icon class="mdi mdi-file-pdf-box pdf-icon"></v-icon>
                        <span>دانلود فایل PDF</span>
                      </span>
                </nuxt-link>
                <nuxt-link class="d-flex align-cente word-download" to="">
                  <span class="d-inline-flex h-100 px-5 py-2 price">7010 تومان</span>
                  <span class="d-inline-flex align-center px-5 py-2">
                      <span class="mdi mdi-file-word word-icon"></span>
                      <span>دانلود فایل WORD</span>
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
                <p class="">باز نشر محتواها در فضای مجازی، ممنوع است.</p>
              </div>
            </v-col>
            <v-col md="3">
              <div class="detail-preview-image-holder">
                <img :alt=detail.title :src="require(`~/assets/images/${detail.previewImage}`)"
                     class="detail-preview-image"/>
                <div class="description-preview-holder">
                  <p class="text-center preview-text"> پیش نمایش صفحه اول فایل </p>
                  <p class="text-center font-weight-bold pdf-page-numbers"> تعداد صفحات فایل : 17 </p>
                </div>
                <!--   fileCopyRight  -->
                <div class="d-block d-md-none mt-7 text-center file-copy-right">
                  <p class="">باز نشر محتواها در فضای مجازی، ممنوع است.</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- bottom extra info-->
          <div class="d-block d-md-flex justify-space-between flex-wrap extra-info">
            <div class="d-flex align-center flex-wrap right">
              <nuxt-link class="d-flex align-center owner ml-3" to="">
                <img :src="require(`~/assets/images/teacher1.png`)" alt="" class="ml-1 owner-img">
                <span class="">شمسی شعبانی</span>
              </nuxt-link>
              <div class="d-flex align-center ml-3">
                <i class="fa-solid fa-folder ml-1 icon"></i>
                <span>نوع آزمون : سوالات تستی</span>
              </div>
              <div class="d-flex align-center ml-3">
                <span class="d-flex align-center ml-1 mdi mdi-eye "></span>
                <i class="fa-solid fa-eye ml-1 icon"></i>
                <span> بازدید : 1767 </span>
              </div>
              <div class="d-flex align-center ml-3 update">
                <i class="fa-solid fa-calendar-days ml-1 icon"></i>
                <span> بروزرسانی شده در 1400/12/16 </span>
              </div>
            </div>
            <div class="d-flex align-center justify-end left">
              <div class="d-flex align-center justify-end report-error">
                <i class="fa-solid fa-bullhorn ml-1 icon"></i>
                <span class="modal-error">گزارش خرابی فایل </span>
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
        <div class="d-flex justify-space-between course-card box">
          <div class="right">
            <div class="d-flex">
              <img :src="require(`~/assets/images/teacher1.png`)" alt="" class="ml-1 rounded-circle avatar-img" />
              <div class="description">
                <h2 class="course-title"></h2>
              </div>
            </div>
          </div>
          <div class="d-none d-sm-block left">
vb
          </div>

        </div>
      </v-container>
    </section>
    <!--  End: Course Card  -->
  </div>
</template>
<script>
import Breadcrumb from "../../components/widgets/breadcrumb";

export default {
  components: {Breadcrumb},
  data: () => ({
    breads: [
      {
        text: 'نمونه سوال',
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
    }
  }),
}
</script>
