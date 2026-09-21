<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01078B, calcu00303B, calcu00203A, calcu01124B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01078B(seed) - calcu00303B(seed) + calcu00203A(seed) - calcu01124B(seed));
</script>

<template>
  <div class="blk">comp01165: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>
