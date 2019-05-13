import { emitter, action, $ } from "luft";

const state = emitter({
  actions: {
    addTodo: action((state, value) => (state.todos[Math.random()] = { value }))
  },
  total: $(todos => Object.keys(todos).length, "todos"),
  name: "vrde",
  todos: {}
});

export default state;
