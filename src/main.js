import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAtdGIVjN2POosbE5mZGAv0XHZbDf-cKtc",
  authDomain: "authentification-eaa14.firebaseapp.com",
  projectId: "authentification-eaa14",
  storageBucket: "authentification-eaa14.appspot.com",
  messagingSenderId: "1048209798305",
  appId: "1:1048209798305:web:0334314b390c86bb7dece0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
