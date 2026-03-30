import './bootstrap';
import { createApp, h } from 'vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router';
import Index from './views/Index.vue';
import About from './views/About.vue';

const routes = [
	{ path: '/', name: 'home', component: Index },
	{ path: '/about', name: 'about', component: About },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}

		if (to.hash) {
			return {
				el: to.hash,
				top: 90,
				behavior: 'smooth',
			};
		}

		return { top: 0 };
	},
});

const app = createApp({
	render: () => h(RouterView),
});

const appElement = document.getElementById('app');
const page = appElement?.dataset?.page;

if (page === 'about') {
	router.replace('/about');
} else {
	router.replace('/');
}

app.use(router);
app.mount('#app');
