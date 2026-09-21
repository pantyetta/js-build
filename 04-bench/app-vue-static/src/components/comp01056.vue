<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00770A, calcu01284B, calcu00923B, calcu00732A, calcu00847B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00770A(seed) - calcu01284B(seed) + calcu00923B(seed) - calcu00732A(seed) + calcu00847B(seed));
</script>

<template>
  <div class="blk">comp01056: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(161 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(341 50% 50%);
  display: inline-block;
}
</style>
