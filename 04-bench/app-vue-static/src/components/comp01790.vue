<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01555A, calcu00773A, calcu01160B, calcu00570A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01555A(seed) - calcu00773A(seed) + calcu01160B(seed) - calcu00570A(seed));
</script>

<template>
  <div class="blk">comp01790: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(180 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(0 50% 50%);
  display: inline-block;
}
</style>
