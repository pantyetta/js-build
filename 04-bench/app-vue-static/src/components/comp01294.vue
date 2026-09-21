<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00943A, calcu00734A, calcu01165A, calcu00811A, calcu00859A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00943A(seed) - calcu00734A(seed) + calcu01165A(seed) - calcu00811A(seed) + calcu00859A(seed));
</script>

<template>
  <div class="blk">comp01294: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(213 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(33 50% 50%);
  display: inline-block;
}
</style>
