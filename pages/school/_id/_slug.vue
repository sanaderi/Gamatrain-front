<template>
  <v-container id="shcool-details">
    <v-row>
      <v-col cols="4">
        <img id="schoolDetailsImg" src="/images/school-default.png" alt="School image" />
      </v-col>
      <v-col cols="4">
        <client-only>
          <l-map
            ref="schoolMap"
            :zoom="map.zoom"
            :min-zoom="map.minZoom"
            :center="map.center"
            id="schoolDetailsMap"
          >
            <l-tile-layer :url="map.url"></l-tile-layer>
            <l-marker
              @click="$router.push(`/school/1`)"
              :lat-lng="map.latLng"
              :icon="map.schoolIcon"
            ></l-marker>
          </l-map>
        </client-only>
      </v-col>
      <v-col cols="4">
        <div>
          <client-only>
            <a-scene embedded id="schoolDetailsVr">
              <a-sky src="/images/school-vr.png"></a-sky>
            </a-scene>
          </client-only>
        </div>
      </v-col>
    </v-row>

    <!-- General data section -->
    <v-row>
      <v-col cols="8">
        <h1 class="gtext-h4">North Carolina School of Science and Mathematics</h1>
      </v-col>
      <v-col cols="4">
        <div class="float-right d-flex mt-1">
          <v-icon size="20" class="primary-gray-300">mdi-heart</v-icon>
          <div class="rate-section gtext-t4 font-weight-semibold ml-4">
            3.1
            <v-icon size="20" color="primary"> mdi-star </v-icon>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <div class="d-flex">
          <div>
            <v-chip class="list-chip gtext-t5 font-weight-medium" small> Pre-K </v-chip>
            <v-chip class="list-chip gtext-t5 font-weight-medium" small> Private </v-chip>
            <v-chip class="list-chip gtext-t5 font-weight-medium" small> Online </v-chip>
            <v-chip class="list-chip gtext-t5 font-weight-medium" small> Islamic </v-chip>
          </div>
          <v-spacer />

          <div class="gtext-t4 primary-blue-500">You enter</div>
        </div>

        <div class="d-flex mt-11 mb-9">
          <div class="gtext-h5 primary-gray-600">Tuition fee</div>
          <v-spacer />
          <div class="gtext-t2 font-weight-heavy primary-gray-800">
            <span class="gtext-t6">$</span>
            {{ "1200" | numberFormat }}
          </div>
        </div>
        <div class="d-flex">
          <div class="gtext-h5 primary-gray-600">
            <div class="mb-4">Facilities</div>
            <div>
              <v-btn class="bg-primary-gray-800 white--text" height="56" width="56">
                <v-icon size="24"> mdi-bus </v-icon>
              </v-btn>
              <v-btn class="bg-primary-gray-800 white--text" height="56" width="56">
                <v-icon size="24"> mdi-food </v-icon>
              </v-btn>
              <v-btn class="bg-primary-gray-800 white--text" height="56" width="56">
                <v-icon size="24"> mdi-basketball </v-icon>
              </v-btn>
              <v-btn
                class="bg-primary-gray-800 white--text"
                disabled
                height="56"
                width="56"
              >
                <v-icon size="24"> mdi-wifi-arrow-down </v-icon>
              </v-btn>
            </div>
          </div>
          <v-spacer />
          <div class="gtext-t4 primary-blue-500 align-self-center">You enter</div>
        </div>
      </v-col>
      <v-col cols="4" id="main-info-section">
        <div class="d-flex info-itm">
          <div class="info-sign">
            <v-icon color="primary"> mdi-web </v-icon>
          </div>
          <div class="info-data">
            <a :href="normalizeURL('www.schoolcitycenterstablesg.com')" target="_blenk">
              www.schoolcitycenterstablesg.com
            </a>
          </div>
        </div>

        <div class="d-flex info-itm">
          <div class="info-sign">
            <v-icon color="primary"> mdi-email </v-icon>
          </div>
          <div class="info-data">
            <a href="mailto:info@schoolcitycenterstablesg.com">
              info@schoolcitycenterstablesg.com
            </a>
          </div>
        </div>

        <div class="d-flex info-itm">
          <div class="info-sign">
            <v-icon color="primary"> mdi-phone </v-icon>
          </div>
          <div class="info-data">
            <a href="tel:+98 123 000 45 67"> +98 123 000 45 67 </a>
          </div>
        </div>

        <div class="d-flex info-itm">
          <div class="info-sign">
            <v-icon size="20" color="primary"> mdi-map-marker </v-icon>
          </div>
          <div class="info-data">20 Mine ST,Center,...,NH 033</div>
        </div>
      </v-col>
    </v-row>

    <!-- End general data section -->

    <v-row class="mt-16">
      <v-col cols="4">
        <h3 class="gtext-h5 primary-gray-600 mb-15">Users score</h3>
        <div class="d-flex">
          <img src="/images/score.png" alt="Users score" class="mr-8" />
          <div class="mt-10">
            <div class="gtext-t6 primary-gray-400 mb-10">
              Total comments <span class="primary-gray-800 font-weight-heavy">650</span>
            </div>
            <div class="mb-4">
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                half-increments
                hover
                size="24"
              ></v-rating>
            </div>
            <div class="gtext-t6 primary-gray-400">
              Average score &nbsp;<span class="primary-gray-900 gtext-t4 font-weight-medium">3.2</span
              ><span>&nbsp;/&nbsp;5</span>
            </div>
          </div>
        </div>
        <div class="my-12"><v-btn block class="bg-primary-gray-800 white--text text-transform-none gtext-t4 font-weight-medium" rounded x-large>Leave comment</v-btn></div>

      </v-col>
      <v-col cols="8"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "school-details",
  auth: false,
  data() {
    return {
      map: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        zoom: 10,
        minZoom: 2,
        center: [39.90063873634048, -83.44667778604482], // Initial map center coordinates
        latLng: [39.90063873634048, -83.44667778604482],
        object: null,
        boundingBox: {},
        schoolIcon: null,

        rating: 4,
      },
    };
  },
  mounted() {
    this.rating = 3.5;
    this.map.schoolIcon = L.icon({
      iconUrl: "/images/school-marker.png", // Replace with school marker icon
      iconSize: [64, 64], // Adjust the size as needed
      iconAnchor: [16, 32], // Adjust the anchor point as needed
    });
  },
  methods: {
    normalizeURL(url) {
      // Check if the URL starts with 'http://' or 'https://'
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        // If not, assume it's 'http://'
        return "http://" + url;
      }
      // If it already has a protocol, leave it as is
      return url;
    },
    onLoad() {
      alert("hh");
    },
  },
};
</script>

