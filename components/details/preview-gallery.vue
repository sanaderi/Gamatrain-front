<template>
  <div>
    <section class="product-gallery rounded-lg  ">
      <div class="card-carousel">
        <v-row>
          <v-col cols="2" class="pr-0">
            <nuxt-link :to="`${item.link}&state=${help_link_data.state}&section=${help_link_data.section}&base=${help_link_data.base}&course=${help_link_data.course}
                  &lesson=${help_link_data.lesson}`"  v-for="item in items"  class="side-help-icon" >
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs"
                      v-on="on" :class="' icon icong-' + item.icon"/>

                </template>
                <span>{{item.text}}</span>
              </v-tooltip>
            </nuxt-link>
          </v-col>
          <v-col cols="10" class="pl-1" >
            <v-carousel
              :show-arrows="false"
              :hide-delimiters="(images.length>1 ? false : true)"
              v-model="carouselVal"
            >
              <v-carousel-item
                v-for="(image, index) in  images"
                :key="index"
                :src="image"
              />
            </v-carousel>
            <div class="thumbnails" v-if="images.length>1">
              <v-slide-group
                class="pa-4"

                active-class="success"
              >
                <v-slide-item
                  class="mx-2 thumbnail_itm"
                  v-for="(image, index) in  images"

                >
                  <v-img
                    :class="carouselVal==index ? 'active_slide' : ''"
                    @click="changeSlide(index)"
                    :src="image"/>

                </v-slide-item>
              </v-slide-group>

            </div>
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "preview-gallery",
  data() {
    return {
      carouselVal: null,
      images: [],
      help_link_data:{
        state:'',
        section:'',
        base:'',
        course:'',
        lesson:''
      },

      active_img: 1,

      items: [
        { class: "exam", text: "Online Exam", icon: "azmoon",link:"/search?type=azmoon" },
        { class: "test", text: "Exam Paper", icon: "test",link:"/search?type=test" },
        { class: "content", text: "Presentation", icon: "learnfiles" ,link:"/search?type=learnfiles" },
        { class: "faq", text: "Q & A", icon: "qa",link:"/search?type=question" },
        { class: "textbook ", text: "Tutorial", icon: "blog" ,link:"/search?type=dars" },
        { class: "school", text: "School finder", icon: "school" ,link:"/search?type=school" },
        { class: "tutor", text: "Tutor", icon: "teacher" ,link:"/search?type=tutor" },
      ],
    }
  },
  methods: {
    changeSlide(index) {
      this.carouselVal = index;
    },
  }
}
</script>

<style lang="scss" scoped>
.product-gallery {
}


.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
}

.thumbnails .thumbnail_itm {
  max-width: 80px !important;
  max-height: 80px !important;
}

@media screen and (max-width: 600px) {
  .thumbnails {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }

  .thumbnails .thumbnail_itm {
    max-width: 50px !important;
    max-height: 40px !important;
  }
}

.active_slide {
  border: 2px solid #000;
  border-radius: 5px;
}

.side-help-icon{
  padding: 0.6rem;
  display: block;
  max-width: 4rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #F5F5F5;
}

.side-help-icon .icon{
  font-size: 1.5rem;
}
</style>
