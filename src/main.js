import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";
import VueKatex from "vue-katex";
import "katex/dist/katex.min.css";
import Vuelidate from "vuelidate";
import VueSocketIO from "vue-socket.io";
import io from "socket.io-client";
const socketUrl = env => {
  if (env === "development") {
    return "http://localhost:3000";
  }

  return "https://www.eulerkidsapi.com";
};
const baseUrl = env => {
  if (env === "development") {
    return (axios.defaults.baseURL = "http://localhost:3000");
  }

  return (axios.defaults.baseURL = "https://www.eulerkidsapi.com");
};
baseUrl(process.env.NODE_ENV);
export const socketInstance = io(socketUrl(process.env.NODE_ENV), {
  transports: ["websocket", "polling"]
});
socketInstance.on("connection", () => {
  console.log("connected");
});

Vue.use(VueKatex);
Vue.use(Vuelidate);
Vue.use(
  new VueSocketIO({
    debug: false,
    connection: socketInstance,
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  sockets: {
    connect() {
      // console.log("socket connected fronted");
      // console.log(socketInstance.io.engine.transport.name);
      const EKCode = this.$store.state.EKCode;
      const gameNickname = this.$store.state.gameNickname;
      const userData = {
        room: EKCode,
        username: gameNickname
      };

      this.$socket.emit("lostConnectionChecker", userData);
    },
    disconnect() {
      console.log("socket disconnected...");
    }
  },
  render: h => h(App)
}).$mount("#app");
