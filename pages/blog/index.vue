<template>
    <v-container id="blog-list-page">
      <!-- Featued blog section -->
      <v-row class="d-none d-md-flex" id="desktop-featured-blog">
         <v-col cols="9" id="preview-section">
            <v-skeleton-loader v-if="isLoading" class="mx-auto slide-loading" type="image"></v-skeleton-loader>
            <v-card v-else-if="featuredItems[0]" flat :to="`/blog/${featuredItems[slideIndex].id}/${$slugGenerator.convert(featuredItems[0].title)}`" class="ma-1">
              
                  <v-card  
                  >
                     <v-img :class="activeSlide ? 'active-img' : ''"  :src="featuredItems[slideIndex].pic" />
                     <v-card-title>
                                              <span class="gama-text-h6" >
                                               {{ featuredItems[slideIndex].title }}
                                       </span>
                                              
                      </v-card-title>
  
                </v-card>
  
           </v-card>
         </v-col>
         <v-col cols="3" id="list-section">
          <h2 class="gama-text-button">
            Featured Post
          </h2>
          <div v-if="isLoading">
            <v-row class="featured-item" v-for="i in 5">
            <div class="d-flex">
              <div>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </div>
              <div class="text-loader-section">
                <v-skeleton-loader
                  type="card-heading"
                ></v-skeleton-loader>
              </div>
            </div>
           </v-row>
          </div>
          <div v-else v-for="(item, n) in featuredItems.slice(0,5)" :key="n" class="featured-item">
            <nuxt-link :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`">
              <v-img  :src="item.pic" />
            </nuxt-link>
  
              <div class="item-text">
                <nuxt-link :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`">
                <h2 class="gama-text-caption">{{ item.title }}</h2>
              </nuxt-link>
  
              </div>
            </div>
         
         </v-col>
        
      </v-row>
      <div class="d-block d-md-none" id="featured-blog">
        <v-row>
                      <v-col cols="12">
                          <v-slide-group v-model="featureVal" class="slider py-sm-4" :show-arrows="$vuetify.breakpoint.lgAndUp">
                              <div class="d-flex" v-if="isLoading">
                                  <v-slide-item v-for="i in 10" :key="i">
                                      <v-skeleton-loader class="mx-auto slide-loading" type="image"></v-skeleton-loader>
                                  </v-slide-item>
                              </div>
  
  
                              <v-slide-item v-else v-for="(item, n) in featuredItems" :key="n">
                                  <v-card flat :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`" class="ma-1">
                                      <v-card 
                                          >
                                          <v-img :src="item.pic" />
                                          <v-card-title>
                                              <span class="gama-text-h6" >
                                                  {{ item.title }}
                                              </span>
                                              
                                          </v-card-title>
                                      </v-card>
                                     
                                  </v-card>
                              </v-slide-item>
                          </v-slide-group>
                      </v-col>
                  </v-row>
      </div>
      <!-- End featured blog section -->
      
       <!-- Search section -->
       <v-row id="blog-search">
            <v-col cols="12" class="pb-0">
                      <v-text-field  class="rounded-ts pr-0" dense outlined hide-details v-model="searchQuery"
                          label="Search">
                          <template slot="append-outer">
                              <v-btn :loading="searchLoading" dense color="#FFB300" class="white--text">
                                  <v-icon>mdi-magnify</v-icon>
                              </v-btn>
  
                          </template>
                      </v-text-field>
            </v-col>
       </v-row>
       <!-- Search section -->
  
  
       <!-- Category section -->
       <v-row justify="space-around" id="category-section">
      <v-col
        cols="12"
      >
        <v-card
          flat
          class="pb-4 px-1"
        >
          <v-chip-group
            mandatory
            active-class="active-cate"
          >
           <v-chip
              :x-small="$vuetify.breakpoint.xs"
              :large="$vuetify.breakpoint.mdAndUp"
              :key="0"
              @click="catVal=0"
            >
              All
            </v-chip>
            <v-chip
              :x-small="$vuetify.breakpoint.xs"
              :large="$vuetify.breakpoint.mdAndUp"
              v-for="cat in blogCats"
              :key="cat.id"
              @click="catVal=cat.id"
            >
              {{ cat.title }}
            </v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
    </v-row>
       <!-- End Category section -->
  
  
  
      <!-- Blog list section -->
      <div id="blog-list-section">
        <div v-if="blogList.length">
          <v-row class="blog-item"  v-for="(item, index) in blogList" :key="index">
          
          <v-col cols="9" class="mobile-item d-block d-sm-none">
            <v-card flat :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`">
                                      <v-card 
                                          class="ma-1">
                                          <v-img :src="item.pic" />
                                          <v-card-title>
                                              <span class="gama-text-button" >
                                                  {{ item.title }}
                                              </span>
                                          </v-card-title>
                                      </v-card>
                                      <div class="gama-text-subtitle2">
                                          <span v-html="truncateBody(item.body)"></span>
                                          <nuxt-link :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`">Read more</nuxt-link>
                                      </div>
                                  </v-card>
          </v-col>
          <v-col cols="10" sm="10" class="d-none d-sm-block">
            <div class="d-flex">
            <nuxt-link :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`">
              <v-img  :src="item.pic" />
            </nuxt-link>
  
              <div class="item-text">
                <nuxt-link :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`">
                <h2 class="gama-text-button">{{ item.title }}</h2>
                <span class="gama-text-subtitle2" v-html="truncateBody(item.body)"></span>
                <nuxt-link class="gama-text-subtitle2 read-more" :to="`/blog/${item.id}/${$slugGenerator.convert(item.title)}`">Read more</nuxt-link>
                
              </nuxt-link>
  
              </div>
            </div>
          </v-col>
          <v-col cols="3" sm=2>
            <div class="date-holder-container">
              <div class="date-holder">
                <div>
                  <div class="gama-text-button d-block">
                    {{ $moment(item.subdate).format("DD") }}
                  </div>
                  <div class="gama-text-overline d-block">
                    {{ $moment(item.subdate).format("MMM") }}
                  </div>
                </div>
              </div>
              <div class="vertical-line"></div>
              <div v-if="blogList.length - 1 == index" class="last-vertical-line"></div>
              <div class="year-holder" v-if="item.yearDisplay">
                <div v-if="index != 0" class="top-sign"></div>
                <div class="gama-text-overline">
                  {{ $moment(item.subdate).format("YYYY") }}
                </div>
                <div class="bottom-sign"></div>
              </div>
            </div>
          </v-col>
        </v-row>
        </nuxt-link>
        <v-row class="blog-item" v-if="allDataLoaded == false && this.paginateStatus==false && this.blogList.length>2">
          <v-col cols="12">
            <div class="d-none d-sm-flex">
              <div>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </div>
              <div class="text-loader-section">
                <v-skeleton-loader
                  type="card-heading,list-item-two-line"
                ></v-skeleton-loader>
              </div>
            </div>
            <div class="d-flex d-sm-none mobile-item">
                  <v-skeleton-loader class="mx-auto slide-loading" type="image"></v-skeleton-loader>
             </div>
          </v-col>
        </v-row>
      </div>
      <div v-else-if="blogList.length == 0 && blogLoading == false" class="text-center">
        <span class="gama-text-button"> Opps! no data found </span>
      </div>
      <div v-else>
        <v-row class="blog-item" v-for="i in 3">
          <v-col cols="12">
            <div class="d-none d-sm-flex">
              <div>
                <v-skeleton-loader type="image"></v-skeleton-loader>
              </div>
              <div class="text-loader-section">
                <v-skeleton-loader
                  type="card-heading,list-item-two-line"
                ></v-skeleton-loader>
              </div>
            </div>
            <div class="d-flex d-sm-none mobile-item">
              <v-skeleton-loader class="mx-auto slide-loading" type="image"></v-skeleton-loader>
            </div>
          </v-col>
        </v-row>
      </div>
  
      <div class="text-center">
        <v-pagination
          v-if="paginateStatus"
          v-model="pageNum"
          :length="pageCount"
          circle
        ></v-pagination>
      </div>
  
      <div ref="loaderSection"></div>
      </div>
      <!-- End blog list section -->
  
    </v-container>
  </template>
  
  <script>
  export default {
    auth: false,
    name: "blog-list",
    head() {
      return {
        title: "Blog list",
      };
    },
    data() {
      return {
        featuredItems:[],
        featureVal:0,
        isLoading: true,
        
  
  
        searchQuery:'',
        timer: 0,
        searchLoading:false,
  
        blogList: [],
        printedYearArr: [],
        pageNum: 1,
        pageSize: 15,
        pageCount: 0,
        blogLoading: true,
        featuredLoading: false,
        allDataLoaded: false,
        paginateStatus: false,
        enablePaginateStatus: 10,
  
        catVal:0,
        blogCats:[],
  
        intervalId: null, // Store the interval ID
        slideIndex:0,
        activeSlide:true
  
        
   };
    },
  
    watch: {
      pageNum(val) {
        this.updateQueryParams();
        
      },
      "$route.query.page"(val){
        if (this.paginateStatus) {
          const currentScrollPosition = window.scrollY;
          if (currentScrollPosition >= 10) {
            window.scrollTo(0, currentScrollPosition - 10);
          } else {
            window.scrollTo(0, 0);
          }
          this.printedYearArr=[];
          this.getBlogList();
        }
      },
      searchQuery(){
        this.updateQueryParams();
      },

      "$route.query.keyword"(val){
        this.searchLoading=true;
        
  
        if (this.timer) {
                  clearTimeout(this.timer);
                  this.timer = null;
              }
  
        this.timer = setTimeout(() => {
        this.allDataLoaded=false;
      this.paginateStatus=false;
        this.printedYearArr=[];
        this.pageNum=1;
        this.blogList=[];
        this.getBlogList();
      }, 800);
      },
  
       catVal(){
        this.updateQueryParams();
       },

       "$route.query.cat"(val){
        this.allDataLoaded=false;
        this.paginateStatus=false;
        this.printedYearArr=[];
        this.pageNum=1;
        this.blogList=[];
        this.getBlogList();
       }
    },
  
    mounted() {
      this.setupScrollListener();
      this.getFeaturedBlog(); //Get featured blog list
      this.getCate(); //Get category list
      
      //Init value
      this.searchQuery=this.$route.query.keyword;
      this.catVal=this.$route.query.cat;
      this.handleAutoCycle();  
      this.getBlogList(); //Get first blog list
       

      
  
    },
    methods: {
      getCate() {
        this.$axios
          .$get("/api/v1/types/list", {
            params: {
              type: "blog_cat",
            },
          })
          .then((response) => {
            this.blogCats=response.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      getFeaturedBlog(){
        var params = {
          featured:0
        };
        this.$axios.$get("/api/v1/blogs/search", { params })
        .then(response=>{
           this.featuredItems=response.data.list;
        }).catch(err=>{
           console.log(err);
        }).finally(()=>{
          this.isLoading=false;
        });
      },
      setupScrollListener() {
        this.$nextTick(() => {
          const targetDiv = this.$refs.loaderSection;
  
          window.addEventListener("scroll", () => {
            const rect = targetDiv.getBoundingClientRect();
            const isDivInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
            if (
              isDivInView &&
              this.allDataLoaded == false &&
              this.blogLoading == false &&
              this.paginateStatus==false
            ) {
              {
                this.pageNum++;
                this.getBlogList();
              }
            }
          });
        });
      },
      getBlogList() {
        var params = {};
        this.blogLoading = true;
  
        params.title=this.searchQuery;
        if(this.catVal!=0){
          params.cat=this.catVal;
        }
        params.page = this.pageNum;
        params.perpage = this.pageSize;
        this.$axios
          .$get("/api/v1/blogs/search", { params })
          .then((response) => {
            var data = response.data.list;
            this.pageCount = Math.ceil(response.data.num / this.pageSize);
            if (response.data.list.length === 0 && this.paginateStatus==false) {
              this.allDataLoaded = true; //To end loop
              this.pageNum--;
            }
  
            //Arrange data for show year
            for (var i = 0; i < data.length; i++) {
              var year = this.$moment(data[i].subdate).format("YYYY");
              if (this.printedYearArr.includes(year)) data[i].yearDisplay = false;
              else {
                data[i].yearDisplay = true;
                this.printedYearArr.push(year);
              }
            }
            //End arrange data for show year
            
  
            if (this.paginateStatus == false){
              this.blogList.push(...data);
            } 
            else this.blogList = data;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
              this.blogLoading = false;
              this.searchLoading=false;
              if (this.pageNum > this.enablePaginateStatus) this.paginateStatus = true;
          });
      },
      truncateBody(text) {
              var cutLength = 200;
              if (this.$vuetify.breakpoint.sm)
                  cutLength = 142;
              else if (this.$vuetify.breakpoint.xs)
                  cutLength = 38;
              return text.length > cutLength ? text.slice(0, cutLength) + '...' : text;
      },
      handleAutoCycle() {
        this.intervalId = setInterval(() => {
          this.activeSlide=false;

              if (this.slideIndex == (this.featuredItems.length - 1))
                  this.slideIndex = 0;
              else
                  this.slideIndex++;
            setTimeout(()=>{
              this.activeSlide=true;
            },300)

        
        }, 5000);
             


              
     },
     stopInterval() {
              clearInterval(this.intervalId); // Clear the interval using the interval ID
     },
     //Update router query params
    updateQueryParams() {
      const query = {}
      if (this.pageNum !== 0) {
        query.page = this.pageNum
      }
      if (this.searchQuery !='') {
        query.keyword = this.searchQuery;
      }
      
      if (this.catVal !== 0) {
        query.cat = this.catVal;
      }

      // Handle more query parameters here ...
      this.$router.replace({query: query}).catch(err => {
        //Do noting
      })
    }
    },
    beforeDestroy() {
          this.stopInterval();
      }
  };
  </script>
  
  <style scope>
  #blog-list-page {
    .blog-item {
      margin-bottom: 4.8rem;
      .v-image,
      .v-skeleton-loader__image {
        max-width: 17.9rem;
        min-width: 17.9rem;
        width: 17.9rem;
        height: 13.5rem;
        border-radius: 1rem;
        float: left;
      }
  
      .item-text {
        float: right;
        padding-left: 1.6rem;
  
        .gama-text-button {
          color: #24292f;
          margin-bottom: 2.4rem;
        }
  
        .gama-text-subtitle2 {
          color: #6e7781;
        }
      }
  
      .text-loader-section {
        width: 64vw;
      }
  
      .date-holder-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
  
        .date-holder {
          width: 5.6rem;
          height: 5.6rem;
          border-radius: 0.4rem;
          background: #ebebeb;
          display: flex;
          align-items: center;
          justify-content: center;
  
          z-index: 2;
  
          .gama-text-button {
            color: #24292f;
            margin-bottom:0.4rem;
          }
  
          .gama-text-overline {
            color: #a7b1c2;
          }
        }
  
        .vertical-line {
          position: absolute;
          top: 6.5rem;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto auto;
          transform: translateX(-50%);
          width: 1px;
          height: 25.5rem;
          background-color: #ebebeb;
          z-index: 1;
        }
  
        .last-vertical-line {
          position: absolute;
          top: 15.5rem;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto auto;
          transform: translateX(-50%);
          width: 2px;
          height: 15.5rem;
          background-color: #fff;
          z-index: 1;
        }
  
        .year-holder {
          position: absolute;
          top: -1rem;
          background: #fff;
          z-index: 2;
  
          .gama-text-overline {
            color: #a7b1c2;
          }
  
          .top-sign {
            position: absolute;
            top: -0.4rem;
            left: 0;
            right: 0.1rem;
            margin: auto auto;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            background: #ebebeb;
          }
  
          .bottom-sign {
            position: absolute;
            bottom: -0.4rem;
            left: 0;
            right: 0.1rem;
            margin: auto auto;
            width: 0.4rem;
            height: 0.4rem;
            background: #ebebeb;
            border-radius: 50%;
          }
        }
      }
  
  
      .mobile-item{
          .slide-loading {
  
            .v-skeleton-loader__image{
              min-width: 24rem;
              height:18rem;
              position: relative;
              border-radius: 0.6rem;
             }
          }
  
          .v-card {
              width: 24rem;
              height: 18rem;
              margin: auto auto;
              position: relative;
              border-radius: 0.6rem;
  
  
              .v-card {
                  width: 24rem;
                  height: 18rem;
  
                  .v-card__title {
                      border-radius: 0px 0px 6px 6px;
                      background: rgba(36, 41, 47, 0.70);
                      backdrop-filter: blur(7.5px);
                      position: absolute;
                      bottom: 0;
                      right: 0;
                      left: 0;
                      font-family: 'Inter';
                      margin: 0 auto;
                      color: #FFF;
                      padding-top: .6rem !important;
                      padding-bottom: .6rem;
                      height: 4.9rem;
                      max-height: 4.9rem;
  
                      .gama-text-button {
                          color: #FFF;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                      }
                  }
  
                  .v-image{
                    min-width: 24rem;
                    height: 18rem;
                  }
              }
          }
  
          .gama-text-subtitle2 {
              margin: auto auto;
              max-width: 18.2rem;
              text-align: left;
              color: #6E7781;
  
  
  
              &>a {
                  color: #FFB600;
  
              }
          }
      
      }
    }
  
  
    #featured-blog{
      margin: 5rem auto 2.4rem auto;
      height: 18rem;
     
  
      .slider {
          .slide-loading {
  
            .v-skeleton-loader__image{
              width: 24rem;
              height:18rem;
              margin-right: 1.6rem !important;
              position: relative;
              border-radius: 0.6rem;
            }
          }
  
          .v-card {
              width: 24rem;
              height: 18rem;
              max-height: 18rem;
              margin-right: 1.6rem;
              position: relative;
              border-radius: 0.6rem;
  
  
              .v-card {
                height: 18rem;
  
  
                  .v-card__title {
                      border-radius: 0px 0px 6px 6px;
                      background: rgba(36, 41, 47, 0.70);
                      backdrop-filter: blur(7.5px);
                      position: absolute;
                      bottom: 0;
                      right: 0;
                      left: 0;
                      font-family: 'Inter';
                      margin: 0 auto;
                      color: #FFF;
                      padding-top: .6rem !important;
                      padding-bottom: .6rem;
                      height: 5rem;
                      max-height: 5rem;
  
                      .gama-text-h6 {
                          color: #FFF;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                      }
                  }
  
                  .v-image{
                    width: 24rem;
              height: 18rem;
                  }
              }
          }
  
          .gama-text-subtitle2 {
              margin: auto auto;
              max-width: 18.2rem;
              text-align: left;
              color: #6E7781;
  
  
  
              &>a {
                  color: #FFB600;
  
              }
          }
      }
    }
  
    #blog-search{
      .v-text-field {
          width: 80%;
          min-height: auto;
          height: 4rem !important;
          border-radius:  3.8rem 0.4rem 0.4rem 3.8rem  ;
  
  
  
          margin: 1.6rem auto 1.6rem auto;
  
  
          .v-input__control>.v-input__slot {
              min-height: auto;
              height: 4rem !important;
              border-color:rgba(36, 41, 47, 0.30);
  
  
  
              &:before {
                  border-style: none;
  
              }
  
  
          }
  
          .v-input__append-outer {
                   margin: 0 0 0 0.8rem!important;
                  .v-btn {
                      min-width: auto;
                      width: 4rem!important;
                      height: 4rem;
                      border-radius: 0.4rem 3rem 3rem 0.4rem;
  
                      .v-icon{
                          color: #fff;
                          font-size: 2.2rem;
                      }
                  }
              }
      }
    }
  
    #category-section{
      .v-chip{
        padding: 0.8rem 2rem;
        color: rgba(255, 255, 255, 0.87);
        background: #A7B1C2!important;
      }
  
      .active-cate{
        background: #FFB600!important;
      }
    }
  }
  
  
  @media (min-width:600px) {
    #blog-list-page {
    .blog-item {
      margin-bottom: 4.8rem;
      .v-image,
      .v-skeleton-loader__image {
        max-width: 17.9rem;
        min-width: 17.9rem;
        width: 17.9rem;
        height: 13.5rem;
        border-radius: 1rem;
        float: left;
      }
  
      .item-text {
        float: right;
        padding-left: 1.6rem;
  
        .gama-text-button {
          color: #24292f;
          margin-bottom: 2.4rem;
        }
  
        .gama-text-subtitle2 {
          color: #6e7781;
        }
        .read-more{
          color: #FFB600;
        }
      }
  
      .text-loader-section {
        width: 64vw;
      }
  
      .date-holder-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
  
        .date-holder {
          width: 8.2rem;
          height: 8.2rem;
          border-radius: 0.4rem;
          background: #ebebeb;
          display: flex;
          align-items: center;
          justify-content: center;
  
          z-index: 2;
  
          .gama-text-button {
            color: #24292f;
          }
  
          .gama-text-overline {
            color: #a7b1c2;
          }
        }
  
        .vertical-line {
          position: absolute;
          top: 6.5rem;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto auto;
          transform: translateX(-50%);
          width: 1px;
          height: 21.5rem;
          background-color: #ebebeb;
          z-index: 1;
        }
  
        .last-vertical-line {
          position: absolute;
          top: 15.5rem;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto auto;
          transform: translateX(-50%);
          width: 2px;
          height: 11.5rem;
          background-color: #fff;
          z-index: 1;
        }
  
        .year-holder {
          position: absolute;
          top: -1rem;
          background: #fff;
          z-index: 2;
  
          .gama-text-overline {
            color: #a7b1c2;
          }
  
          .top-sign {
            position: absolute;
            top: -0.4rem;
            left: 0;
            right: 0.1rem;
            margin: auto auto;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            background: #ebebeb;
          }
  
          .bottom-sign {
            position: absolute;
            bottom: -0.4rem;
            left: 0;
            right: 0.1rem;
            margin: auto auto;
            width: 0.4rem;
            height: 0.4rem;
            background: #ebebeb;
            border-radius: 50%;
          }
        }
      }
    }
  
  
    #featured-blog{
      margin: 5rem auto 2.4rem auto;
      height: 28.1rem;
  
     
  
      .slider {
          .slide-loading {
            .v-skeleton-loader__image{
              width: 34.8rem;
              height: 26.1rem;
              margin-right: 1.6rem !important;
              position: relative;
              border-radius: 0.6rem;
            }
          }
  
          .v-card {
              width: 34.8rem;
               height: 26.1rem;
              max-height: 26.1rem;
              
  
  
              .v-card {
                height: 26.1rem;
  
  
                  .v-card__title {
                      padding-top: 1.16rem !important;
                      padding-bottom: 1.16rem;
                      height: 7.25rem;
                      max-height: 7.25rem;
  
                    
                  }
  
                .v-image{
                  width: 34.8rem;
                   height: 26.1rem;
                }  
              }
          }
  
      }
    }
  
    #blog-search{
      .v-text-field {
          width: 35.3rem;
          border-radius: 4rem 0.4rem 0.4rem 4rem;
  
      }
    }
    }
  }
  
  @media (min-width:960px){
    #blog-list-page {
      
     
    .blog-item {
      padding-left:1.2rem;
      padding-right:1.2rem;
      margin-bottom: 4.8rem;
  
      .v-image,
      .v-skeleton-loader__image {
        max-width: 17.9rem;
        min-width: 17.9rem;
        width: 17.9rem;
        height: 13.5rem;
        border-radius: 1rem;
        float: left;
      }
  
      .item-text {
        float: right;
        padding-left: 1.6rem;
  
        .gama-text-button {
          color: #24292f;
          margin-bottom: 2.4rem;
        }
  
        .gama-text-subtitle2 {
          color: #6e7781;
        }
  
        .read-more{
          color: #FFB600;
        }
      }
  
      .text-loader-section {
        width: 64vw;
      }
  
      .date-holder-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
  
        .date-holder {
          width: 8.2rem;
          height: 8.2rem;
          border-radius: 0.4rem;
          background: #ebebeb;
          display: flex;
          align-items: center;
          justify-content: center;
  
          z-index: 2;
  
          .gama-text-button {
            color: #24292f;
            margin-bottom:1.4rem;
          }
  
          .gama-text-overline {
            color: #a7b1c2;
          }
        }
  
        .vertical-line {
          position: absolute;
          top: 6.5rem;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto auto;
          transform: translateX(-50%);
          width: 1px;
          height: 21.5rem;
          background-color: #ebebeb;
          z-index: 1;
        }
  
        .last-vertical-line {
          position: absolute;
          top: 15.5rem;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto auto;
          transform: translateX(-50%);
          width: 2px;
          height: 11.5rem;
          background-color: #fff;
          z-index: 1;
        }
  
        .year-holder {
          position: absolute;
          top: -1rem;
          background: #fff;
          z-index: 2;
  
          .gama-text-overline {
            color: #a7b1c2;
          }
  
          .top-sign {
            position: absolute;
            top: -0.4rem;
            left: 0;
            right: 0.1rem;
            margin: auto auto;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            background: #ebebeb;
          }
  
          .bottom-sign {
            position: absolute;
            bottom: -0.4rem;
            left: 0;
            right: 0.1rem;
            margin: auto auto;
            width: 0.4rem;
            height: 0.4rem;
            background: #ebebeb;
            border-radius: 50%;
          }
        }
      }
    }
  
  
    #desktop-featured-blog{
      margin: 0.7rem auto 6.4rem auto;
      height: 50rem;
  
      #list-section{
        .gama-text-button{
          color: #7F8A9C;
          margin-bottom:1.6rem;
  
        }
        .featured-item{
          margin-bottom:0.8rem;
          display:flex;
  
          .v-skeleton-loader__image{
            width: 11.6rem;
            height: 8.7rem;
            margin-left:0.8rem;
            border-radius: 0.6rem;
          }
          .v-skeleton-loader__card-heading{
            width:15.2rem;
            max-width:15.2rem;
          }
  
          .v-image{
            width: 11.6rem;
            height: 8.7rem;
            border-radius: 0.6rem;
        }
  
        .item-text{
          padding:0.8rem;
  
          .gama-text-caption{
            color: #24292F;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        }
        }
      }
  
      #preview-section{
        border-radius: 1rem;
       

        .v-skeleton-loader__image{
            height:50rem;
            min-height:50rem;
            max-height:50rem;
            border-radius:1rem;
          }
        .v-card{
          height: 50rem;
          max-height: 50rem;
          min-height: 50rem;
          
          border-radius: 1rem;
  
          
  
          .v-card{
            border-radius:1rem;
  
          .v-card__title {
                      border-radius: 0px 0px 6px 6px;
                      background: rgba(36, 41, 47, 0.70);
                      backdrop-filter: blur(7.5px);
                      position: absolute;
                      bottom: 0;
                      right: 0;
                      left: 0;
                      font-family: 'Inter';
                      margin: 0 auto;
                      color: #FFF;
                      padding-top: .6rem !important;
                      padding-bottom: .6rem;
                      height: 6.4rem;
                      max-height: 6.4rem;
                      border-radius:0 0 1rem 1rem;
  
                      .gama-text-h6 {
                          color: #FFF;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                      }
                  }
  
          .v-image{
            max-height: 50rem;
            min-height: 50rem;
            border-radius:1rem;
            opacity: 0.5;
          }

          .active-img{
            opacity: 1!important;
            transition: opacity 1s;        

          }
          }
  
        }
      }
  
     
  
    }
  
    #blog-search{
      .v-text-field {
          width: 50rem;
          border-radius: 4rem 0.4rem 0.4rem 4rem;
  
      }
    }
    }
  }
  
  @media(min-width:1264px){
    #blog-list-page{
      width:72%;
      max-width:72%;
    }
  }
  </style>
  