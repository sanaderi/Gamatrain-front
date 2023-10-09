<template>
  <v-container id="blog-list-page">
    <div id="featured-blog">
      <v-row>
                    <v-col cols="12">
                        <v-slide-group v-model="featureVal" class="slider py-sm-4" :show-arrows="$vuetify.breakpoint.lgAndUp">
                            <div class="d-flex" v-if="isLoading">
                                <v-slide-item v-for="i in 10" :key="i">
                                    <v-skeleton-loader class="mx-auto slide-loading" type="card"></v-skeleton-loader>
                                </v-slide-item>
                            </div>


                            <v-slide-item v-else v-for="(item, n) in featuredItems" :key="n">
                                <v-card flat :to="`/blog/${item.id}/${item.title}`" class="ma-1">
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
    

     <v-row id="blog-search">
          <v-col cols="12">
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
    <div id="blog-list-section">
      <div v-if="blogList.length">
        <v-row class="blog-item"  v-for="(item, index) in blogList" :key="index">
        <v-col cols="10">
          <div class="d-flex">
          <nuxt-link :to="`/blog/${item.id}`">
            <v-img  :src="item.pic" />
          </nuxt-link>

            <div class="item-text">
              <nuxt-link :to="`/blog/${item.id}`">
              <h2 class="gama-text-button">{{ item.title }}</h2>
              <p class="gama-text-subtitle2" v-html="item.body"></p>
            </nuxt-link>

            </div>
          </div>
        </v-col>
        <v-col cols="2">
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
          <div class="d-flex">
            <div>
              <v-skeleton-loader type="image"></v-skeleton-loader>
            </div>
            <div class="text-loader-section">
              <v-skeleton-loader
                type="card-heading,list-item-two-line"
              ></v-skeleton-loader>
            </div>
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
          <div class="d-flex">
            <div>
              <v-skeleton-loader type="image"></v-skeleton-loader>
            </div>
            <div class="text-loader-section">
              <v-skeleton-loader
                type="card-heading,list-item-two-line"
              ></v-skeleton-loader>
            </div>
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

      
 };
  },

  watch: {
    pageNum(val) {
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

    }
  },

  mounted() {
    this.setupScrollListener();
    this.getFeaturedBlog(); //Get featured blog list
    // this.getCate(); //Get category list
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
          console.log(response.data);
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
  },
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
    height: 18rem;
   

    .slider {
        .slide-loading {
            width: 21.9rem;
            margin-right: 1.6rem !important;
            position: relative;
            border-radius: 0.6rem;
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
            width: 34.8rem;
            height: 26.1rem;
            margin-right: 1.6rem !important;
            position: relative;
            border-radius: 0.6rem;
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
            width: 34.8rem;
            height: 26.1rem;
            margin-right: 1.6rem !important;
            position: relative;
            border-radius: 0.6rem;
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
        width: 50rem;
        border-radius: 4rem 0.4rem 0.4rem 4rem;

    }
  }
  }
}
</style>
