import Vue from 'vue';
import Router from 'vue-router';
import List from './views/List.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
		},
		{
			path: '/:id',
			name: 'Edit',
			component: Edit,
		},
  ],
});
