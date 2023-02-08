<script lang="ts" setup>
import { computed, ref } from 'vue';

const text = ref('')

const onBlur = ref(true)

const leftNumber = computed(() => text.value.length / 40 * 100)
const left = computed(() => {
  if (leftNumber.value > 75) {
    return `calc(100% - 60px)`
  }
  return `${leftNumber.value}%`
})
</script>

<template>
  <div class="container">
    <div class="eye">
      <div class="ball" :class="{ onBlur }" :style="{
        left
      }"></div>
    </div>
    <div class="eye">
      <div class="ball" :class="{ onBlur }" :style="{
        left
      }"></div>
    </div>
  </div>
  <input class="input" type="text" v-model="text" @blur="onBlur = true" @focus="onBlur = false">
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 20px;
  width: 400px;
}

.eye {
  position: relative;
  margin-bottom: 100px;
  padding: 50px 0;
  box-sizing: border-box;
  border: #000 solid 4px;
  border-radius: 100px;
  flex: 1;

  .ball {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #000;
    left: 0;
    transition: all .3s ease;
    transform: translateY(-20%);

    &.onBlur {
      left: 50% !important;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}

.input {
  width: 400px;
  font-size: 24px;
}
</style>
