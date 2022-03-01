import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CreateComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;