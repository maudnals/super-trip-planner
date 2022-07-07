import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TripsListView from '../views/TripsListView.vue';
import NewTripView from '../views/NewTripView.vue';
import TripView from '../views/TripView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import TripIdeasView from '../views/TripIdeasView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/trip-ideas',
      name: 'trip ideas',
      component: TripIdeasView,
    },
    {
      path: '/trips',
      name: 'trips',
      component: TripsListView,
    },
    {
      path: '/new-trip',
      name: 'new trip',
      component: NewTripView,
    },
    {
      path: '/trip',
      name: 'trip',
      component: TripView,
    },
    {
      path: '/not-found',
      name: 'not found',
      component: NotFoundView,
    },
  ],
});

export default router;
