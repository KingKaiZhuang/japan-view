import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import $ from 'jquery';

const app = createApp(App);

// 使用 app.config.globalProperties.$ 設置全局屬性
app.config.globalProperties.$ = {
  jquery: $
};

app.use(router).mount('#app');