<style scoped>
#schoolDetailsImg {
  height: 28.1rem;
  max-height: 28.1rem;
  width: 100%;
  border-radius: 0.6rem;
}

#schoolDetailsVr {
  height: 28.1rem;
  max-height: 28.1rem;
  width: 100%;
}

#schoolDetailsVr .a-canvas {
  border-radius: 0.6rem !important;
}
#schoolDetailsMap {
  border-radius: 0.6rem;
  height: 28.1rem;
  max-height: 28.1rem;
  width: 100%;
}

.list-chip {
  background: var(--primary-warning-50, #fffaeb) !important;
  color: var(--primary-yellow-gama-500, #ffb600) !important;
}

#main-info-section {
  .info-itm {
    margin-bottom: 0.8rem;
    margin-left: 2.4rem;
    .info-sign {
      width: 5.6rem;
      min-width: 5.6rem;
      height: 5.6rem;
      border-radius: 0.6rem;
      border: 1px solid var(--Primary-Yellow-Gama-50, #fff8ed);
      background: #fff;
      box-shadow: 2px 6px 24px 0px rgba(16, 24, 40, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info-data {
      width: 100%;
      height: 5.6rem;
      border-radius: 0.6rem;
      border: 1px solid var(--Primary-Yellow-Gama-50, #fff8ed);
      background: var(--White, #fff);
      box-shadow: 2px 6px 24px 0px rgba(16, 24, 40, 0.05);
      display: flex;
      justify-content: left;
      padding: 1.5rem 1.6rem 1.5rem 1.6rem;
      align-items: center;
      margin-left: 0.4rem;
    }
  }
}
</style>
