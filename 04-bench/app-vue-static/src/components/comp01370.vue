<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00997A, calcu01140B, calcu00271B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00997A(seed) - calcu01140B(seed) + calcu00271B(seed));
</script>

<template>
  <div class="blk">comp01370: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(41 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(221 50% 50%);
  display: inline-block;
}
</style>
