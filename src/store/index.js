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
          { id: 1, title: 'ReactJS', completed: true },
          { id: 2, title: 'Next.js', completed: true },
          { id: 3, title: 'MobX', completed: true },
        ],
      },
    ],
  },
  mutations: {
    addNewNote(state, payload) {
      state.notes.push(payload);
    },
    editNote(state, payload) {
      state.notes = state.notes.map((note) => {
        if (+note.id === +payload.id) {
          note.title = payload.title;
          note.todos = payload.todos;
        }
        return note;
      });
    },
    removeNote(state, id) {
      state.notes = state.notes.filter((note) => +note.id !== +id);
    },
  },
  getters: {
    allNotes(state) {
      return state.notes;
    },
    getNoteById: (state) => (id) => state.notes.find((n) => n.id === +id),
  },
});
