import { create } from 'zustand';

export const useEditorStore = create((set) => ({
  title: '',
  content: null,

  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
  setEditorData: (data) =>
    set({ title: data.title ?? '', content: data.content ?? null }),
  resetEditor: () => set({ title: '', content: null }),
}));
