import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BaseCard, BaseButton, BaseBadge } from "@/components";

createApp(App)
  .component("base-card", BaseCard)
  .component("base-button", BaseButton)
  .component("base-badge", BaseBadge)
  .use(store)
  .use(router)
  .mount("#app");
