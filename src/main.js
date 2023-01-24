import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './components/App.vue'
import store from './store.js'

const app = createApp(App)
app.use(store)

this.$store.commit('setCount', this.students.length);
const routes =[
    {path: "/", component: Students},
    {path: "/student-info/:id", component: StudentInfo, props:true}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app');
