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
            <v-col  md="9" cols="12">
                <div class="d-flex">
                  <div class="detail-image-holder">
                    <nuxt-link to="linkPoster">
                      <img :alt=detail.title :src="require(`~/assets/images/${detail.poster}`)" class="detail-image" />
                    </nuxt-link>
                  </div>
                  <div class="w-100">
                    <div class="d-flex align-center justify-space-between header">
                      <h1 class="detail-title">{{detail.title}}</h1>
                      <div class="rate" >
                        <span v-for="(item,index) in detail.rate" :key="index" class="mdi mdi-star detail-rate"></span>
                      </div>
                    </div>
                    <div class="label-holder">
                      <nuxt-link to=""
                        v-for="(label, index) in detail.labels" :key="index"
                        class="ml-2 label"
                      >
                        {{label}}
                      </nuxt-link>
                    </div>
                  </div>
                </div>
            </v-col>
            <v-col md="3">
              <div class="detail-preview-image-holder">
                <img :alt=detail.title :src="require(`~/assets/images/${detail.previewImage}`)" class="detail-preview-image" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
    <!--  End: detail  -->
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
      labels: ['تاریخ(3)', 'دوازدهم', 'دوره دوم متوسطه','ادبیات', 'کرمانشاه', 'ناحیه2','شهدای پروین', 'فروردین', '1399',]
    }
  }),
}
</script>
