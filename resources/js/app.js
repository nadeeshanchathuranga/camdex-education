import './bootstrap';
import { createApp, h } from 'vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router';
import Index from './views/Index.vue';
import About from './views/About.vue';
import Instructor from './views/Instructor.vue';
import ClassFees from './views/ClassFees.vue';

const routes = [
	{ path: '/', name: 'home', component: Index },
	{ path: '/about', name: 'about', component: About },
	{ path: '/instructor', name: 'instructor', component: Instructor },
	{ path: '/class-fees', name: 'class-fees', component: ClassFees },
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

const pageRouteMap = {
	index: '/',
	about: '/about',
	instructor: '/instructor',
	'class-fees': '/class-fees',
};

const targetPath = pageRouteMap[page] ?? '/';
if (router.currentRoute.value.path !== targetPath) {
	router.replace(targetPath);
}

app.use(router);
app.mount('#app');
