import { createApp } from "vue";
import { router, routerHistory } from "./router";

import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.mount("#main");
