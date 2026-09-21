<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00001A, calcu00160B, calcu00528A, calcu01198A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00001A(seed) - calcu00160B(seed) + calcu00528A(seed) - calcu01198A(seed));
</script>

<template>
  <div class="blk">comp00861: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(317 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(137 50% 50%);
  display: inline-block;
}
</style>
