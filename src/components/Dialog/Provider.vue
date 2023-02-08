<script lang="ts" setup>
import { provide, ref } from 'vue';
import { DialogContext, IDialogProps, key } from './context';
import Dialog from './Dialog.vue';

interface DialogProps extends IDialogProps {
  id: number
}

const dialogList = ref<DialogProps[]>([])

const remove = (id: number) => {
  const index = dialogList.value.findIndex(dialog => dialog.id === id)
  dialogList.value.splice(index, 1)
}

provide<DialogContext>(key, {
  push(dialog) {
    dialogList.value.push({
      ...dialog,
      id: Date.now()
    })
  }
})
</script>

<template>
  <div class="dialog-container">
    <Dialog v-for="dialog of dialogList" :key="dialog.id" :title="dialog.title" :duration="dialog.duration"
      @destory="remove(dialog.id)" />
  </div>
  <slot></slot>
</template>

<style lang="scss" scoped>
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
