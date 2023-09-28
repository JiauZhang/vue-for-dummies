<script setup lang="ts">
import { ref } from "vue";
import GetStarted from "./components/01_get_started.vue";
import DeclarativeRendering from "./components/02_declarative_rendering.vue";
import AttributeBindings from "./components/03_attribute_bindings.vue";
import EventListeners from "./components/04_event_listeners.vue";
import FormBindings from "./components/05_form_bindings.vue";
import ConditionalRendering from "./components/06_conditional_rendering.vue";
import ListRendering from "./components/07_list_rendering.vue";
import ComputedProperty from "./components/08_computed_property.vue";
</script>

<template>
  <GetStarted></GetStarted>
  <DeclarativeRendering></DeclarativeRendering>
  <AttributeBindings></AttributeBindings>
  <EventListeners></EventListeners>
  <FormBindings></FormBindings>
  <ConditionalRendering></ConditionalRendering>
  <ListRendering></ListRendering>
  <ComputedProperty></ComputedProperty>
</template>
