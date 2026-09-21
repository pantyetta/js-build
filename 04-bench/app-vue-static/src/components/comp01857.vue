<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01553B, calcu00882A, calcu01211B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01553B(seed) - calcu00882A(seed) + calcu01211B(seed));
</script>

<template>
  <div class="blk">comp01857: {{ total }}</div>
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
