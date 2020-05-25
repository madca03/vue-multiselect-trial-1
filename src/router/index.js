import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueMultiselect1 from "@/views/vue-multiselect-1.vue";
import VueMultiselect2 from "@/views/vue-multiselect-2.vue";
import VueMultiselect3 from "@/views/vue-multiselect-3.vue";
import VueMultiselect4 from "@/views/vue-multiselect-4.vue";
import VueMultiselect5 from "@/views/vue-multiselect-5.vue";
import VueMultiselect7 from "@/views/vue-multiselect-7.vue";
import VueMultiselect8 from "@/views/vue-multiselect-8.vue";
import VueMultiselect9 from "@/views/vue-multiselect-9.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ex1",
    name: "vue-multiselect-1",
    component: VueMultiselect1,
  },
  {
    path: "/ex2",
    name: "vue-multiselect-2",
    component: VueMultiselect2,
  },
  {
    path: "/ex3",
    name: "vue-multiselect-3",
    component: VueMultiselect3,
  },
  {
    path: "/ex4",
    name: "vue-multiselect-4",
    component: VueMultiselect4,
  },
  {
    path: "/ex5",
    name: "vue-multiselect-5",
    component: VueMultiselect5,
  },
  {
    path: "/ex7",
    name: "vue-multiselect-7",
    component: VueMultiselect7,
  },
  {
    path: "/ex8",
    name: "vue-multiselect-8",
    component: VueMultiselect8,
  },
  {
    path: "/ex9",
    name: "vue-multiselect-9",
    component: VueMultiselect9,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
