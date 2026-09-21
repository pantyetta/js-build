<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00734A, calcu00546A, calcu00096A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00734A(seed) - calcu00546A(seed) + calcu00096A(seed));
</script>

<template>
  <div class="blk">comp00804: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(306 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(126 50% 50%);
  display: inline-block;
}
</style>
