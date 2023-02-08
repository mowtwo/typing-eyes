<script setup lang="ts">
import { DialogProvider } from "./components/Dialog"
import Pages from "./pages/index.vue";

</script>

<template>
  <DialogProvider>
    <Pages />
  </DialogProvider>
</template>
