<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00864A, calcu01076A, calcu00666A, calcu01416B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00864A(seed) - calcu01076A(seed) + calcu00666A(seed) - calcu01416B(seed));
</script>

<template>
  <div class="blk">comp00470: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(181 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(1 50% 50%);
  display: inline-block;
}
</style>
