<script lang="ts" setup>
import type { IDialogProps } from './context';
import { TransitionSlide } from "@morev/vue-transitions"
import { onBeforeUnmount, onMounted, reactive } from 'vue';

const props = defineProps<{
  title: string
  duration?: number
}>()

const emit = defineEmits<{
  (e: 'destory'): void
}>()

let timer: number;

onMounted(() => {
  const duration = props?.duration ?? 1500
  timer = setTimeout(() => {
    emit('destory')
  }, duration);
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})
</script>

<template>
  <TransitionSlide :duration="1000">
    <div class="dialog">
      <div class="wrapper">
        {{ title }}
      </div>
    </div>
  </TransitionSlide>
</template>

<style lang="scss" scoped>
.dialog {
  text-align: right;
  margin: 10px;
  pointer-events: none;

  .wrapper {
    display: inline-block;
    padding: 6px 20px;
    background-color: #fff;
    box-shadow: rgba($color: #000000, $alpha: .08) 2px 2px 6px,
      rgba($color: #000000, $alpha: .06) -1px -1px 3px;
    border-radius: 4px;

    user-select: none;
    cursor: pointer;
    pointer-events: all;
  }
}
</style>
