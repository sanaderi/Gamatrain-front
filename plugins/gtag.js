import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: "G-VLSLZJR0WK" },
    },
    app.router
  );
};
