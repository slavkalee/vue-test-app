import { createRouter, createWebHistory } from 'vue-router';
import ListOfNotes from '../views/ListOfNotes.vue';
import CreateNote from '../views/CreateNote.vue';

const routes = [
  {
    path: '/',
    name: 'List of Notes',
    component: ListOfNotes,
  },
  {
    path: '/create',
    name: 'Create Note',
    component: CreateNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
