<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01400B, calcu01416A, calcu00865B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01400B(seed) - calcu01416A(seed) + calcu00865B(seed));
</script>

<template>
  <div class="blk">comp01223: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(13 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(193 50% 50%);
  display: inline-block;
}
</style>
