import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { CoachesListView } from "@/views";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    component: CoachesListView,
  },
  {
    path: "/coach/:id",
    component: () => import("@/views/Coach/CoachDetailView.vue"),
    children: [
      {
        path: "contact",
        component: () => import("@/views/Request/ContactCoachView.vue"),
      },
    ],
  },
  {
    path: "/requests",
    component: () => import("@/views/Request/RequestsListView.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/Coach/CoachRegistrationView.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
