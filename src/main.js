/**
 * App Entry File
 * Vuely: A Powerfull Material Design Admin Template
 * Copyright 2018. All Rights Reserved
 * Created By: The Iron Network, LLC
 * Made with Love
 */
import 'babel-polyfill';
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'

import { Vue2Dragula } from 'vue2-dragula'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueResource from 'vue-resource'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
import Nprogress from 'nprogress'
import VueI18n from 'vue-i18n'
import fullscreen from 'vue-fullscreen'
import InstantSearch from 'vue-instantsearch'

// global components
import GlobalComponents from './globalComponents'

// app.vue
import App from './App'

// router
import router from './router'

// store
import { store } from './store/store';

// firebase
import './firebase'


// include all css files
import './lib/VuelyCss'

// messages
import messages from './lang';

Vue.config.productionTip = false;

// navigation guards before each
router.beforeEach((to, from, next) => {
	Nprogress.start()
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (localStorage.getItem('user') === null) {
			next({
				path: '/session/login',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next() // make sure to always call next()!
	}
})

// navigation guard after each
router.afterEach((to, from) => {
	Nprogress.done()
	setTimeout(() => {
		const contentWrapper = document.querySelector(".v-content__wrap");
		if(contentWrapper !== null){
			contentWrapper.scrollTop = 0;
		}
		const boxedLayout = document.querySelector('.app-boxed-layout .app-content');
		if(boxedLayout !==  null){
			boxedLayout.scrollTop = 0;
		}
		const miniLayout = document.querySelector('.app-mini-layout .app-content');
		if(miniLayout !== null){
			miniLayout.scrollTop = 0;
		}
	}, 200);
})


Vue.use(InstantSearch);
Vue.use(VueI18n)
Vue.use(Vue2Dragula)
Vue.use(VueResource)
Vue.use(VueBreadcrumbs)
Vue.use(Notifications, { velocity })
Vue.use(fullscreen);
Vue.use(GlobalComponents);

// Create VueI18n instance with options
const i18n = new VueI18n({
	locale: store.getters.selectedLocale.locale, // set locale
	messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
	store,
	i18n,
	router,
	vuetify,
	render: h => h(App),
	components: { App }
}).$mount('#app')