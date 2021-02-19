import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [
      {
        id: 1,
        title: 'First Note',
        todos: [
          { id: 1, title: 'Vuex', completed: false },
          { id: 2, title: 'Vuetify', completed: false },
          { id: 3, title: 'VueRouter', completed: false },
        ],
      },
      {
        id: 2,
        title: 'Second Note',
        todos: [
          { id: 1, title: 'ReactJS', completed: false },
          { id: 2, title: 'Next.js', completed: false },
          { id: 3, title: 'MobX', completed: false },
        ],
      },
    ],
  },
  mutations: {
    removeNote(state, id) {
      state.notes = state.notes.filter((n) => n.id !== id);
    },
    addNote(state, payload) {
      state.notes.unshift(payload);
    },
  },
  getters: {
    allNotes(state) {
      return state.notes;
    },
  },
  actions: {},
});
