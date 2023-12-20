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
          <div class="gtext-h5 primary-gray-600 ">
            <div class="mb-4">Facilities</div>
            <div>
              <v-btn class="bg-primary-gray-800 white--text" height="56" width="56">
                <v-icon size="24">
                  mdi-bus
                </v-icon>
              </v-btn>
              <v-btn class="bg-primary-gray-800 white--text"  height="56" width="56">
                <v-icon size="24">
                  mdi-food
                </v-icon>
              </v-btn>
              <v-btn class="bg-primary-gray-800 white--text"  height="56" width="56">
                <v-icon size="24">
                  mdi-basketball
                </v-icon>
              </v-btn>
              <v-btn class="bg-primary-gray-800 white--text"  disabled height="56" width="56">
                <v-icon size="24">
                  mdi-wifi-arrow-down
                </v-icon>
              </v-btn>
            </div>
          </div>
          <v-spacer />
          <div class="gtext-t4 primary-blue-500 align-self-center">You enter</div>
        </div>
      </v-col>
      <v-col cols="4"> </v-col>
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
      },
    };
  },
  mounted() {
    this.map.schoolIcon = L.icon({
      iconUrl: "/images/school-marker.png", // Replace with school marker icon
      iconSize: [64, 64], // Adjust the size as needed
      iconAnchor: [16, 32], // Adjust the anchor point as needed
    });
  },
  methods: {
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
</style>
