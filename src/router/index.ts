import { createRouter, createWebHistory } from 'vue-router';
import TripsListView from '../views/TripsListView.vue';
import NewTripView from '../views/NewTripView.vue';
import TripView from '../views/TripView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import TripIdeasView from '../views/TripIdeasView.vue';
import DebuggerView from '../views/DebuggerView.vue';
import AboutView from '../views/AboutView.vue';
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trips',
      component: TripsListView,
    },
    {
      path: '/new-trip',
      name: 'new-trip',
      component: NewTripView,
    },
    {
      path: '/trip',
      name: 'trip',
      component: TripView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/trip-ideas',
      name: 'trip-ideas',
      component: TripIdeasView,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
    },
    {
      path: '/debugger',
      name: 'debugger',
      component: DebuggerView,
    },
  ],
});

export default router;
