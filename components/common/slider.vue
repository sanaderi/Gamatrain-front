<template>

  <v-sheet
    class="mx-auto"
    max-width="1400"
  >
    <v-slide-group
      multiple
      show-arrows
      class="stat-sec"
    >
      <v-slide-item
        v-for="n in 8"
        :key="n"
      >
       <div
          class="
            d-flex
            justify-space-between
            align-center
            flex-wrap
            stat-holder
            mt-5
          "
         >
          <div
            v-for="(item, index) in statList"
            :key="index"
            class="
              d-flex
              flex-column
              justify-center
              align-center
              px-3
              stat-item
            "
          >
            <span class="stat-icon d-flex align-center justify-center">
              <i :class="'fa solid ' + item.icon"> </i>
            </span>
            <span class="stat-label">{{ item.label }}</span>
            <span class="stat-value">{{ item.value }} +</span>
          </div>
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
     statList: [
      { label: "مدرسه", value: "130,000", icon: "fa-graduation-cap" },
      { label: "دبیر", value: "300,000", icon: "fa-graduation-cap" },
      { label: "دانش آموز", value: "1,500,000", icon: "fa-graduation-cap" },
      { label: "نمونه سوال", value: "50,000", icon: "fa-graduation-cap" },
      { label: "پاورپوینت", value: "30,000", icon: "fa-graduation-cap" },
      { label: "آزمون آنلاین", value: "5,000", icon: "fa-graduation-cap" },
    ],
    }),
  }
</script>