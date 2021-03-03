import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [
      {
        id: 1,
        title: 'First Note',
        todos: [
          { id: 1, title: 'Vuex', completed: false },
          { id: 2, title: 'Vuetify', completed: true },
          { id: 3, title: 'VueRouter', completed: false },
        ],
      },
      {
        id: 2,
        title: 'Second Note',
        todos: [
          { id: 1, title: 'ReactJS', completed: true },
          { id: 2, title: 'Next.js', completed: false },
          { id: 3, title: 'MobX', completed: true },
        ],
      },
    ],
  },
  mutations: {
    // saveNote(state, title) {
    //   if (title.trim()) {
    //     state.notes.unshift({
    //       id: Date.now(),
    //       title,
    //       todos: state.currentNote.todos,
    //     });
    //   }
    // },
    // removeNote(state, id) {
    //   state.notes = state.notes.filter((n) => n.id !== id);
    // },
    addNewNote(state, payload) {
      state.notes.push(payload)
    }
  },
  getters: {
    allNotes(state) {
      return state.notes;
    },
    getNoteById: (state) => (id) => state.notes.find((n) => n.id === +id),
  },
  actions: {},
});
