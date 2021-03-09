import { onMounted, ref } from "vue";

export function useFocus() {
  const noteFocus = ref(null);

    onMounted(() => {
      focusNoteInput();
    });

    const focusNoteInput = () => {
      noteFocus.value.focus();
    };

  return {
    noteFocus
  }
}