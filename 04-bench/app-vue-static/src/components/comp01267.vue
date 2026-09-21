<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00044A, calcu00466B, calcu01100A, calcu00687B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00044A(seed) - calcu00466B(seed) + calcu01100A(seed) - calcu00687B(seed));
</script>

<template>
  <div class="blk">comp01267: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>
