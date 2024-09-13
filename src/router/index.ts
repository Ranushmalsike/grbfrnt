import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

// Import additional views for new routes
// import DashboardView from '../views/DashboardView.vue'
// import TeamView from '../views/TeamView.vue'
// import ProjectsView from '../views/ProjectsView.vue'
// import CalendarView from '../views/CalendarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: DashboardView
    // },
    // {
    //   path: '/team',
    //   name: 'team',
    //   component: TeamView
    // },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: ProjectsView
    // },
    // {
    //   path: '/calendar',
    //   name: 'calendar',
    //   component: CalendarView
    // }
  ]
})

export default router
