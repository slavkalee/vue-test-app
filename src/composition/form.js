import { reactive } from 'vue';

export function useForm(value) {
  const form = reactive({
    noteTitle: value,
    todoTitle: '',
  });

  const add = (func) => {
    if (form.todoTitle) {
      func(form.todoTitle);
      form.todoTitle = '';
    }
  };

  return {
    form,
    add,
  };
}
