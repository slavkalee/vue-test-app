import { createRouter, createWebHistory } from 'vue-router';
import ListOfNotes from '../views/ListOfNotes.vue';
import Note from '../views/Note.vue';

const routes = [
  {
    path: '/',
    name: 'List of Notes',
    component: ListOfNotes,
  },
  {
    path: '/note',
    name: 'Create',
    component: Note,
  },
  {
    path: '/note/:id',
    name: 'Edit',
    component: Note,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
