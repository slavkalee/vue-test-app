import { createRouter, createWebHistory } from 'vue-router';
import ListOfNotes from '../views/ListOfNotes.vue';
import CreateNote from '../views/CreateNote.vue';
import EditNote from '../views/EditNote.vue';

const routes = [
  {
    path: '/',
    name: 'List of Notes',
    component: ListOfNotes,
  },
  {
    path: '/note',
    name: 'Create',
    component: CreateNote,
  },
  {
    path: '/note/:id',
    name: 'Edit',
    component: EditNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
