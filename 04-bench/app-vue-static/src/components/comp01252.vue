<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00532A, calcu01273B, calcu00558B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00532A(seed) - calcu01273B(seed) + calcu00558B(seed));
</script>

<template>
  <div class="blk">comp01252: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(125 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(305 50% 50%);
  display: inline-block;
}
</style>
