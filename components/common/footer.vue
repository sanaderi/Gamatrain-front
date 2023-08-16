<template>
  <v-container fluid class="px-0 pb-0">
    <v-container id="footer" class="px-sm-9 px-md-3">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="text-center text-sm-left">
          <img id="logo" alt="gamatrain" src="/images/gamatrain-logo-black.svg" />
          <div id="short-describe">
            Our mission is to provide all training services to anyone and anywhere.
          </div>
          <div>
            <nuxt-link to="/" class="v-btn">
              <v-icon>mdi-twitter</v-icon>
            </nuxt-link>
            <nuxt-link to="/" class="v-btn">
              <v-icon>
                mdi-facebook
              </v-icon>
            </nuxt-link>
            <nuxt-link to="/" class="v-btn">
              <v-icon>
                mdi-instagram
              </v-icon>
            </nuxt-link>
          </div>

        </v-col>
        <v-col sm="3" md="3" class="d-none d-sm-block" v-for="(item, i) in footerLinks" :key="i">
          <div class="link-title">
            {{ item.mainTitle }}
          </div>
          <nuxt-link v-for="link in item.subMenu" :key="link.link" :to="link.link" class="footer-link">
            {{ link.title }}
          </nuxt-link>
        </v-col>


        <v-col cols="12" class="d-block d-sm-none">
          <v-expansion-panels focusable flat id="mobile-footer-panels">
            <v-expansion-panel v-for="(item, i) in footerLinks" :key="i" style="border-bottom: 0.5px solid #424A53;">
              <v-expansion-panel-header class="link-title">{{ item.mainTitle }}</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-4">
                <nuxt-link v-for="link in item.subMenu" :key="link.link" :to="link.link" class="footer-link">
                  {{ link.title }}
                </nuxt-link>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

      </v-row>
    </v-container>
    <v-container fluid id="footer-copy-right" class="px-0">
      <v-row>
        <v-col cols="12" class="pt-3 pb-1 text-center">
          <span class="describe">All Right Reserved.Copyright @ 2023</span>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          mainTitle: 'We',
          subMenu: [
            {
              title: 'About us',
              link: '/about-us'
            },
            {
              title: 'Terms',
              link: '/terms'
            },
            {
              title: 'FAQ',
              link: '/faq'
            }
          ]
        },
        {
          mainTitle: 'Services',
          subMenu: [
            {
              title: 'Paper',
              link: '/search?type=test'
            },
            {
              title: 'School finder',
              link: '/school-service'
            },
            {
              title: 'Exam',
              link: '/search?type=azmoon'
            }
          ]
        }
      ]
    }
  }
}
</script>



<style>
#footer {
  margin-top: 4rem;

  #logo {
    width: 10.5996rem;
    height: 3.2rem;
    margin-bottom: 1.5rem;
  }

  #short-describe {
    color: #6E7781;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    margin-bottom: 1.2rem;
    font-family: 'Inter-Medium';
  }

  .v-btn {
    background-color: #FFB600;
    height: 2rem !important;
    width: 2rem !important;
    border-radius: 0.3125rem;
    margin: 0.1rem;

    .v-icon {
      font-size: 1.5rem;
      color: #fff;

    }
  }

  .link-title {
    color: #424A53;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem;
    font-family: 'Inter-Bold';


  }

  .footer-link {
    display: block;
    text-decoration: none;
    margin-bottom: 1rem;
    color: #6E7781;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.92rem;
  }
}


#footer-copy-right {
  background: #24292F;
  padding-bottom: 0;
  margin-top: 4rem;

  .describe {
    color: #FFF;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    font-family: 'Inter-Meduim';
    line-height: 1.92rem;
  }
}
</style>