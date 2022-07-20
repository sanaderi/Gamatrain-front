<template>
 <div>
   <section class="product-gallery rounded-lg  ">
     <div class="card-carousel">
       <v-carousel
         :show-arrows="false"
         v-model="carouselVal"
         >
         <v-carousel-item
           v-for="(image, index) in  images"
           :key="index"
           :src="image"
         />
       </v-carousel>
       <div class="thumbnails">
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
     </div>
   </section>
 </div>
</template>

<script>
export default {
  name: "preview-gallery",
  data(){
    return{
      carouselVal: null,
      images:[
        'https://gama.ir/uploads/thumbs/pdf/47326_fed5769723bf70f3296106a99b121729.png',
        'https://gama.ir/uploads/lessonsPic/lPic_e9d076b6bd2bdea6f16da58513e7f471.jpg'
      ],

      active_img:1,
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


</style>
