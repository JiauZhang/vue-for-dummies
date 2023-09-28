<script setup lang="ts">
  import { ref } from "vue"

  const msg = ref("Declarative Rendering");

  const p_red = ref("p-red");
  const p_blue = ref("p-blue");

  const click_count = ref(0)
  function inc() {
    click_count.value++;
  }

  const text = ref("");
  function onInput(e) {
    text.value = e.target.value;
  }
  const v_model_text = ref("");

  const cond = ref(true);
  const toggle_btn_text = ref("show");
  function toggle() {
    cond.value = !cond.value;
    if (cond.value)
      toggle_btn_text.value = "hidden";
    else
      toggle_btn_text.value = "show";
  }

  let todo_id = 0;
  const todos = ref([
    {id: todo_id++, text: "text #" + todo_id.toString() +": a"},
    {id: todo_id++, text: "text #" + todo_id.toString() +": b"},
  ]);
  const newTodo = ref("");
  function addTodo() {
    if (!newTodo.value.length)
      return;
    todos.value.push({
      id: todo_id++,
      text: "text #" + todo_id.toString() +": " + newTodo.value
    });
    newTodo.value = "";
  }
  function removeTodo(todo) {
    todos.value = todos.value.filter((todo_) => todo_.id !== todo.id);
  }
</script>

<template>
  <h2>1. Getting Started!</h2>

  <!-- ref(), reactive() https://vuejs.org/guide/essentials/reactivity-fundamentals.html -->
  <h2>2. Declarative Rendering</h2>
  <p>{{ msg }}</p>
  <p>{{ msg.split('').reverse().join('') }}</p>

  <h2>3. Attribute Bindings</h2>
  <p :class="p_red">Attribute Bindings directive: [v-bind, :]</p>
  <p v-bind:class="p_blue">v-bind</p>

  <h2>4. Event Listeners</h2>
  <p :class="p_red">Event Listeners directive: [v-on, @]</p>
  <button @click="inc">click count: {{ click_count }}</button>

  <!-- https://vuejs.org/guide/essentials/forms.html -->
  <h2>5. Form Bindings: two-way bindings</h2>
  <p>[v-on & v-bind]: {{ text }}</p>
  <input @input="onInput" :value="text" placeholder="input here"/>
  <p>[v-model]: {{ v_model_text }}</p>
  <input v-model="v_model_text" placeholder="input here"/>

  <!-- https://vuejs.org/guide/essentials/conditional.html -->
  <h2>6. Conditional Rendering</h2>
  <button @click="toggle">{{ toggle_btn_text }}</button>
  <p v-if="cond">show rendering</p>
  <p v-else>hidden rendering</p>

  <h2>7. List Rendering</h2>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

  <h2>8. Computed Property</h2>
</template>

<style scoped>
.p-red {
  color: red;
}
.p-blue {
  color: blue;
}
.p-green {
  color: green;
}
</style>