import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export function useNote(value, arr = []) {
  const store = useStore();
  const router = useRouter();
  const route = useRoute();

  const note = reactive({
    title: value,
    todos: arr,
  });

  const addNote = (title) => {
    if (!title) return;

    store.commit('addNewNote', {
      id: Date.now(),
      title,
      todos: note.todos,
    });
    router.push('/');
  };

  const editCurrentNote = (title) => {
    if (!title) return;
    const id = route.params.id;

    store.commit('editNote', {
      id,
      title,
      todos: note.todos,
    });
    router.push('/');
  };

  const addTodo = (title) => {
    if (!title) return;
    
    note.todos.unshift({
      id: Date.now(),
      title,
      completed: false,
    });
  };

  const removeTodo = (id) => {
    note.todos = note.todos.filter((todo) => todo.id !== id);
  };

  const toggleTodo = (id) => {
    note.todos = note.todos.map((todo) => {
      const t = { ...todo };
      if (+t.id === +id) {
        t.completed = !t.completed;
      }
      return t;
    });
  };

  const changeTodo = (id, title) => {
    note.todos = note.todos.map((todo) => {
      const t = { ...todo };
      if (+id === +t.id) {
        t.title = title;
      }
      return t;
    });
  };

  return {
    note,
    addNote,
    editCurrentNote,
    addTodo,
    removeTodo,
    changeTodo,
    toggleTodo,
  };
}
